
export default class BaseService {
    constructor() {

    }

    handleError(error){
        console.log('SERVICE ERROR', error);
        throw (error)
    }

}