import classnames from 'classnames';
import React from 'react';
import './style.css';

interface FormGroupProps {
  label: string;
  className?: string;
  labelClassName?: string;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  label,
  className,
  labelClassName,
  children
}) => (
  <div className={classnames('form__group', className)}>
    <label className={classnames('form__label', labelClassName)}>{label}</label>
    {children}
  </div>
);

export default FormGroup;
