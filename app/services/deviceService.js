const { deviceDal } = require("../dataAccessLayers/deviceDal");
const { ModelMapper } = require("../utils/ModelMapper");

class DeviceService {
    constructor() {}
    static getAll() {
        const deviceEntityList = deviceDal.getAll();
        let deviceDtoList = [];
        for (let i = 0; i < deviceEntityList.length; i++) {
            const deviceDto = ModelMapper.deviceToDto(deviceEntityList[i]);
            deviceDtoList.push(deviceDto);
        }
        return deviceDtoList;

    }
    static insert(devices) {
        const bool = deviceDal.insert(devices);

        return bool;
    }
    static update(deviceDto) {
        const device = ModelMapper.dtoToDevice(deviceDto)

        const bool = deviceDal.update(device);

        return bool;
    }
    static delete(id) {
        const bool = deviceDal.update(id);

        return bool;
    }
}

module.exports = DeviceService;