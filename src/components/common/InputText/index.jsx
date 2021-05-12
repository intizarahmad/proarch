import React from 'react'
import PropTypes from 'prop-types';
import './index.css';

const InputText = ({
  name,
  placeholder,
  onChange,
  className,
  value,
  ...props
}) => {
  
  return (
      <input
        id={name}
        name={name}
        type="text" // I am just keeping it as text box, but we can get this from props 
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={className}
      />
  )
}

InputText.defaultProps = {
  className: "input-text"
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default InputText 
