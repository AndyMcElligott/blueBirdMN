import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

// MUI imports
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import HomeIcon from '@material-ui/icons/Home';
import Icon from '@material-ui/core/Icon';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import Chip from '@material-ui/core/Chip';
import { blue } from '@material-ui/core/colors';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    card: {
        maxWidth: 400,
        marginLeft: '2em',
        marginTop: '2em',
        marginRight: '2em',
        direction: 'grid'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: blue[900],
    },
    iconHover: {
        margin: theme.spacing.unit * 2,
        '&:hover': {
            color: red[800],
        },
    },
});

class HillItem extends Component {

    state = {
        expanded: false,
        spacing: '8',
    };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    info = (hill) => {
        this.props.dispatch({
            type: 'GET_INFO',
            payload: hill
        })
        this.props.history.push(`/infopage`)
    }

    // hillInfo = (action) => {
    //     console.log(action);
    //     this.props.dispatch({
    //       type: 'SET_HILL_INFO',
    //       payload: action
    //     })
    //   }

    render() {

        console.log(this.props.reduxStore)
        const { classes } = this.props;

        let id = this.props.id
        // let index = id
        // let hill = this.props.reduxStore.hills[index]

        return (

            <>
                <div className="hillCard">
                    <Card className={classes.card} >
                        <CardHeader
                            avatar={
                                <Avatar aria-label="Buck Hill" className={classes.avatar}>
                                    {this.props.hill.avatar}
                                </Avatar>
                            }
                            title={this.props.hill.name}
                        />
                        <CardMedia
                            className="logo"
                            style={{ height: 1, paddingTop: '56.25%' }}
                            image={this.props.hill.logo}
                        >

                        </CardMedia>
                        <CardActions className={classes.actions} disableActionSpacing>
                            <IconButton aria-label="More Info" className={classes.icon} color="disabled" fontSize="large">
                                <Chip
                                    //   avatar={<Avatar>MB</Avatar>}
                                    label="More Info"
                                    onClick={() => { this.info(this.props.hill) }}
                                    className={classes.chip}
                                    color="primary"
                                />
                            </IconButton>
                            <IconButton
                                // className={classnames(classes.expand, {
                                //     [classes.expandOpen]: this.state.expanded,
                                // })}
                                onClick={this.handleExpandClick}
                                aria-expanded={this.state.expanded}
                                aria-label="Show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>
                                    About:
                                    <br />
                                    {this.props.hill.about}
                                </Typography>
                                <DeleteIcon className={classes.icon} fontSize="large"
                                    onClick={() => this.props.dispatch(
                                        {
                                            type: 'DELETE_HILL',
                                            payload: this.props.hill.id
                                        })} />
                            </CardContent>
                        </Collapse>
                    </Card>
                </div>
            </>
        )
    }
}


const mapStateToProps = (reduxStore) => ({
    reduxStore
});

HillItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps)(withStyles(styles)(HillItem)));