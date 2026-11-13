import assert from 'node:assert/strict';
import test from 'node:test';
import {calculateDayFlow, compareChargingDemand, daySnapshots} from '../src/components/EnergyVisuals/powerModel.mjs';

test('Each displayed power snapshot balances, with and without storage', () => {
  for (const snapshot of daySnapshots) {
    for (const enabled of [false, true]) {
      const flow = calculateDayFlow(snapshot, enabled);
      assert.equal(flow.supplyKw, flow.useKw);
      assert.equal(Math.min(flow.gridImportKw, flow.gridExportKw), 0);
      assert.equal(Math.min(flow.batteryChargeKw, flow.batterySupplyKw), 0);
      assert.ok(flow.supplyKw <= 80, 'The chart uses a shared 80 kW scale');
      if (!enabled) assert.equal(flow.batteryChargeKw + flow.batterySupplyKw, 0);
    }
  }
});

test('Storage changes the direction of the midday surplus and reduces evening import', () => {
  const [morning, midday, evening] = daySnapshots;
  assert.equal(calculateDayFlow(morning, true).gridImportKw, 40);
  assert.equal(calculateDayFlow(midday, true).batteryChargeKw, 32);
  assert.equal(calculateDayFlow(midday, false).gridExportKw, 32);
  assert.equal(calculateDayFlow(evening, true).batterySupplyKw, 24);
  assert.equal(calculateDayFlow(evening, true).gridImportKw, 48);
  assert.equal(calculateDayFlow(evening, false).gridImportKw, 72);
});

test('Every slider position retains building demand and bounds charging to the site limit', () => {
  for (let buildingKw = 10; buildingKw <= 90; buildingKw++) {
    const result = compareChargingDemand(buildingKw);
    assert.equal(result.requestedKw, buildingKw + 70);
    assert.equal(result.drawKw, buildingKw + result.chargingKw);
    assert.equal(result.drawKw + result.headroomKw, 100);
    assert.equal(result.drawKw + result.reductionKw, result.requestedKw);
    assert.ok(result.drawKw <= 100 && result.chargingKw <= 70);
  }
  assert.equal(compareChargingDemand(45).chargingKw, 55);
  assert.equal(compareChargingDemand(90).reductionKw, 60);
});
