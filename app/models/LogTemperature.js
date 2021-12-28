class LogTemperature {
    constructor({ id, vehicle_id, device_id, read_data, created_at }) {
        this.id = id;
        this.vehicle_id = vehicle_id;
        this.device_id = device_id;
        this.read_data = read_data;
        this.created_at = created_at;
    }
}

module.exports = LogTemperature;