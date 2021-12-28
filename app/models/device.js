class Device {
    constructor({ id, device_type_id, device_name, is_online, is_active }) {
        this.id = id;
        this.device_type_id = device_type_id;
        this.device_name = device_name;
        this.is_online = is_online;
        this.is_active = is_active;
    }
}

module.exports = Device;