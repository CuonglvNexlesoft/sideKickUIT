import * as Types from '../constants/ActionTypes';
import {USER} from '../constants/InitialState';

export function userState ( state = USER , action) {
    switch (action.type){
        case 'persist/REHYDRATE':
        //Restore login info from redux-persist
        return {
            ...state,
            rehydrate: true
        };
        case Types.USER.USER_DATA:
            // console.log(action.user)
            // let _user = {
            //     userId: 14521123,
            //     displayName: 'Le ThanhTrong',
            //     userName: 'a',
            //     passWord: '1',
            //     avatarUrl: '',
            //     address: 'Q.9, HCM',
            //     phoneNumber: '123456789',
            //     email: '14521116@gm.uit.edu.vn',
            //     age: 24,
            //     gender: 1,// male 1 vs female 0,
            //     userType: 0 // 0 admin, 1 student
            // }
            // if(action.user.username == 1){
            //     return {...state, user: _user};
            // }else
            return {...state, user: action.user};

        case Types.USER.DISTRIBUTOR_DATA:
            return {...state, distributor: action.distributor};
        default:
            return state;
    }
}