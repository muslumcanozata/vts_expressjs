class DeviceDto {
    constructor({ id, deviceTypeId, deviceName, isOnline, isActive } = {}) {
        this.id = id;
        this.deviceTypeId = deviceTypeId;
        this.deviceName = deviceName;
        this.isOnline = isOnline;
        this.isActive = isActive;
    }

    getId() {
        return this.id;
    }

    getDeviceTypeId() {
        return this.deviceTypeId;
    }

    getDeviceName() {
        return this.deviceName;
    }

    getIsOnline() {
        return this.isOnline;
    }

    getIsActive() {
        return this.isActive;
    }

    setId(id) {
        this.id = id;
    }

    setDeviceTypeId(deviceTypeId) {
        this.deviceTypeId = deviceTypeId;
    }

    setDeviceName(deviceName) {
        this.deviceName = deviceName;
    }

    setIsOnline(isOnline) {
        this.isOnline = isOnline;
    }

    setIsActive(isActive) {
        this.isActive = isActive;
    }
}

module.exports = DeviceDto;