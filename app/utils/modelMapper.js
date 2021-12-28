import Device from "../models/device";
import DevicesType from "../models/devicesType";
import LogLocation from "../models/logLocation";
import LogTemperature from "../models/logTemperature";
import Vehicle from "../models/vehicle";
import DeviceDto from "../dtos/deviceDto";
import DevicesTypeDto from "../dtos/devicesTypeDto";
import LogLocationDto from "../dtos/logLocationDto";
import LogTemperatureDto from "../dtos/logTemperatureDto";
import VehicleDto from "../dtos/vehicleDto";

class ModelMapper {
    constructor() {
    }

    static dtoToDevice(deviceDto) {
        let device = new Device();

        device.setId(deviceDto.getId());
        device.setDeviceTypeId(deviceDto.getDeviceTypeId());
        device.setDeviceName(deviceDto.getDeviceName());
        device.setIsOnline(deviceDto.getIsOnline());
        device.setIsActive(deviceDto.getIsActive());

        return device;
    }

    static deviceToDto(device) {
        let deviceDto = new DeviceDto();

        deviceDto.setId(device.getId());
        deviceDto.setDeviceTypeId(device.getDeviceTypeId());
        deviceDto.setDeviceName(device.getDeviceName());
        deviceDto.setIsOnline(device.getIsOnline());
        deviceDto.setIsActive(device.getIsActive());

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

        devicesTypeDto.setId(devicesType.getId());
        devicesTypeDto.setDeviceName(devicesType.getDeviceName());
        devicesTypeDto.setDeviceDescription(devicesType.getDeviceDescription());
        devicesTypeDto.setIsActive(devicesType.getIsActive());

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

        logLocationDto.setId(logLocation.getId());
        logLocationDto.setVehicleId(logLocation.getVehicleId());
        logLocationDto.setDeviceId(logLocation.getDeviceId());
        logLocationDto.setLatitude(logLocation.getLatitude());
        logLocationDto.setLongitude(logLocation.getLongitude());
        logLocationDto.setCreatedAt(logLocation.getCreatedAt());

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

        logTemperatureDto.setId(logTemperature.getId());
        logTemperatureDto.setDeviceId(logTemperature.getDeviceId());
        logTemperatureDto.setVehicleId(logTemperature.getVehicleId());
        logTemperatureDto.setReadData(logTemperature.getReadData());
        logTemperatureDto.setCreatedAt(logTemperature.getCreatedAt());

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

        vehicleDto.setId(vehicle.getId());
        vehicleDto.setVehiclePlate(vehicle.getVehiclePlate());
        vehicleDto.setCurrentStatus(vehicle.getCurrentStatus());
        vehicleDto.setIsActive(vehicle.getIsActive());

        return vehicleDto;
    }
}

module.exports = ModelMapper;