import React from 'react';
import { Base } from '../types';

interface BreadCrumbProps extends Base {
    arr: { display: string, routeTo: string }[]
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ className, arr }) => {
    return (
        <ul className={className ? `vds-breadcrumb ${className}` : 'vds-breadcrumb'}>
            {
                arr.length > 0 ? (
                    arr.map((ele: { display: string, routeTo: string }) => (
                        <React.Fragment key={ele.display}>
                            <li>{ele.display}</li>
                        </React.Fragment>
                    ))
                ) : 'Please specify the breadcrumbs array'
            }
        </ul>
    )
}

export default BreadCrumb
