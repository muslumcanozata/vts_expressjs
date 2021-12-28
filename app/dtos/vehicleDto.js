class VehicleDto {
    constructor({ id, vehiclePlate, currentStatus, isActive } = {}) {
        this.id = id;
        this.vehiclePlate = vehiclePlate;
        this.currentStatus = currentStatus;
        this.isActive = isActive;
    }

    getId() {
        return this.id;
    }

    getVehiclePlate() {
        return this.vehiclePlate;
    }

    getCurrentStatus() {
        return this.currentStatus;
    }

    getIsActive() {
        return this.isActive;
    }

    setId(id) {
        this.id = id;
    }

    setVehiclePlate(vehiclePlate) {
        this.vehiclePlate = vehiclePlate;
    }

    setCurrentStatus(currentStatus) {
        this.currentStatus = currentStatus;
    }

    setIsActive(isActive) {
        this.isActive = isActive;
    }
}

module.exports = VehicleDto;