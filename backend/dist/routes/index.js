"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router(); //crea con express un enrutador --> es un objeto para poner dentro tus rutas o las url del servidor
const vacuna_controller_1 = require("../controllers/vacuna.controller");
const persona_controller_1 = require("../controllers/persona.controller");
// router.route('/students')
//     .get(getStudents)
//     .post(createStudent)
// router.route('/students/:id')
//     .get(getStudent)
//     .delete(deleteStudent)
//     .put(updateStudent)
// router.route('/subjects')
//     .get(getSubjects)
//     .post(createSubject)
// router.route('/subjects/:id')
//     .get(getSubject)
//     .delete(deleteSubject)
//     .put(updateSubject)
router.route('/vacunas')
    .get(vacuna_controller_1.getVacunas)
    .post(vacuna_controller_1.createVacuna);
router.route('/vacunas/:id')
    .get(vacuna_controller_1.getVacuna)
    .delete(vacuna_controller_1.deleteVacuna)
    .put(vacuna_controller_1.updateVacuna);
router.route('/personas')
    .post(persona_controller_1.createPersona)
    .get(persona_controller_1.getPersonas);
exports.default = router;
