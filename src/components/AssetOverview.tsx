import React, { FunctionComponent } from 'react';

interface IProps {
 name: string;
 symbol: string;
 price: number;
}

const AssetOverview: FunctionComponent<IProps> = ({name, symbol, price}) => {
    return (
        <div className="row justify-content-center">
            <div className="col-xl-10 col-xxl-9">
                <div className="card shadow">
                    <div
                        className="card-header d-flex flex-wrap justify-content-center align-items-center justify-content-sm-between gap-3">
                        <h5 className="display-6 text-nowrap text-capitalize mb-0">Assets overview</h5>
                        <div className="input-group input-group-sm w-auto"><input className="form-control form-control-sm"
                                                                                  type="text"/>
                            <button className="btn btn-outline-primary btn-sm" type="button">
                                <svg className="bi bi-search mb-1" xmlns="http://www.w3.org/2000/svg" width="1em"
                                     height="1em" fill="currentColor" viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                </svg>
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
                                <tr>
                                    <td className="text-truncate">{name}</td>
                                    <td>{symbol}</td>
                                    <td className="text-truncate">{price} USDT</td>
                                    <td>2</td>
                                    <td>45000 USDT</td>
                                    <td>19500 USDT</td>
                                    <td className="text-center">
                                        <div className="btn-group" role="group">
                                            <button className="btn btn-primary" type="button"><i
                                                className="far fa-edit"></i></button>
                                            <button className="btn btn-danger" type="button"><i
                                                className="far fa-trash-alt"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card-footer">
                        <nav>
                            <ul className="pagination pagination-sm mb-0 justify-content-center">
                                <li className="page-item"><a className="page-link" aria-label="Previous" href="#"><span
                                    aria-hidden="true">«</span></a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" aria-label="Next" href="#"><span
                                    aria-hidden="true">»</span></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AssetOverview;