class Device {
    constructor({ id, deviceTypeId, deviceName, isOnline, isActive } = {}) {
        this.id = id;
        this.deviceTypeId = deviceTypeId;
        this.deviceName = deviceName;
        this.isOnline = isOnline;
        this.isActive = isActive;
    }
}

module.exports = Device;