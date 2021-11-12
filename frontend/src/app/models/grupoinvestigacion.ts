import {Persona} from './Persona'


export interface GrupoInvestigacion {
    
    nombre: string,
    id: string,
    descripcion: string,
    tecnologia: string,
    fecha: Date,
    fiable: boolean,
    personas: Persona['_id']
}
