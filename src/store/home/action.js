import {
  CHANGE_DATE, 
  CHANGE_TAB_VIEW,
  DELETE_ITEM
} from './const';

export const changeDateAction = payload => ({
  type: CHANGE_DATE,
  payload
})

export const changeTabViewAction = payload => ({
  type: CHANGE_TAB_VIEW,
  payload
})

export const deleteItemAction = payload => ({
  type: DELETE_ITEM,
  payload
})