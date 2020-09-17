import React, { InputHTMLAttributes } from 'react';

import './form-input.styles.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string 
  label: string 
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput = ({ handleChange, label, ...otherProps }: Props) => (
  <div className="group">
    <input
      className='form-input'
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
)

export default FormInput;