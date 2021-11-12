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
exports.getPersonas = exports.createPersona = void 0;
const Persona_1 = __importDefault(require("../models/Persona"));
function createPersona(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, edad } = req.body;
        const newPerson = {
            name: name,
            edad: edad
        };
        const persona = new Persona_1.default(newPerson);
        yield persona.save();
        return res.json(persona);
    });
}
exports.createPersona = createPersona;
function getPersonas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const personas = yield Persona_1.default.find(); //find me retorna todas las subjects que tengo almaacenadas (las he guaardado con el save abajo)
        return res.json(personas);
    });
}
exports.getPersonas = getPersonas;
