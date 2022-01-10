class DevicesType {
    constructor({id, deviceName, deviceDescription, isActive} = {}) {
        this.id = id;
        this.device_name = deviceName;
        this.device_description = deviceDescription;
        this.isActive = isActive;
    }
}

module.exports = DevicesType;