import api from "../../index"
import {ISerie} from "../../../interfaces/Serie.interface"

class SerieData {
    show(generoID : string) {
        return api.get<ISerie[]>(`series/${generoID}/genero`);
    }
}

export default new SerieData();