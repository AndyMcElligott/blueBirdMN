import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import HillItem from '../HillItem/HillItem';

class LocalHills extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_HILLS' })
    }

    render() {

        return (
            <Router>
                <div>
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
            </Router>
        );
    }
}
        
const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(LocalHills);