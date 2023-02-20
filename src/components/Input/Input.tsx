import React from 'react'
import { Base } from '../types';

interface InputProps extends Base {
    placeHolder: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ className, placeHolder, type, value, onChange }) => {
    return <input
        className={className ? `vds-input ${className}` : 'vds-input'}
        placeholder={placeHolder}
        type={type}
        value={value}
        onChange={onChange}
    />
}

export default Input
