import React, {FunctionComponent, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

interface IProps {
    name: string;
    symbol: string;
    price: number;
}


const AssetTableLine: FunctionComponent<IProps> = ( {name, symbol, price}) => {

    //States
    const [quantity, setQuantity] = useState<number>(0);
    const [totalValue, setTotalValue] = useState<number>(0);
    const [editMode, setEditMode] = useState<boolean>(false);

    //Behaviors
    function calculateTotalValue(price: number, quantity: number): number {
        return price * quantity;
    }

    function handleEditClick() {
        setEditMode(true);
    }

    function handleSaveClick() {
        setEditMode(false);
    }

    function handleCancelClick() {
        setEditMode(false);
    }

    function handleQuantityChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = parseInt(e.target.value);
        setQuantity(value);
        setTotalValue(calculateTotalValue(price, value));
    }


    //Render
    return (
        <tr>
            <td className="text-truncate">{name}</td>
            <td>{symbol}</td>
            <td className="text-truncate">{price} USDT</td>

            {/*Display the quantity input if editMode is true, otherwise display the quantity*/}
            {editMode ? (
                <td>
                    <input type="number" value={quantity} onChange={handleQuantityChange} />
                </td>
            ) : (
                <td>{quantity}</td>
            )}
            <td>{totalValue}</td>
            <td>TBI</td>
            <td className="text-center">
                {editMode ? (
                    <div className="btn-group" role="group">
                        <button className="btn btn-success" type="button" onClick={handleSaveClick}>
                            Save
                        </button>
                        <button className="btn btn-secondary" type="button" onClick={handleCancelClick}>
                            Cancel
                        </button>
                    </div>
                ) : (
                    <button className="btn btn-primary" type="button" onClick={handleEditClick}>
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                )}
                <button className="btn btn-danger" type="button">
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </td>
        </tr>
    );
}

export default AssetTableLine;