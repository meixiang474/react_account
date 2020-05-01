import React, {memo, useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Ionicon from 'react-ionicons';
import {LIST_VIEW, CHART_VIEW} from '../util';

const ViewTab = memo(props => {
  const {
    activeTab,
    onTabChange
  } = props

  const [current, setCurrent] = useState(activeTab)

  const clickList = useCallback((e) => {
    e.preventDefault();
    setCurrent(LIST_VIEW);
    onTabChange(LIST_VIEW);
  }, [onTabChange])

  const clickChart = useCallback((e) => {
    e.preventDefault();
    setCurrent(CHART_VIEW);
    onTabChange(CHART_VIEW);
  }, [onTabChange])

  return (
    <ul className="nav nav-tabs nav-fill my-4">
      <li className="nav-item">
        <a 
          className={classnames('nav-link', {active: current === LIST_VIEW})} 
          href="#"
          onClick={(e) => clickList(e)}
        >
          <Ionicon
            className="rounded-circle mr-2"
            fontSize="25px"
            color="#007bff"
            icon="ios-paper"
          /> 
          列表模式
        </a>
      </li>
      <li className="nav-item">
        <a 
          className={classnames('nav-link', {active: current === CHART_VIEW})} 
          href="#"
          onClick={(e) => clickChart(e)}
        > 
          图表模式
        </a>
      </li>
    </ul>
  )
});

ViewTab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired
}

ViewTab.defaultProps = {
  activeTab: LIST_VIEW,
  onTabChange: () => {}
}

export default ViewTab