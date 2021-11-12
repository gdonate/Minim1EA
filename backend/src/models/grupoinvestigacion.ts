import mongoose, { Schema, Document} from 'mongoose';
import Persona, {IPersona} from './Persona';

//model grupoinvestigación
const grupoinvestigacionSchema = new Schema({
    nombre: {
        type: String
    },
    id: {
        type: String
    },
    descripcion: {
        type: String
    },
    tecnologia: {
        type: String
    },
    fecha: {
        type: String
    },
    fiable: {
        type: String
    },
    personas:[{
        type: Schema.Types.ObjectId,
        ref: Persona
    }]
    });

export interface IGrupoInvestigacion extends Document {
    nombre: String;
    id: String;
    descripcion: String;
    tecnologia: String;
    fecha: String;
    fiable: String;
    personas: String;
}

export default mongoose.model<IGrupoInvestigacion>('GrupoInvestigacion', grupoinvestigacionSchema);