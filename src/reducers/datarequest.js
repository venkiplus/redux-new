import { GET_DATA, SEND_DATA } from '../actions/datarequest'

export default function datarequest(state = [], action) {
  switch (action.type) {
    case GET_DATA:
      return {...state,
        params: action.payload.data
      }
    case SEND_DATA:
      return {...state,
        status: action.payload.data
      }
    default:
      return state
  }
}
