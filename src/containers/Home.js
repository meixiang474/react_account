import React, { memo, useMemo, useReducer, useContext, useCallback } from 'react';
import logo from '~/logo.svg';
import { Context } from '~/store';
import PriceList from '~/components/PriceList';
import ViewTab from '~/components/ViewTab';
import TotalPrice from '~/components/TotalPrice';
import MonthPicker from '~/components/MonthPicker';
import CreateBtn from '~/components/CreateBtn';
import { 
  changeDateAction, 
  changeTabViewAction,
  deleteItemAction 
} from '~/store/home/action';
import {
  categories,
  TYPE_INCOME,
  TYPE_OUTCOME,
  parseToYearAndMonth,
  LIST_VIEW,
  padLeft
} from '~/util';

const Home = memo(props => {

  const { home } = useContext(Context)

  const [homeState, homeDispatch] = useReducer(home.reducer, home.state);

  const {
    items,
    currentDate,
    tabView
  } = homeState

  const changeDate = useCallback(async (year, month) => {
    const str = year + '-' + month
    homeDispatch(changeDateAction(parseToYearAndMonth(str)))
  }, [])

  const changeTabView = useCallback((current) => {
    homeDispatch(changeTabViewAction(current))
  }, [])

  const deleteItem = useCallback((deleteItem) => {
    const newItem = items.filter(item => item.id !== deleteItem.id)
    homeDispatch(deleteItemAction(newItem))
  }, [items])

  const itemsWithCategory = useMemo(() => {
    return items.map(item => {
      item.category = categories[item.cid]
      return item
    }).filter(item => item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`))
  }, [items, currentDate])

  const totalIncome = useMemo(() => {
    return items.reduce((memo, current) => {
      if (current.category.type === TYPE_INCOME) {
        return memo + current.price
      }
      return memo
    }, 0)
  }, [items])

  const totalOutcome = useMemo(() => {
    return items.reduce((memo, current) => {
      if (current.category.type === TYPE_OUTCOME) {
        return memo + current.price
      }
      return memo
    }, 0)
  }, [items])

  return (
    <div className="home-wrapper">
      <header className="App-header">
        <div className="row mb-2 logo-wrapper">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="row">
          <div className="col-7 mr-5">
            <MonthPicker
              year={currentDate.year}
              month={currentDate.month}
              onChange={changeDate}
            />
          </div>
          <div className="col-3 ml-5 d-flex align-items-center">
            <TotalPrice
              income={totalIncome}
              outcome={totalOutcome}
            />
          </div>
        </div>
      </header>
      <div className="content-area py-3 px-3">
        <ViewTab
          activeTab={tabView}
          onTabChange={changeTabView}
        />
        <CreateBtn
          onClick={() => { }}
        />
        {
          tabView === LIST_VIEW
            ? <PriceList
                items={itemsWithCategory}
                onDeleteItem={deleteItem}
              />
            : <h1>这是图标界面</h1>
        }
      </div>
    </div>
  )
})

export default Home