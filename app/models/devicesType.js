class DevicesType {
    constructor({ id, device_name, device_description, is_active }) {
        this.id = id;
        this.device_name = device_name;
        this.device_description = device_description;
        this.is_active = is_active;
    }
}

module.exports = DevicesType;