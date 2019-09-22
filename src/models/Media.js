export default class Media {

    constructor(data = {}, initModel = true) {
        if(initModel){
            this.init(data);
        }
    }
  
    init(data){
        this.id = data.id || null;
        this.name = data.name || '';
        this.size = data.size || 0;
        this.path = data.path || '';
        this.localPath = data.localPath || '';
        this.mime = data.mime || '';
        this.data = data.data || null;
    }
  
  }