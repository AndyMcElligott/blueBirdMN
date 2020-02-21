import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import HillItem from '../HillItem/HillItem';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';


class LocalHills extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_HILLS' })
    }

    addHill = () => {
        this.props.history.push(`/AddHill`)
    }

    render() {
        // const { classes } = props;
        return (
            <Router>
                <div className="hillItem">
                    {this.props.reduxStore.hill.map(hill => {
                        return (
                            <HillItem key={hill.id}
                                hill={hill}
                            // Korey help
                            // key = {i}
                            // id={hill.id} 
                            // title={hill.name}
                            // hours={hill.hours}
                            // terrain={hill.terrain}
                            // slopes={hill.slopes}
                            // live={hill.live_view}
                            // about={hill.about}
                            // logo={hill.logo}
                            />
                        )
                    })
                    }
                </div>
                <Fab color="primary" aria-label="Add" className="addHillBtn">
                    <AddIcon onClick={this.addHill}/>
                </Fab>
            </Router>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
});

LocalHills.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default connect(mapStateToProps)(LocalHills);