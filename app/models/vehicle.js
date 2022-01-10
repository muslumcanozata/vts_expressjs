class Vehicle {
    constructor({ id, vehiclePlate, currentStatus, isActive } = {}) {
        this.id = id;
        this.vehicle_plate = vehiclePlate;
        this.current_status = currentStatus;
        this.isActive = isActive;
    }
}

module.exports = Vehicle;