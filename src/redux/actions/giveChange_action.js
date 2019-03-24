import axios from 'axios';
import { GIVE_CHANGE } from './type';



export function giveChange_ (amount){
  return function (dispatch){       
          axios.get('http://163.172.141.214:8587/change/'+amount)
      //  axios.get('http://localhost:8587/change/'+amount)
      .then(function(res){
        dispatch({type: GIVE_CHANGE, payload : {
          change : res.data
        }});
      })
      .catch(function(error){
       console.log(error)
      })
     }
}