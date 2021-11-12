import {Persona} from './Persona'

export interface Vacuna{
    _id?: String;
    name: String;
    descripcion: String;
    tecnologia: String;
    fecha: String;
    fiable: String;
    personas: Persona['_id']
}