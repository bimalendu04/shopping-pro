import React from 'react';

function Items(props) {
    return <div>
        <ul>
            {props.items && props.items.map((item) => {
                return (
                    <li
                        key={`display${item.id}`}
                        onClick={() => props.addItemsInCart(item.id)}
                    >
                        <span>
                            {item.name} - {item.price}
                        </span>
                    </li>
                );
            })}
        </ul>
    </div>
}

export default React.memo(Items);