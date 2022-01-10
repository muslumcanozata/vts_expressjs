const getDeviceListQuery = 'SELECT id as id, device_type_id as "deviceTypeId", device_name as "deviceName", is_online as "isOnline", is_active as "isActive" FROM public.devices;'

module.exports = {
    getDeviceListQuery
}