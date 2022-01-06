class DevicesType {
    constructor({ id, deviceName, deviceDescription, isActive } = {}) {
        this.id = id;
        this.device_name = deviceName;
        this.device_description = deviceDescription;
        this.isActive = isActive;
    }

    getId() {
        return this.id;
    }

    getDeviceName() {
        return this.device_name;
    }

    getDeviceDescription() {
        return this.device_description;
    }

    getIsActive() {
        return this.is_active;
    }

    setId(id) {
        this.id = id;
    }

    setDeviceName(deviceName) {
        this.device_name = deviceName;
    }

    setDeviceDescription(deviceDescription) {
        this.device_description = deviceDescription;
    }

    setIsActive(isActive) {
        this.is_active = isActive;
    }
}

module.exports = DevicesType;