import { Component } from "react";
import axios from 'axios';

export default class Beers extends Component {
  
  // props - what we receive
  constructor(props) {
    super(props);

    // state - local storage
    this.state = {
      beersList: []
    }; // this has to be an object
  }

  componentDidMount() {
    // call axios to receive beers array
    axios.get('https://api.punkapi.com/v2/beers')
    .then(response => response.data)
    .then(data => this.setState({beersList: data}));
  }


  // render - what gets displayed
  // JSX
  // who translates JSX? Babel - to React elements
  render() {

    const { beersList } = this.state

    return (
      <div>{ beersList.map(beer => {
        return (
          <ul>
            <li>{beer.name}</li>
            <li>{beer.description}</li>
            <li>{beer.ibu}</li>
          </ul>
        )
      })}</div>
    )
  }
}