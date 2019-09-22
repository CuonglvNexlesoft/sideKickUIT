export default class Product {

    constructor(data = {}, initModel = true) {
        if(initModel){
            this.init(data);
        }
    }
  
    init(data){
        this.id = data.id || null;
        this.name = data.name || '';
        this.type = data.type || null;
        this.image = data.image || null;
        this.price = data.price || 0;
        this.brand = data.brand || '';
        this.uri = data.uri || '';
        if(data.customName){
            this.customName = data.customName;
        }
        this.customID = data.customID || data.id;
    }
  
  }