export const capacityLimits = {
  siteKw: 100,
  requestedChargingKw: 70,
  minBuildingKw: 10,
  maxBuildingKw: 90,
};

export function compareChargingDemand(buildingKw) {
  const availableKw = Math.max(0, capacityLimits.siteKw - buildingKw);
  const chargingKw = Math.min(capacityLimits.requestedChargingKw, availableKw);
  const drawKw = buildingKw + chargingKw;

  return {
    availableKw,
    chargingKw,
    requestedKw: buildingKw + capacityLimits.requestedChargingKw,
    drawKw,
    reductionKw: capacityLimits.requestedChargingKw - chargingKw,
    headroomKw: capacityLimits.siteKw - drawKw,
  };
}

// Three independent snapshots of power on the AC side of the installation.
export const daySnapshots = [
  {time: '08:00', image: 'morning', buildingKw: 32, vehicleKw: 16, solarKw: 8, batterySupportKw: 0},
  {time: '13:00', image: 'midday', buildingKw: 24, vehicleKw: 24, solarKw: 80, batterySupportKw: 0},
  {time: '18:00', image: 'evening', buildingKw: 48, vehicleKw: 24, solarKw: 0, batterySupportKw: 24},
];

export function calculateDayFlow(snapshot, storageEnabled) {
  const demandKw = snapshot.buildingKw + snapshot.vehicleKw;
  const surplusKw = snapshot.solarKw - demandKw;
  const batteryChargeKw = storageEnabled ? Math.max(0, surplusKw) : 0;
  const batterySupplyKw = storageEnabled ? Math.min(snapshot.batterySupportKw, Math.max(0, -surplusKw)) : 0;
  const netImportKw = demandKw + batteryChargeKw - snapshot.solarKw - batterySupplyKw;
  const gridImportKw = Math.max(0, netImportKw);
  const gridExportKw = Math.max(0, -netImportKw);

  return {
    gridImportKw,
    gridExportKw,
    batterySupplyKw,
    batteryChargeKw,
    supplyKw: snapshot.solarKw + gridImportKw + batterySupplyKw,
    useKw: demandKw + batteryChargeKw + gridExportKw,
  };
}
