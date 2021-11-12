//operaciones tipicas de las fotos, fichero con la parte logica del fichero index de routes
import {Request, Response} from 'express';
import Vacuna from '../models/vacuna';

export async function getVacunas(req: Request,res: Response): Promise<Response>{
    const vacunas= await Vacuna.find(); //find me retorna todas las fotos que tengo almaacenadas (las he guaardado con el save abajo)
    return res.json(vacunas);
}

export async function getVacuna(req: Request,res: Response): Promise<Response>{
    const vacuna = await Vacuna.findById(req.params.id);
    return res.json(vacuna);
}

export async function createVacuna(req: Request,res: Response): Promise<Response>{

    const{name, descripcion, tecnologia,fecha,fiable, personas} = req.body;
    const newVacuna = {
        name: name,
        descripcion: descripcion,
        tecnologia: tecnologia,
        fecha: fecha,
        fiable:fiable,
        personas:personas
    };
    const vacuna = new Vacuna(newVacuna);
    await vacuna.save();
    return res.json({
        message: 'Vacuna successfully saved',
        vacuna 
    })
}

export async function deleteVacuna(req: Request,res: Response): Promise<Response>{
    const {id} = req.params;
    const vacuna = await Vacuna.findByIdAndRemove(id);
    return res.json({
        message: 'Vacuna Deleted',
        vacuna
    });

}

export async function updateVacuna(req: Request,res: Response): Promise<Response>{
    const{id} = req.params;
    const{name, descripcion, tecnologia,fecha,fiable, personas} = req.body;
    console.log(req.body)
    const updatedVacuna = await Vacuna.findByIdAndUpdate(id,{
        name,
        descripcion,
        tecnologia,
        fecha,
        fiable,
        personas
    }, {new: true}); //para que retorne el objeto modificado sino retorna el de antes de modificarlo
    return res.json({
        message: 'Succesfully Updated',
        updatedVacuna
    });
}

//respuesta basada en una promesa cuando primero debe hacer halgo y despues yaa devolverlo (async, tb necesita el await)