import React, {FunctionComponent, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEdit, faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import AssetTableLine from "./AssetTableLine";


const AssetOverview: FunctionComponent = () => {

    //States
    const [fetchedName, setFetchedName] = useState<string>("");
    const [fetchedPrice, setFetchedPrice] = useState<number>(0);
    const [fetchedSymbol, setFetchedSymbol] = useState<string>("");

    //Behaviors
    const FetchData = fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin');
    const AssetDataJSON = FetchData.then((response) => response.json());
    AssetDataJSON.then((data) =>
    {
        setFetchedName(data[0].name);
        setFetchedPrice(data[0].current_price);
        setFetchedSymbol(data[0].symbol.toUpperCase());
    });

    //Render
    return (
        <div className="row justify-content-center">
            <div className="col-xl-10 col-xxl-9">
                <div className="card shadow">
                    <div className="card-header d-flex flex-wrap justify-content-center align-items-center justify-content-sm-between gap-3">
                        <h5 className="display-6 text-nowrap text-capitalize mb-0">Assets overview</h5>
                        <div className="input-group input-group-sm w-auto">
                            <button className="btn btn-outline-success btn-sm me-2 rounded-start rounded-end" type="button">
                                <FontAwesomeIcon icon={faPlus} /> Add
                            </button>
                            <input className="form-control form-control-sm" type="text" />
                            <button className="btn btn-outline-primary btn-sm" type="button">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-striped table-hover">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Symbol</th>
                                    <th>Current Price</th>
                                    <th>Quantity</th>
                                    <th>Total Value</th>
                                    <th>Average Cost</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <AssetTableLine name={fetchedName} symbol={fetchedSymbol} price={fetchedPrice} />
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card-footer">
                        <nav>
                            <ul className="pagination pagination-sm mb-0 justify-content-center">
                                <li className="page-item">
                                    <a className="page-link" aria-label="Previous" href="#">
                                        <span aria-hidden="true">«</span>
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        3
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" aria-label="Next" href="#">
                                        <span aria-hidden="true">»</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AssetOverview;