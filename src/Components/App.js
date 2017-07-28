import React, { Component } from 'react';
import data from '../../pizza.json';
import DisplayPizza from './DisplayPizza';
import Filter from './Filter';

class App extends Component {
    constructor() {
        super();
        this.state = {
            pizzas: null,
            filterText: '',
            filterResult: null
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.filteredResults = this.filteredResults.bind(this);
        this.sortedPizza = this.sortedPizza.bind(this);
    }

    //The setTimeout method is ONLY used below to mimic an XHR/AJAX get request.
    componentDidMount() {
        setTimeout(()=> {
            this.setState({pizzas: data.pizzas});
        }, 2000)
    }

    //The below handleChange method sets the value of the filterText property in state
    //It also uses the filteredResults method to set the value of the filterResults property in state
    handleChange(e) {
        let { name, value } = e.target;
        let filterResult = this.filteredResults(value)
        this.setState({ [name]: value, filterResult })
    }

    //The below filteredResults method uses regexp to return an array containing the desired results
    //filtered results
    filteredResults(text) {
        let { pizzas } = this.state;
        let term = '(^|\\b)' + text
        let regex = new RegExp(term, "gi")
        return pizzas.filter(pizza => pizza.match(regex))
    }

    //The below sortedPizza method sorts the array of pizzas in reverse alphabetical order
    sortedPizza() {
        let { pizzas, filterResult } = this.state;
        return filterResult ? this.setState({
            filterResult: filterResult.sort((a, b) => {
                a = a.toLowerCase()
                b = b.toLowerCase()
                return b > a
            })
        })
        : this.setState({
            pizzas: pizzas.sort((a, b) => {
                a = a.toLowerCase()
                b = b.toLowerCase()
                return b > a
            })
        });
    }

    //Renders Pizza list if pizza data exists in store. Otherwise, renders "Loading..."
    render() { 
        let { pizzas, filterResult } = this.state;
        return pizzas ? (
                <div>
                    <Filter handleChange={this.handleChange} sortedPizza={this.sortedPizza} />
                    <DisplayPizza pizzas={pizzas} filterResult={filterResult} />
                </div>
        ) 
            : <h1>Loading...</h1>
    }
};

export default App;