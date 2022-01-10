const { postgresConnection } = require("../db/db");
const { getDeviceListQuery } = require("./dalConstants")
const Device = require("../models/device");

const deviceDal = {
    async getAll() {
        return await postgresConnection.db.query(getDeviceListQuery);;
    },

    async insert(device) {
        let query = `INSERT INTO public.devices("device_type_id", "device_name", "is_online", "is_active") VALUES(${device.deviceTypeId}, '${device.deviceName}', ${device.isOnline}, ${device.isActive});`
        await postgresConnection.db.query(query);
        return 1;
    },

    async update(device) {
        let query = 'UPDATE public.devices SET';

        if(device.deviceTypeId !== null) {
            query = query.concat(" ", `device_type_id = ${device.deviceTypeId}`)
        } else if(device.deviceName !== null) {
            query = query.concat(" ", `device_name = '${device.deviceName}'`)
        } else if(device.isOnline !== null) {
            query = query.concat(" ", `is_online = ${device.isOnline}`)
        } else if(device.isActive !== null) {
            query = query.concat(" ", `is_active = ${device.isActive}`)
        }

        query = query.concat(" ", `WHERE id = ${device.id}`)

        await postgresConnection.db.query(query) ;

        return 1;
    },

    async delete(id) {
        let query = `DELETE FROM public.devices WHERE id = ${id}`;
        await postgresConnection.db.query(query);
        return 1;
    }
};

module.exports = deviceDal;