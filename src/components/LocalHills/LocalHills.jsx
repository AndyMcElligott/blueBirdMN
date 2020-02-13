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

const styles = theme => ({
    card: {
        maxWidth: 400,
        marginLeft: '5em',
        marginTop: '2em',
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

class LocalHills extends Component {

    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;

        return (
            <>
                <Card className={classes.card} >
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Buck Hill" className={classes.avatar}>
                                B
                            </Avatar>
                        }
                        title="Buck Hill"
                    />
                    <CardMedia
                        className={classes.media}
                        image="https://i0.wp.com/buckhill.com/wp-content/uploads/2018/06/BuckHill-HeadOnly-3Color.jpg?fit=650%2C645&ssl=1"
                        title="Buck Hill"
                    />
                    {/* <CardContent>
            <Typography component="p">
                AAAAAAAAAA
            </Typography>
            </CardContent> */}
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="More Info" className={classes.icon} color="disabled" fontSize="large">
                            <Chip
                                avatar={<Avatar>BH</Avatar>}
                                label="More Info"
                                clickable
                                className={classes.chip}
                                color="primary"
                                // onDelete={handleDelete}
                                // deleteIcon={<DoneIcon />}
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
                                B
                </Avatar>
                        }
                        title="Buck Hill"
                    />
                    <CardMedia
                        className={classes.media}
                        image="https://i0.wp.com/buckhill.com/wp-content/uploads/2018/06/BuckHill-HeadOnly-3Color.jpg?fit=650%2C645&ssl=1"
                        title="Buck Hill"
                    />
                    {/* <CardContent>
            <Typography component="p">
                AAAAAAAAAA
            </Typography>
            </CardContent> */}
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="More Info" className={classes.icon} color="disabled" fontSize="large">
                            <HomeIcon />
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
            </>
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