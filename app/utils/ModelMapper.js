const Device = require("../models/device");
const DevicesType = require("../models/devicesType");
const LogLocation = require("../models/logLocation");
const LogTemperature = require("../models/logTemperature");
const Vehicle = require("../models/vehicle");
const DeviceDto = require("../dtos/deviceDto");
const DevicesTypeDto = require("../dtos/devicesTypeDto");
const LogLocationDto = require("../dtos/logLocationDto");
const LogTemperatureDto = require("../dtos/logTemperatureDto");
const VehicleDto = require("../dtos/vehicleDto");

class ModelMapper {
    constructor() {
    }

    static dtoToDevice(deviceDto) {
        let device = new Device();

        device.id = deviceDto.id;
        device.deviceTypeId = deviceDto.deviceTypeId;
        device.deviceName = deviceDto.deviceName;
        device.isOnline = deviceDto.isOnline;
        device.isActive = deviceDto.isActive;

        return device;
    }

    static deviceToDto(device) {
        let deviceDto = new DeviceDto();

        deviceDto.id = device.id;
        deviceDto.deviceTypeId = device.deviceTypeId;
        deviceDto.deviceName = device.deviceName;
        deviceDto.isOnline = device.isOnline;
        deviceDto.isActive = device.isActive;

        return deviceDto;
    }


    static dtoToDevicesType(devicesTypeDto) {
        let devicesType = new DevicesType();

        devicesType.setId(devicesTypeDto.getId());
        devicesType.setDeviceName(devicesTypeDto.getDeviceName());
        devicesType.setDeviceDescription(devicesTypeDto.getDeviceDescription());
        devicesType.setIsActive(devicesTypeDto.getIsActive());

        return devicesType;
    }

    static devicesTypeToDto(devicesType) {
        let devicesTypeDto = new DevicesTypeDto();

        devicesTypeDto.setId(devicesType.id);
        devicesTypeDto.setDeviceName(devicesType.deviceName());
        devicesTypeDto.setDeviceDescription(devicesType.deviceDescription);
        devicesTypeDto.setIsActive(devicesType.isActive);

        return devicesTypeDto;
    }

    static dtoToLogLocation(logLocationDto) {
        let logLocation = new LogLocation();

        logLocation.setId(logLocationDto.getId());
        logLocation.setVehicleId(logLocationDto.getVehicleId());
        logLocation.setDeviceId(logLocationDto.getDeviceId());
        logLocation.setLatitude(logLocationDto.getLatitude());
        logLocation.setLongitude(logLocationDto.getLongitude());
        logLocation.setCreatedAt(logLocationDto.getCreatedAt());

        return logLocation;
    }

    static logLocationToDto(logLocation) {
        let logLocationDto = new LogLocationDto();

        logLocationDto.setId(logLocation.id);
        logLocationDto.setVehicleId(logLocation.vehicleId);
        logLocationDto.setDeviceId(logLocation.deviceId);
        logLocationDto.setLatitude(logLocation.latitude);
        logLocationDto.setLongitude(logLocation.longitude);
        logLocationDto.setCreatedAt(logLocation.createdAt);

        return logLocationDto;
    }

    static dtoToLogTemperature(logTemperatureDto) {
        let logTemperature = new LogTemperature();

        logTemperature.setId(logTemperatureDto.getId());
        logTemperature.setDeviceId(logTemperatureDto.getDeviceId());
        logTemperature.setVehicleId(logTemperatureDto.getVehicleId());
        logTemperature.setReadData(logTemperatureDto.getReadData());
        logTemperature.setCreatedAt(logTemperatureDto.getCreatedAt());

        return logTemperature;
    }

    static logTemperatureToDto(logTemperature) {
        let logTemperatureDto = new LogTemperatureDto();

        logTemperatureDto.setId(logTemperature.id);
        logTemperatureDto.setDeviceId(logTemperature.deviceId());
        logTemperatureDto.setVehicleId(logTemperature.vehicleId);
        logTemperatureDto.setReadData(logTemperature.readData);
        logTemperatureDto.setCreatedAt(logTemperature.createdAt);

        return logTemperatureDto;
    }

    static dtoToVehicle(vehicleDto) {
        let vehicle = new Vehicle();

        vehicle.setId(vehicleDto.getId());
        vehicle.setVehiclePlate(vehicleDto.getVehiclePlate());
        vehicle.setCurrentStatus(vehicleDto.getCurrentStatus());
        vehicle.setIsActive(vehicleDto.getIsActive());

        return vehicle;
    }

    static vehicleToDto(vehicle) {
        let vehicleDto = new VehicleDto();

        vehicleDto.setId(vehicle.id);
        vehicleDto.setVehiclePlate(vehicle.vehiclePlate());
        vehicleDto.setCurrentStatus(vehicle.currentStatus);
        vehicleDto.setIsActive(vehicle.isActive);

        return vehicleDto;
    }
}

module.exports = ModelMapper;