import axios from 'axios';

const ZHESIE_API_BASE_URL = "http://localhost:8080/api/v1/heis";

class ZhesieService {

    getHeis(){
        return axios.get(ZHESIE_API_BASE_URL);
    }

    createHeis(zhesie){
        return axios.post(ZHESIE_API_BASE_URL, zhesie);
    }

    getHeisById(zhesieId){
        return axios.get(ZHESIE_API_BASE_URL + '/' + zhesieId);
    }

    updateHeis(zhesie, zhesieId){
        return axios.put(ZHESIE_API_BASE_URL + '/' + zhesieId, zhesie);
    }

    deleteHeis(zhesieId){
        return axios.delete(ZHESIE_API_BASE_URL + '/' + zhesieId);
    }
}

export default new ZhesieService()