class VehicleDto {
    constructor({ id, vehiclePlate, currentStatus, isActive } = {}) {
        this.id = id;
        this.vehiclePlate = vehiclePlate;
        this.currentStatus = currentStatus;
        this.isActive = isActive;
    }
}

module.exports = VehicleDto;