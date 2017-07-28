import React from 'react';

const DisplayPizza = ({pizzas, filterResult}) => {

    let showPizza = () => (
        filterResult ? filterResult.map((pizza, idx) => <li key={idx}><h1 key={idx}>{pizza}</h1></li>) 
        : pizzas.map((pizza, idx) => <li key={idx}><h1 key={idx}>{pizza}</h1></li>)
    );

    return <ul>{showPizza()}</ul>
}

export default DisplayPizza;