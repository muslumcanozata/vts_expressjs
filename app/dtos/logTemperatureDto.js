class LogTemperatureDto {
    constructor({ id, vehicleId, deviceId, readData, createdAt } = {}) {
        this.id = id;
        this.vehicleId = vehicleId;
        this.deviceId = deviceId;
        this.readData = readData;
        this.createdAt = createdAt;
    }
}

module.exports = LogTemperatureDto;