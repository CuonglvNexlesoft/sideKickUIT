import { Metrics, Colors, Images } from '../themes';
export default class Class {

  constructor(data = {}, initModel = true) {
      if(initModel){
          this.init(data);
      }
  }

  init(data){
      this.name = data.Ten || "Undefine";
      this.coverUrl = data.coverUrl || null;
      this.id = data.ID || null;
      this.idClass = data.Ma || null;
      this.total = data.SiSo || 0;
      this.startDate = data.NgayBatDau || null;
      this.endDate = data.NgayKetThuc || null;
  }

  static mappingObjects(_classArr) {
    let classes = [];
    for (let _class of _classArr) {
      // let user = User.mappingObject(_user);
      let mappingClass= new Class(_class);
      classes.push(mappingClass);
    }
    return classes;
  }

  
}