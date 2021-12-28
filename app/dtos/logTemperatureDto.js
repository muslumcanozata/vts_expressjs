class LogTemperatureDto {
    constructor({ id, vehicleId, deviceId, readData, createdAt } = {}) {
        this.id = id;
        this.vehicleId = vehicleId;
        this.deviceId = deviceId;
        this.readData = readData;
        this.createdAt = createdAt;
    }

    getId() {
        return this.id;
    }

    getVehicleId() {
        return this.vehicleId;
    }

    getDeviceId() {
        return this.deviceId;
    }

    getReadData() {
        return this.readData;
    }

    getCreatedAt() {
        return this.createdAt;
    }

    setId(id) {
        this.id = id;
    }

    setVehicleId(vehicleId) {
        this.vehicleId = vehicleId;
    }

    setDeviceId(deviceId) {
        this.deviceId = deviceId;
    }

    setReadData(readData) {
        this.readData = readData;
    }

    setCreatedAt(createdAt) {
        this.createdAt = createdAt;
    }
}

module.exports = LogTemperatureDto;