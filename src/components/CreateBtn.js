import React, {memo} from 'react';
import PropTypes from 'prop-types';

const CreateBtn = memo(props => {
  const {
    onClick
  } = props
  return (
    <button className="btn btn-primary btn-block" onClick={onClick}>
      创建一条新的记账记录
    </button>
  )
});

CreateBtn.propTypes = {
  onClick: PropTypes.func.isRequired
}
CreateBtn.defaultProps = {
  onClick: () => {}
}
export default CreateBtn;