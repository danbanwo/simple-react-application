import React from 'react';

const Filter = ({handleChange, sortedPizza }) => {

    return (
        <div>
            <label htmlFor="filterText"></label>
            Filter:
            <input name="filterText" type="text" placeholder="Toppings???" onChange={e => handleChange(e)}/>

            <button onClick={e => sortedPizza()} >Sort</button>
        </div>
    )
}

export default Filter;