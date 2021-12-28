class DevicesTypeDto {
    constructor({ id, deviceName, deviceDescription, isActive } = {}) {
        this.id = id;
        this.deviceName = deviceName;
        this.deviceDescription = deviceDescription;
        this.isActive = isActive;
    }

    getId() {
        return this.id;
    }

    getDeviceName() {
        return this.deviceName;
    }

    getDeviceDescription() {
        return this.deviceDescription;
    }

    getIsActive() {
        return this.isActive;
    }

    setId(id) {
        this.id = id;
    }

    setDeviceName(deviceName) {
        this.deviceName = deviceName;
    }

    setDeviceDescription(deviceDescription) {
        this.deviceDescription = deviceDescription;
    }

    setIsActive(isActive) {
        this.isActive = isActive;
    }
}

module.exports = DevicesTypeDto;