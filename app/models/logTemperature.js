class LogTemperature {
    constructor({ id, vehicleId, deviceId, readData, createdAt } = {}) {
        this.id = id;
        this.vehicle_id = vehicleId;
        this.device_id = deviceId;
        this.read_data = readData;
        this.createdAt = createdAt;
    }

    getId() {
        return this.id;
    }

    getVehicleId() {
        return this.vehicle_id;
    }

    getDeviceId() {
        return this.device_id;
    }

    getReadData() {
        return this.read_data;
    }

    getCreatedAt() {
        return this.created_at;
    }

    setId(id) {
        this.id = id;
    }

    setVehicleId(vehicleId) {
        this.vehicle_id = vehicleId;
    }

    setDeviceId(deviceId) {
        this.device_id = deviceId;
    }

    setReadData(readData) {
        this.read_data = readData;
    }

    setCreatedAt(createdAt) {
        this.created_at = createdAt;
    }
}

module.exports = LogTemperature;