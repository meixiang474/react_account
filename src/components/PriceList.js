import React, {memo} from 'react';
import PropTypes from 'prop-types';
import Ionicon from 'react-ionicons';

const PriceList = memo(props => {
  const {
    items,
    onModifyItem,
    onDeleteItem
  } = props

  return (
    <ul className="list-group list-grop-flush">
      {
        items.map(item => (
          <li 
            className="list-group-item d-flex justify-content-between align-items-center"
            key={item.id}>
              <span className="col-1 badge badge-primary">
                <Ionicon
                  className="rounded-circle"
                  color="#fff"
                  fontSize="30px"
                  style={{backgroundColor: '#007bff', padding: '5px'}}
                  icon={item.category.iconName}  
                />
                
              </span>
              <span className="col-5 d-flex justify-content-center">
                {item.title}
              </span>
              <span className="col-2 font-weight-bold">
                {item.category.type === 'income' ? '+' : '-'}
                {item.price}元
              </span>
              <span className="col-2">
                {item.date}
              </span>
              <a onClick={() => onModifyItem(item)}>
                <Ionicon
                className="rounded-circle"
                fontSize="30px"
                color="#fff"
                style={{backgroundColor: '#28a745', padding: '5px'}}
                icon="ios-create-outline"
              />
              </a>
             
             <a onClick={() => onDeleteItem(item)}>
              <Ionicon
                className="rounded-circle"
                fontSize="30px"
                color="#fff"
                style={{backgroundColor: '#dc3545', padding: '5px'}}
                icon="ios-close"
              />
             </a>
          
          </li>
        ))
      }
    </ul>
  )
});

PriceList.propTypes = {
  items: PropTypes.array,
  onModifyItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired
}
PriceList.defaultProps = {
  items: [],
  onModifyItem: () => {},
  onDeleteItem: () => {}
}

export default PriceList