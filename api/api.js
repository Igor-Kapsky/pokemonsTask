import axios from 'axios';

class Api {
    async getRequest(path) {
        try {
            return await axios.get(path);
        } catch (e) {
            return e.response;
        }
    }
}

export default new Api();
