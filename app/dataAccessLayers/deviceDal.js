const {postgresConnection} = require("../db/db");
const {Device} = require("../models/device");


const deviceDal = {
    getAll: async function () {
        const db = await postgresConnection.db;
        let devices = [];
        const rows = await db.any(
            'SELECT id, device_type_id, device_name, is_online, is_active FROM public.devices;'
        );
        for(let i=0;i<rows.length;i++) {
            devices.push(new Device(
                rows[i].id,
                rows[i].device_type_id,
                rows[i].device_name,
                rows[i].is_online,
                rows[i].is_active
            ));
        }
        return devices;
    },

    insert: async function (devices) {
        const db = await postgresConnection.db;
        try {
            await db.query(
                'INSERT INTO public.devices (device_type_id, device_name, is_online, is_active) ' +
                `VALUES(${devices.deviceTypeId, devices.deviceName, devices.isOnline, devices.isActive});`
            );
            return 1;
        } catch (e) {
            throw new Error(e);
        }
    },

    update: async function (devices) {
        const db = await postgresConnection.db;

        let query = 'UPDATE public.devices SET';

        if(devices.getDeviceTypeId()!== null) {
            query = query + `device_type_id = ${devices.getDeviceTypeId()}`
        } else if(devices.getDeviceName()!== null) {
            query = query + `device_name = ${devices.getDeviceName()}`
        } else if(devices.getIsOnline()!== null) {
            query = query + `is_online = ${devices.getDeviceName()}`
        } else if(devices.getIsActive()!== null) {
            query = query + `is_active = ${devices.getIsActive()}`
        }

        query = query + `WHERE device_id = ${devices.getDeviceId()}`

        try {
            await db.query(query);
            return 1;
        } catch (e) {
            throw new Error(e);
        }
    },

    delete: async function(id) {
        const db = await postgresConnection.db;

        let query = `DELETE FROM public.devices WHERE device_type_id = ${id}`;

        try {
            await db.query(query);
            return 1;
        } catch (e) {
            throw new Error(e);
        }
    }
};

module.exports = deviceDal;