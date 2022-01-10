class DevicesTypeDto {
    constructor({ id, deviceName, deviceDescription, isActive } = {}) {
        this.id = id;
        this.deviceName = deviceName;
        this.deviceDescription = deviceDescription;
        this.isActive = isActive;
    }
}

module.exports = DevicesTypeDto;