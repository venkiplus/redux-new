import { createAction } from 'redux-actions'
import axios from 'axios'
export const GET_DATA = 'GET_DATA'
export const getDataSuccess = createAction(GET_DATA)
export const SEND_DATA = 'SEND_DATA'
export const sendDataSuccess = createAction(SEND_DATA)

export function getData() {
  return (dispatch, getState) => {
    axios.get('http://omdbapi.com/?t=game+of+thrones&apikey=plzBanMe')
    .then(res=>{
      dispatch(getDataSuccess(res))
    })
  }
}

export function sendData(event) {
  alert(event.target.value+' selected');
  return (dispatch, getState) => {
    axios.post('http://omdbapi.com/',
        {
            selectedValue: event.target.value,
        })
    .then(res=>{
      dispatch(sendDataSuccess(res))
    })
  }
}
