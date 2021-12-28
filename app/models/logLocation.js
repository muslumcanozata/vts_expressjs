class LogLocation {
    constructor({ id, vehicle_id, device_id, latitude, longitude, created_at }) {
        this.id = id;
        this.vehicle_id = vehicle_id;
        this.device_id = device_id;
        this.latitude = latitude;
        this.longitude = longitude;
        this.created_at = created_at;
    }
}

module.exports = LogLocation;