import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

interface IProps {
    name: string;
    symbol: string;
    price: number;
}


const AssetTableLine: FunctionComponent<IProps> = ( {name, symbol, price}) => {

    return (
        <tr>
            <td className="text-truncate">{name}</td>
            <td>{symbol}</td>
            <td className="text-truncate">{price} USDT</td>
            <td>2</td>
            <td>45000 USDT</td>
            <td>19500 USDT</td>
            <td className="text-center">
                <div className="btn-group" role="group">
                    <button className="btn btn-primary" type="button">
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="btn btn-danger" type="button">
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default AssetTableLine;