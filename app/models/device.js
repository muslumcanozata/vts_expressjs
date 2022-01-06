class Device {
    constructor({ id, deviceTypeId, deviceName, isOnline, isActive } = {}) {
        this.id = id;
        this.device_type_id = deviceTypeId;
        this.device_name = deviceName;
        this.is_online = isOnline;
        this.is_active = isActive;
    }

    getId() {
        return this.id;
    }

    getDeviceTypeId() {
        return this.device_type_id;
    }

    getDeviceName() {
        return this.device_name;
    }

    getIsOnline() {
        return this.is_online;
    }

    getIsActive() {
        return this.is_active;
    }

    setId(id) {
        this.id = id;
    }

    setDeviceTypeId(deviceTypeId) {
        this.device_type_id = deviceTypeId;
    }

    setDeviceName(deviceName) {
        this.device_name = deviceName;
    }

    setIsOnline(isOnline) {
        this.is_online = isOnline;
    }

    setIsActive(isActive) {
        this.is_active = isActive;
    }
}

module.exports = Device;