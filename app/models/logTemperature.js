class LogTemperature {
    constructor({ id, vehicleId, deviceId, readData, createdAt } = {}) {
        this.id = id;
        this.vehicle_id = vehicleId;
        this.device_id = deviceId;
        this.read_data = readData;
        this.createdAt = createdAt;
    }
}

module.exports = LogTemperature;