import Persona from '../models/Persona';
import {Request, Response} from 'express';

export async function createPersona(req: Request,res: Response): Promise<Response>{

    const{name, edad} = req.body;
    const newPerson = {
        name: name,
        edad: edad
    };
    const persona = new Persona(newPerson);
    await persona.save();
    return res.json(persona)
}

export async function getPersonas(req: Request,res: Response): Promise<Response>{
    const personas = await Persona.find(); //find me retorna todas las subjects que tengo almaacenadas (las he guaardado con el save abajo)
    return res.json(personas);
}
