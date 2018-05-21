import React from 'react';
import SearchView from '../SearchView';
import FlightsView from '../FlightsView';

export default class App extends React.Component {
  state = {
    view: 'search',
    airports: []
  }
  onSearch = (searchData) => {
    this.setState({
      view:'flights',
      searchData
    })
  }
  onBack = () => {
    this.setState({
      view:'search',

    })
  }

  async componentDidMount() {
    // const { airports} = this.props.onSearch;
    const url = 'https://warsawjs-flights-api.herokuapp.com/airports';
    const result = await fetch(url);
    const airports = await result.json();
    this.setState({airports});
  }


  render() {
    switch(this.state.view){
      case 'search':
        return <SearchView onSearch={this.onSearch} airports={this.state.airports}/>
      case 'flights':
        return <FlightsView searchData={this.state.searchData}
        onBack={this.onBack}/>
      default:
        return <p> ooops </p>
    }
  }
}
