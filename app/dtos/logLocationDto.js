class LogLocationDto {
    constructor({id, vehicleId, deviceId, latitude, longitude, createdAt} = {}) {
        this.id = id;
        this.vehicleId = vehicleId;
        this.deviceId = deviceId;
        this.latitude = latitude;
        this.longitude = longitude;
        this.createdAt = createdAt;
    }
}

module.exports = LogLocationDto;