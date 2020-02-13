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

class LocalHills extends Component {

    // fix state so only one card expands and not all the cards... 

    state = { 
        expanded: false, 
        hills: [{
            title: 'Buck Hill',
            description: '',
        }],

    };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    handleClick = () => {
        console.log('handleClick')
    }

    render() {
        const { classes } = this.props;

        return (
            <div style={{display:'flex'}}>
                <Card className={classes.card} >
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Buck Hill" className={classes.avatar}>
                                BH
                            </Avatar>
                        }
                        title="Buck Hill"
                    />
                    <CardMedia
                        className={classes.media}
                        image="https://res.cloudinary.com/liftopia/image/upload/c_fit,d_defaults:default_logo_1.png,f_auto,h_980,q_auto,w_980/v1/production/trail_maps/db393285e1fe5bd29082415b6e3c772b.jpg"
                        title="Buck Hill"
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
                                Buck Hill is a ski and snowboard hill in Burnsville, Minnesota, a suburb south of Minneapolis. It is one of three ski areas in the Twin Cities metropolitan area. Buck Hill opened in 1954 and offers ski, snowboard, and tubing trails.
                            </Typography>
                            <Typography paragraph>
                                Location: Burnsville, Minnesota, U.S.
                            </Typography>
                            <Typography paragraph>
                                Night skiing: every night
                            </Typography>
                            <Typography>
                                Base elevation: 949 ft (289 m)
                            <br />
                                Vertical: 262 ft (80 m)
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>

                {/* next card */}

                <Card className={classes.card} >
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Buck Hill" className={classes.avatar}>
                                AA
                </Avatar>
                        }
                        title="Afton Alps"
                    />
                    <CardMedia
                        className={classes.media}
                        image="https://i.pinimg.com/originals/eb/8b/e3/eb8be3e666283f10b64a66a0b51d78a9.jpg"
                        title="Buck Hill"
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
                        {/* <CardContent>
                            {/* <Typography paragraph>Method:</Typography> */}
                            {/* <Typography paragraph>
                                Buck Hill is a ski and snowboard hill in Burnsville, Minnesota, a suburb south of Minneapolis. It is one of three ski areas in the Twin Cities metropolitan area. Buck Hill opened in 1954 and offers ski, snowboard, and tubing trails.
                            </Typography>
                            <Typography paragraph>
                                Location: Burnsville, Minnesota, U.S.
                            </Typography>
                            <Typography paragraph>
                                Night skiing: every night
                            </Typography>
                            <Typography>
                                Base elevation: 949 ft (289 m)
                                <br />
                                Vertical: 262 ft (80 m)
                            </Typography> */}
                        {/* </CardContent> */} 
                    </Collapse>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
});

LocalHills.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(LocalHills));