import { spawnSync } from 'node:child_process';
import { cp, mkdtemp, readFile, rename, rm, stat, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const staging = await mkdtemp(join(root, '.release-'));
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const hosts = [
  { app: 'web', host: 'stroomlijnen.nl', script: 'build', output: 'dist' },
  { app: 'web', host: 'commercieel.stroomlijnen.nl', script: 'build:commercial', output: 'dist-commercial' },
  { app: 'cultuur', host: 'cultuur.stroomlijnen.nl', script: 'build', output: 'dist' },
  { app: 'hospitality', host: 'hospitality.stroomlijnen.nl', script: 'build', output: 'dist-production' },
  { app: 'docs', host: 'docs.stroomlijnen.nl', script: 'build', output: 'build' }
];

function run(command, args, cwd) {
  const result = spawnSync(command, args, {
    cwd, stdio: 'inherit',
    env: { ...process.env, ASTRO_TELEMETRY_DISABLED: '1', DOCUSAURUS_DISABLE_VERSION_CHECK: '1' }
  });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(args.join(' ') + ' failed in ' + cwd);
}

try {
  for (const app of new Set(hosts.map(site => site.app))) {
    if (app === 'hospitality') continue;
    const cwd = join(root, 'apps', app);
    const lockfile = await readFile(join(cwd, 'package-lock.json'));
    const installedLock = join(cwd, 'node_modules', '.stroomlijnen-lock.json');
    const current = await readFile(installedLock).catch(() => null);
    if (!current?.equals(lockfile)) {
      run(npm, ['ci', '--include=dev', '--no-audit', '--no-fund'], cwd);
      await writeFile(installedLock, lockfile);
    }
  }
  for (const {app, host, script, output} of hosts) {
    const cwd = join(root, 'apps', app);
    run(npm, ['run', script], cwd);
    await cp(join(cwd, output), join(staging, 'release', host), { recursive: true });
  }
  run(process.execPath, [join(root, 'scripts/verify-release.mjs'), join(staging, 'release')], root);
  // Keep the existing apex hosting configuration working: npm run build still emits dist/.
  await cp(join(staging, 'release', hosts[0].host), join(staging, 'dist'), {recursive: true});
  for (const name of ['dist', 'release']) {
    const dest = join(root, name);
    const previous = join(staging, name + '-prior');
    if (await stat(dest).catch(() => null)) await rename(dest, previous);
    try { await rename(join(staging, name), dest); }
    catch (error) {
      if (await stat(previous).catch(() => null)) await rename(previous, dest);
      throw error;
    }
  }
} finally {
  await rm(staging, { recursive: true, force: true });
}
