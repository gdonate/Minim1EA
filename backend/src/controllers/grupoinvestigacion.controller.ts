import { Request, Response} from "express";
import { getAllJSDocTags } from "typescript";
//import grupoinvestigacion from "../models/grupoinvestigacion";
import GrupoInvestigacion from "../models/grupoinvestigacion"


//obtenir tots els equips d'investigació
function getAll (req:Request, res:Response): void {
    GrupoInvestigacion.find({}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
}

//obtenir grup d'investigació
function getGrupoInvestigacion (req:Request, res:Response): void {
    GrupoInvestigacion.findOne({"id":req.params.id}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

//afegir grup d'investigació
function newGrupoInvestigacion (req:Request, res:Response): void {
    const grupo = new GrupoInvestigacion({
        "nombre": req.body.nombre,
        "id": req.body.id,
        "descripcion": req.body.descripcion,
        "tecnologia": req.body.tecnologia,
        "fecha": req.body.fecha,
        "fiable": req.body.fiable,
        "persona": req.body.persona
    });
    
    console.log(req.body);
    grupo.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

//modificar grup d'investigació
function updateGrupoInvestigacion (req:Request, res:Response): void {
    const nombre: String = req.body.nombre;
    const id = req.params.id;
    const nuevaid = req.body.id;
    const descripcion: String = req.body.descripcion;
    const tecnologia: String = req.body.tecnologia;
    const fecha: String = req.body.fecha;
    const fiable: String = req.body.fiable;
    const persona: String = req.body.persona;


    GrupoInvestigacion.update({"id": id}, {$set: {'nombre': nombre, 'id': id, 'descripcion': descripcion, 'tecnologia': tecnologia, 'fecha': fecha, 'fiable': fiable, 'personas': persona}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}

//Delete grup investigacion

//function deleteGrupoinvestigacion (req:Request, res:Response): void {\
/*
async function deleteGrupoinvestigacion(req:Request, res:Response): Promise<Response> {
    const {id} = req.params;
    console.log("Heelo chicos estamos aquiiiiiii   " + id);
    await GrupoInvestigacion.findByIdAndDelete(id);
    console.log("Heelo chicos estamos aquiiiiiii   " + id);
    return res.json({status:'Eliminado'})
};
*/
function deleteGrupoinvestigacion(req:Request, res:Response): void {
    const { id } = req.params;
    GrupoInvestigacion.findOne({"id":req.params.id}).remove().exec();

    /*
    console.log("ELIMINAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA             " + req.params.id)
    GrupoInvestigacion.findByIdAndDelete(GrupoInvestigacion.findOne({"id":req.params.id})).then((data) => {
        console.log("ESTO ES DATA " + data);
        let status = 200;
        if (data == null)
            status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log("esto es el error " + err);

        return res.status(500).json(err);
    });
    */
}
export default { getAll, getGrupoInvestigacion, newGrupoInvestigacion, updateGrupoInvestigacion , deleteGrupoinvestigacion };