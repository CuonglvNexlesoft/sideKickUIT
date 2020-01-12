import { Metrics, Colors, Images } from '../themes';
export default class Doc {

  constructor(data = {}, initModel = true) {
      if(initModel){
          this.init(data);
      }
  }

  init(data){
      this.title = data.Ten || "Undefine";
      this.link = data.URL || "";
  }

  static mappingObjects(_classArr) {
    let classes = [];
    for (let _class of _classArr) {
      // let user = User.mappingObject(_user);
      let mappingClass= new Doc(_class);
      classes.push(mappingClass);
    }
    return classes;
  }

  
}