import uuid from 'uuid/v4';
export default class Transaction {

    constructor(data = {}, initModel = true) {
        if(initModel){
            this.init(data);
        }
    }
  
    init(data){
        this.id = data.id || uuid();
        this.product = data.product || null;
        this.date = data.date || new Date().toISOString();
        this.note = data.note || undefined;
    }
}