class Vehicles {
    constructor({ id, vehicle_plate, current_status, is_active } = {}) {
        this.id = id;
        this.vehicle_plate = vehicle_plate;
        this.current_status = current_status;
        this.is_active = is_active;
    }
}

module.exports = Vehicles;