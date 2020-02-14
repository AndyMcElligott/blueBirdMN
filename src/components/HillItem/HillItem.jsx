import React, { Component } from 'react';
import { connect } from 'react-redux';

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

const styles = theme => ({
    card: {
        maxWidth: 400,
        marginLeft: '5em',
        marginTop: '2em',
        // direction: 'grid'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        // display: 'flex',
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

// details = (id) => {
//     this.props.dispatch({
//         type: 'GET_HILLS',
//         payload: id
//     })
//     this.props.history.push(`/details`)
// }

class HillItem extends Component {

    state = {
        expanded: false,
        hills: [{
            title: 'Buck Hill',
            description: '',
        }],

    };

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_HILLS' })
    }

    state = { expanded: false };


    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {

        const { classes } = this.props;

        let id= this.props.id
        // let index = id -1
        let hill = this.props.reduxStore.hill

        return (
            <Card className={classes.card} >
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Buck Hill" className={classes.avatar}>
                                BH
                            </Avatar>
                        }
                        title={this.props.name}
                    />
                    <CardMedia
                        className={classes.media}
                    />
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="More Info" className={classes.icon} color="disabled" fontSize="large">
                            <Chip
                                //   avatar={<Avatar>MB</Avatar>}
                                label="More Info"
                                onClick={this.handleClick}
                                className={classes.chip}
                                color="primary"
                            />
                        </IconButton>
                        <IconButton
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            {/* <Typography paragraph>Method:</Typography> */}
                            <Typography paragraph>
                                {/* pull info from DB */}
                            </Typography>
                            <Typography paragraph>
                                {/* pull location from DB */}
                            </Typography>
                            <Typography paragraph>
                                {/* pull night from DB */}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
    
        )
    }
}


const mapStateToProps = (reduxStore) => ({
    reduxStore
});

HillItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(HillItem));