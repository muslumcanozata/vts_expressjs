CREATE TABLE IF NOT EXISTS vst.public.devices
(
    id int8 PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 0 MINVALUE 0 MAXVALUE 9223372036854775807 CACHE 1 ),
    device_type_id int8 NOT NULL,
    device_name varchar(75) NOT NULL,
    is_online boolean NOT NULL,
    is_active boolean NOT NULL
);

CREATE TABLE IF NOT EXISTS vst.public.devices_type
(
    id int8 PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 0 MINVALUE 0 MAXVALUE 9223372036854775807 CACHE 1 ),
    device_name varchar(75) COLLATE NOT NULL,
    device_description varchar(255) NOT NULL,
    is_active boolean NOT NULL
);

CREATE TABLE IF NOT EXISTS vst.public.log_location
(
    id int8 PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 0 MINVALUE 0 MAXVALUE 9223372036854775807 CACHE 1 ),
    vehicle_id int8 NOT NULL,
    device_id int8 NOT NULL,
    latitude varchar(50) NOT NULL,
    longitude varchar(50) NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS vst.public.log_temperature
(
    id int8 PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 0 MINVALUE 0 MAXVALUE 9223372036854775807 CACHE 1 ),
    vehicle_id int8 NOT NULL,
    device_id int8 NOT NULL,
    read_data varchar(50),
    created_at timestamp without time zone NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS vst.public.vehicles
(
    id int8 PRIMARY KEY NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 0 MINVALUE 0 MAXVALUE 9223372036854775807 CACHE 1 ),
    vehicle_plate varchar(20) NOT NULL,
    current_status int2 NOT NULL,
    is_active boolean NOT NULL
);

INSERT INTO vst.public.vehicles(vehicle_plate, current_status, is_active) VALUES("GPS", 1, true);
INSERT INTO vst.public.vehicles(vehicle_plate, current_status, is_active) VALUES("GPS", 1, true);