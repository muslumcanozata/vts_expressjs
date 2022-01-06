class Vehicle {
    constructor({ id, vehiclePlate, currentStatus, isActive } = {}) {
        this.id = id;
        this.vehicle_plate = vehiclePlate;
        this.current_status = currentStatus;
        this.isActive = isActive;
    }

    getId() {
        return this.id;
    }

    getVehiclePlate() {
        return this.vehicle_plate;
    }

    getCurrentStatus() {
        return this.current_status;
    }

    getIsActive() {
        return this.is_active;
    }

    setId(id) {
        this.id = id;
    }

    setVehiclePlate(vehiclePlate) {
        this.vehicle_plate = vehiclePlate;
    }

    setCurrentStatus(currentStatus) {
        this.current_status = currentStatus;
    }

    setIsActive(isActive) {
        this.is_active = isActive;
    }
}

module.exports = Vehicle;