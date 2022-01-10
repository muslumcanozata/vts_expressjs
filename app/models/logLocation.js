class LogLocation {
    constructor({ id, vehicleId, deviceId, latitude, longitude, createdAt } = {}) {
        this.id = id;
        this.vehicle_id = vehicleId;
        this.device_id = deviceId;
        this.latitude = latitude;
        this.longitude = longitude;
        this.created_at = createdAt;
    }
}

module.exports = LogLocation;