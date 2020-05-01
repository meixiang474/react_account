import React, {memo} from 'react';
import PropTypes from 'prop-types';

const TotalPrice = memo(props => {
  const {
    income,
    outcome
  } = props

  return (
    <div 
      className="total-price-wrapper d-flex justify-content-between"
      style={{width: '100%'}}
    >
      <div className="income font-weight-bold">
        收入： <span>{income}</span>
      </div>
      <div className="outcome font-weight-bold">
        支出： <span>{outcome}</span>
      </div>
    </div>
  )
})

TotalPrice.propTypes = {
  income: PropTypes.number.isRequired,
  outcome: PropTypes.number.isRequired
}
TotalPrice.defaultProps = {
  income: 0,
  outcome: 0
}

export default TotalPrice;