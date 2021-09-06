import React from 'react';

function Table(props) {
    return <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            {Object.keys(props.cart).length ? (
                Object.keys(props.cart).map((item) => {
                    if (props.cart[item]) {
                        return (
                            <tr key={`cart_${item}`}>
                                <td>{props.dataItem[item].name}</td>
                                <td>{props.dataItem[item].price}</td>
                                <td>{props.cart[item]}</td>
                                <td>{props.dataItem[item].price * props.cart[item]}</td>
                            </tr>
                        );
                    }
                }).filter(Boolean)
            ) : (
                <tr></tr>
            )}
            {Object.keys(props.freeProducts).length ? (
                Object.keys(props.freeProducts).map((item) => {
                    return (
                        <tr key={`freeProducts_${item}`}>
                            <td>{`${props.dataItem[item].name} (free)`}</td>
                            <td>{props.dataItem[item].price}</td>
                            <td>{props.freeProducts[item]}</td>
                            <td>0</td>
                        </tr>
                    );
                })
            ) : (
                <tr></tr>
            )}
        </tbody>
    </table>
}


export default React.memo(Table);