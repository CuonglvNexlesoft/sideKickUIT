export default class Response {

    constructor({ status = 200, data = null, error = null, message = null }) {
        this.status = status;
        if (data){
            this.data = data;
        }
        if (error){
            this.error = error;
        }
        if (message){
            this.message = message;
        }
    }

}