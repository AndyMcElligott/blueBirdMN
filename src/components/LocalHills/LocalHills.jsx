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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    card: {
        maxWidth: 400,
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
        backgroundColor: red[500],
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
                <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Buck Hill" className={classes.avatar}>
              B
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
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
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
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
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
            FORGED IN TRADITION
Ten thousand years ago, the last ice age receded from the northern half of the North American continent. The Minnesota River helped drain the glacier and just south of the river, a terminal moraine was formed which the local Indians later named Buck Hill.

In 1954 Charles Stone Jr. and his future wife Nancy Campbell obtained a lease from the landowner Grace Whittier of Northfield, Minnesota. Miss Whittier’s father had bought the land for the price of the unpaid back taxes. Many people had skied on the undeveloped hill in the past, including two Minnesota Governors. In the 1930’s Fred Pabst, founder of Bromley Ski Area in Vermont, started a ski area on this site, but the drought years with a lack of snow caused him to abandon the plan.

During the years from 1954 until 1961, Buck Hill was only open a few weekends due to very meager snowfalls. In 1961 the Stones added snowmaking and a T-Bar. This put a whole new perspective on the business and the area was able to operate for at least four months in the winter. In the following years, more lifts and trails were added, as well as a new chalet and rental shop, and the Sports Bucket Restaurant was added in 1978. In 2006, Buck Hill installed a new Quad chairlift at the south end of the ski area, and brought in over 100,000 yards of fill to raise the elevation of the top of the new chairlift.

Today, Buck Hill offers 15 different runs to skiers and snowboarders of all abilities, as well as snow tubing. Buck has 11 lifts including 2 Quads and a Triple chairlift. Buck also has one of the best snowmaking systems in the Midwest, enabling the area to operate even when Old Man Winter doesn’t cooperate.

Buck Hill is still operated with the family in mind, offering a full range of skiing programs for the young and the young-at-heart. Buck’s reputation as a quality ski area is known across the country. Our ski racing program is also nationally acclaimed. Ski magazines calls Buck the “Legendary Capitol of American ski racing.” In 2006, Erich Sailer, long-time coach of the Buck Hill Ski Racing Team, was inducted into the US National Ski Hall of Fame.
            </Typography>
            <Typography paragraph>
              CCCCCCCCC
            </Typography>
            <Typography paragraph>
              DDDDDDDD
            </Typography>
            <Typography>
              EEEEEEEEEE
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
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