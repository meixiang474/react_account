import React, {memo, useState, useCallback, useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {padLeft, range} from '../util';

const MonthPicker = memo(props => {
  const {
    year,
    month,
    onChange
  } = props

  const [isOpen, setIsOpen] = useState(false)
  const [selectedYear, setSelectedYear] = useState(year)
  const [selectedMonth, setSelectedMonth] = useState(month)

  const monthRange = useMemo(() => {
    return range(12, 1)
  }, [])
  
  const yearRange = useMemo(() => {
    return range(9, -4).map(number => number + year)
  }, [year])

  const selectYear = useCallback((e, yearNumber) => {
    e.preventDefault();
    setSelectedYear(yearNumber);
  }, [])

  const selectMonth = useCallback((e, monthNumber) => {
    e.preventDefault();
    setIsOpen(false)
    onChange(selectedYear, monthNumber)
  }, [onChange, selectedYear])

  const toggleDropDown = useCallback(() => {
    setIsOpen(isOpen => !isOpen);
  }, [])

  useEffect(() => {
    if(!isOpen){
      setSelectedYear(year)
      setSelectedMonth(month)
    }
  }, [isOpen])

  useEffect(() => {
    const onClick = (e) => {
      if(typeof e.target.className === 'string' && e.target.className.includes('dropdown')) return;
      setIsOpen(false)
    }
    document.documentElement.addEventListener('click', onClick)
    return () => {
      document.documentElement.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div className="dropdown month-picker-component" style={{width: '100%'}}>
      <h5>选择月份</h5>
      <button 
        className="btn btn-lg btn-secondary dropdown-toggle"
        onClick={toggleDropDown}
      >
        {`${year}年 ${padLeft(month)}月`}
      </button>
      {
        isOpen && 
        <div className="dropdown-menu" style={{display: 'block'}}>
          <div className="row">
            <div className="col border-right">
              {
                yearRange.map((yearNumber, index) => (
                  <a 
                    key={index} 
                    className={classnames('dropdown-item', {active: yearNumber === selectedYear})}
                    href="#"
                    onClick={(e) => selectYear(e, yearNumber)} 
                  >
                    {yearNumber}年
                  </a>
                ))
              }
            </div>
            <div className="col">
              {
                monthRange.map((monthNumber, index) => (
                  <a 
                    key={index} 
                    className={classnames('dropdown-item', {active: monthNumber === selectedMonth})}
                    href="#"
                    onClick={(e) => selectMonth(e, monthNumber)}

                  >
                    {padLeft(monthNumber)}月
                  </a>
                ))
              }
            </div>
          </div>
        </div>
      }
    </div>
  )
});

MonthPicker.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired

}
MonthPicker.defaultProps = {
  year: 2018,
  month: 9,
  onChange: () => {}
}


export default MonthPicker;
