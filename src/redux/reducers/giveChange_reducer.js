import { GIVE_CHANGE } from '../actions/type';

export default (state = [], action)=>{
    switch(action.type){
        case GIVE_CHANGE :
            return [action.payload.change];
        default :
            return state;
    }
}