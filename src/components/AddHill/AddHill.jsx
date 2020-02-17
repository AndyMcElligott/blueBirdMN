import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: '5px',
    marginRight: '5px',
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

//   handleChange = name => event => {
//     this.setState({
//       [name]: event.target.value,
//     });
//   };

class AddHill extends Component {

  state = {
    hillName: '',
    open: '',
    night: '',
    rental: '',
    hours: '',
    equipment: '',
    info: '',
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <form className={classes.container} noValidate autoComplete="off" style={{ display: 'flex' }}>
          <TextField style={{ display: 'inline-block' }}
            id="filled-name"
            label="Hill Name"
            className={classes.textField}
            value={this.state.hillName}
            //   onChange={this.handleChange('name')}
            margin="normal"
            variant="filled"
          />
          {"\n"}
          <TextField style={{ display: 'inline-block' }}
            id="filled-name"
            label="Open"
            className={classes.textField}
            value={this.state.open}
            //   onChange={this.handleChange('name')}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Night Skiing"
            className={classes.textField}
            value={this.state.night}
            //   onChange={this.handleChange('name')}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Rental"
            className={classes.textField}
            value={this.state.rental}
            //   onChange={this.handleChange('name')}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Hours"
            className={classes.textField}
            value={this.state.hours}
            //   onChange={this.handleChange('name')}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Equipment"
            className={classes.textField}
            value={this.state.equipment}
            //   onChange={this.handleChange('name')}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-name"
            label="Hill Info"
            className={classes.textField}
            value={this.state.info}
            //   onChange={this.handleChange('name')}
            margin="normal"
            variant="filled"
          />
          <Button className="AddHillBtn" type= "submit" variant="contained" color="primary"> Submit
          </Button>
        </form>
        
      </>
    )
  }
}


AddHill.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(withStyles(styles)(AddHill));