import React from 'react';
import Flight from './Flight';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

export default class FlightsView extends React.Component {
  state = {
    flights: []
  }
  onClick = e => {
    e.preventDefault();
    this.props.onBack();
  }

  async componentDidMount() {
    const { from, to , departDate, returnDate} = this.props.searchData;
    const url = 'https://warsawjs-flights-api.herokuapp.com/flights';
    const result = await fetch(`${url}/${from}/${to}/${departDate}/${returnDate}`);
    const flights = await result.json();
    this.setState({flights});
  }
  render(){
    return (
      <div>
        <h4>Z: {this.state.flights[0] && this.state.flights[0].inboundDate}

         <br/>do: {this.state.flights[0] && this.state.flights[0].outboundDate}
        </h4>

        <Button onClick={this.onClick} type="submit" variant="raised" color="primary">
          Wróć
        </Button>
        {
          this.state.flights.map(
            flight => <Flight flight={flight} />
        )}
      </div>
    )


  }
}
