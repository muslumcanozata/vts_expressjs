class LogLocation {
    constructor({ id, vehicleId, deviceId, latitude, longitude, createdAt } = {}) {
        this.id = id;
        this.vehicle_id = vehicleId;
        this.device_id = deviceId;
        this.latitude = latitude;
        this.longitude = longitude;
        this.created_at = createdAt;
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

    getLatitude() {
        return this.latitude;
    }

    getLongitude() {
        return this.longitude;
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

    setLatitude(latitude) {
        this.latitude = latitude;
    }

    setLongitude(longitude) {
        this.longitude = longitude;
    }

    setCreatedAt(createdAt) {
        this.created_at = createdAt;
    }
}

module.exports = LogLocation;