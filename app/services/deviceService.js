const deviceDal = require("../dataAccessLayers/deviceDal");
const ModelMapper = require("../utils/ModelMapper");

const deviceService = {
    async getAll() {
        const deviceEntityList = await deviceDal.getAll();
        let deviceDtoList = [];
        deviceEntityList.forEach(function(device) {
            console.log(device)
            const deviceDto = ModelMapper.deviceToDto(device);
            console.log(deviceDto)
            deviceDtoList.push(deviceDto);
        });
        return deviceDtoList;
    },

    async insert(deviceDto) {
        const device = ModelMapper.dtoToDevice(deviceDto)
        return await deviceDal.insert(device);
    },

    async update(deviceDto) {
        const device = ModelMapper.dtoToDevice(deviceDto)
        return await deviceDal.update(device);
    },

    async delete(id) {
        return await deviceDal.delete(id);
    },
}

module.exports = deviceService;