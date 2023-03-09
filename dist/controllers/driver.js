"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putDriver = exports.postDriver = exports.deleteDriver = exports.getDriver = exports.getDrivers = void 0;
const driver_1 = __importDefault(require("../models/driver"));
const getDrivers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listDriver = yield driver_1.default.findAll();
    res.json(listDriver);
});
exports.getDrivers = getDrivers;
const getDriver = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const driver = yield driver_1.default.findByPk(id);
    if (driver) {
        res.json(driver);
    }
    else {
        res.status(404).json({
            msg: `No Existe un drive con el id ${id}`
        });
    }
});
exports.getDriver = getDriver;
const deleteDriver = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const driver = yield driver_1.default.findByPk(id);
    if (!driver) {
        res.status(404).json({
            msg: `No Existe un drive con el id ${id}`
        });
    }
    else {
        yield driver.destroy();
        res.json({
            msg: 'El producto fue eliminado exitosamente'
        });
    }
});
exports.deleteDriver = deleteDriver;
const postDriver = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield driver_1.default.create(body);
        res.json({
            msg: 'Drive Agregado con exito'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Upps Ocurrio un error, Comuniquese con soporte"
        });
    }
});
exports.postDriver = postDriver;
const putDriver = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const driver = yield driver_1.default.findByPk(id);
    try {
        if (driver) {
            yield driver.update(body);
            res.json({
                msg: "El producto fue actualizado con exito!"
            });
        }
        else {
            res.status(404).json({
                msg: `No Existe un drive con el id ${id}`
            });
        }
    }
    catch (error) {
        res.json({
            msg: "Upps Ocurrio un error, Comuniquese con soporte"
        });
    }
});
exports.putDriver = putDriver;
