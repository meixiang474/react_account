import {parseToYearAndMonth, LIST_VIEW} from '../../util';
import {
  CHANGE_DATE,
  CHANGE_TAB_VIEW,
  DELETE_ITEM
} from './const';
const state = {
  items: [
    {
      "id": 1,
      'title': '去云南旅游',
      "price": 200,
      'date': '2018-09-10',
      "cid": 1
    },
    {
      "id": 2,
      'title': '工资',
      "price": 2000,
      'date': '2018-09-10',
      "cid": 2
    }
  ],
  currentDate: parseToYearAndMonth(),
  tabView: LIST_VIEW
}

const reducer = (state, action) => {
  const {type, payload} = action
  switch(type){
    case CHANGE_DATE:
      return {
        ...state,
        currentDate: payload
      }
    case CHANGE_TAB_VIEW:
      return {
        ...state,
        tabView: payload
      }
    case DELETE_ITEM:
      return {
        ...state,
        items: payload
      }
    default:
      return state
  }
}

export default {
  state,
  reducer
}