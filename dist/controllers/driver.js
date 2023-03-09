"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putDriver = exports.postDriver = exports.deleteDriver = exports.getDriver = exports.getDrivers = void 0;
const getDrivers = (req, res) => {
    res.json({
        msg: 'Get Drivers'
    });
};
exports.getDrivers = getDrivers;
const getDriver = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'Get Driver',
        id
    });
};
exports.getDriver = getDriver;
const deleteDriver = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'Delete Driver',
        id
    });
};
exports.deleteDriver = deleteDriver;
const postDriver = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'Post Driver',
        body
    });
};
exports.postDriver = postDriver;
const putDriver = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'Update Driver',
        id,
        body
    });
};
exports.putDriver = putDriver;
