class LogLocationDto {
    constructor({id, vehicleId, deviceId, latitude, longitude, createdAt} = {}) {
        this.id = id;
        this.vehicleId = vehicleId;
        this.deviceId = deviceId;
        this.latitude = latitude;
        this.longitude = longitude;
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

    getLatitude() {
        return this.latitude;
    }

    getLongitude() {
        return this.longitude;
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

    setLatitude(latitude) {
        this.latitude = latitude;
    }

    setLongitude(longitude) {
        this.longitude = longitude;
    }

    setCreatedAt(createdAt) {
        this.createdAt = createdAt;
    }
}

module.exports = LogLocationDto;