import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';
import Option from './Option'
import styles from './SearchView.css'


export default class SearchView extends React.Component {
  state = {
    from: 'WAW',
    to: 'JFK',
    departDate: '2018-05-12',
    returnDate: '2018-05-21'
  }

  onChange = (e) => {
    this.setState({[e.target.id] : e.target.value }, () => {
      console.log('po:',this.state);
    });


  }
  onSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

	render() {
		return (
      <Grid container>
        <form onSubmit={this.onSubmit}>

        <FormControl className={styles.flex} >

          <div className="inline">
            <InputLabel htmlFor="from">Wylot z:</InputLabel>
            <Select
              native
              name="from" id="from" value={this.state.from} onChange={this.onChange}>
              {
                this.props.airports.map(
                  place => <Option key={place.id} place={place} />
                )
              }
            </Select>
          </div>

          <div className="inline">
            <InputLabel className={styles.toPlace}  htmlFor="to">Miejsce docelowe:</InputLabel>
            <Select
              native
              name="to" id="to" value={this.state.to} onChange={this.onChange}>
              {
                this.props.airports.map(
                  place => <Option key={place.id} place={place} />
                )
              }
            </Select>
          </div>

          <div className="inline">
            <TextField
            label="Data wylotu"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
             id="departDate"  value={this.state.departDate} onChange={this.onChange}
          />
          </div>

          <div className="inline">
            <TextField
              label="Data powrotu"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
               id="returnDate"
               value={this.state.returntDate} onChange={this.onChange}
            />
          </div>

          <div className="inline">
            <Button type="submit" variant="raised" color="primary">
              Szukaj
            </Button>
          </div>

        </FormControl>
        </form>
      </Grid>
		);
	}
}
