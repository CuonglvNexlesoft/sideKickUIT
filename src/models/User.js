export default class User {

  constructor(data = {}, initModel = true) {
      if(initModel){
          this.init(data);
      }
  }

  init(data){
      this.userId = data.ID || 14521123;
      this.displayName = data.Ten || 'Default';
      this.avatarUrl = data.avatarUrl || null;
      this.address = data.DiaChi || null;
      this.phoneNumber = data.SDT || 0;
      this.email = data.email || '';
      this.age = data.age || '';
      this.gender = data.gender || 1;
      this.userType =  data.gender || 0
  }
}