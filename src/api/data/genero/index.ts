import api from "../../index"
import {IGenero} from "../../../interfaces/Genero.interface"

class CursoData {
    index() {
        return api.get<IGenero[]>('generos')
    }

}

export default new CursoData();