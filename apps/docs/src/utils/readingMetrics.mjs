export const readingMinutes = text => Math.max(1, Math.ceil((text.trim().match(/\S+/g)?.length ?? 0) / 200));
export function articleProgress(rect, viewportHeight) {
  const range = rect.height - viewportHeight;
  if (range <= 0) return rect.top + rect.height <= viewportHeight ? 1 : 0;
  return Math.min(1, Math.max(0, -rect.top / range));
}
export const resumeTarget = (rect, viewportHeight, scrollY, progress) =>
  Math.max(0, scrollY + rect.top + Math.max(0, rect.height - viewportHeight) * Math.min(1, Math.max(0, progress)));
