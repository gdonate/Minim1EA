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
exports.updateVacuna = exports.deleteVacuna = exports.createVacuna = exports.getVacuna = exports.getVacunas = void 0;
const vacuna_1 = __importDefault(require("../models/vacuna"));
function getVacunas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const vacunas = yield vacuna_1.default.find(); //find me retorna todas las fotos que tengo almaacenadas (las he guaardado con el save abajo)
        return res.json(vacunas);
    });
}
exports.getVacunas = getVacunas;
function getVacuna(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const vacuna = yield vacuna_1.default.findById(req.params.id);
        return res.json(vacuna);
    });
}
exports.getVacuna = getVacuna;
function createVacuna(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, descripcion, tecnologia, fecha, fiable, personas } = req.body;
        const newVacuna = {
            name: name,
            descripcion: descripcion,
            tecnologia: tecnologia,
            fecha: fecha,
            fiable: fiable,
            personas: personas
        };
        const vacuna = new vacuna_1.default(newVacuna);
        yield vacuna.save();
        return res.json({
            message: 'Vacuna successfully saved',
            vacuna
        });
    });
}
exports.createVacuna = createVacuna;
function deleteVacuna(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const vacuna = yield vacuna_1.default.findByIdAndRemove(id);
        return res.json({
            message: 'Vacuna Deleted',
            vacuna
        });
    });
}
exports.deleteVacuna = deleteVacuna;
function updateVacuna(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { name, descripcion, tecnologia, fecha, fiable, personas } = req.body;
        console.log(req.body);
        const updatedVacuna = yield vacuna_1.default.findByIdAndUpdate(id, {
            name,
            descripcion,
            tecnologia,
            fecha,
            fiable,
            personas
        }, { new: true }); //para que retorne el objeto modificado sino retorna el de antes de modificarlo
        return res.json({
            message: 'Succesfully Updated',
            updatedVacuna
        });
    });
}
exports.updateVacuna = updateVacuna;
//respuesta basada en una promesa cuando primero debe hacer halgo y despues yaa devolverlo (async, tb necesita el await)
