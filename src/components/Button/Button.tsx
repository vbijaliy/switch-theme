import React from 'react';
import { Base } from '../types';

interface ButtonProps extends Base {
    label: string;
    handleClick: (e: React.MouseEvent<HTMLElement>) => void
}

const Button: React.FC<ButtonProps> = ({ className, label, handleClick }) => {
    return <button
        className={className ? `vds-btn ${className}` : 'vds-btn'}
        onClick={handleClick}
    >
        {label}
    </button>
}

export default Button
