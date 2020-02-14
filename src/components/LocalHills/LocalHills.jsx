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
                <div style={{ display: 'flex' } }>
                    {this.props.reduxStore.hill.map(hill => {
                        return (
                            <HillItem 
                                id={hill.id} 
                                title={hill.name}
                                open={hill.open}
                                equip={hill.snow_equip}
                                night={hill.night}
                                rental={hill.rental}
                                hours={hill.hours}
                                terrain={hill.terrain}
                                slopes={hill.slopes}
                                live={hill.live_view}
                                about={hill.about}
                                logo={hill.logo}
                            />
                        )
                    })
                    }
                </div>
            </Router>
        );
    }
}

        // <Card className={classes.card} >
        //             <CardHeader
        //                 avatar={
        //                     <Avatar aria-label="Buck Hill" className={classes.avatar}>
        //                         BH
        //                     </Avatar>
        //                 }
        //                 title={hill.name}
        //             />
        //             <CardMedia
        //                 className={classes.media}
                   

        //             />
        //             <CardActions className={classes.actions} disableActionSpacing>
        //                 <IconButton aria-label="More Info" className={classes.icon} color="disabled" fontSize="large">
        //                     <Chip
        //                         //   avatar={<Avatar>MB</Avatar>}
        //                         label="More Info"
        //                         onClick={this.handleClick}
        //                         className={classes.chip}
        //                         color="primary"
        //                     />
        //                 </IconButton>
        //                 <IconButton
        //                     className={classnames(classes.expand, {
        //                         [classes.expandOpen]: this.state.expanded,
        //                     })}
        //                     onClick={this.handleExpandClick}
        //                     aria-expanded={this.state.expanded}
        //                     aria-label="Show more"
        //                 >
        //                     <ExpandMoreIcon />
        //                 </IconButton>
        //             </CardActions>
        //             <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
        //                 <CardContent>
        //                     {/* <Typography paragraph>Method:</Typography> */}
        //                     <Typography paragraph>
        //                         {/* pull info from DB */}
        //                     </Typography>
        //                     <Typography paragraph>
        //                         {/* pull location from DB */}
        //                     </Typography>
        //                     <Typography paragraph>
        //                         {/* pull night from DB */}
        //                     </Typography>
        //                 </CardContent>
        //             </Collapse>
        //         </Card>

            // <Card className={classes.card} >
            //     <CardHeader
            //         avatar={
            //             <Avatar aria-label="Buck Hill" className={classes.avatar}>
            //                 AA
            // </Avatar>
            //         }
            //         title="Afton Alps"
            //     />
            //     <CardMedia
            //         className={classes.media}
            //         image="https://i.pinimg.com/originals/eb/8b/e3/eb8be3e666283f10b64a66a0b51d78a9.jpg"
            //         title="Buck Hill"
            //     />
            //     <CardActions className={classes.actions} disableActionSpacing>
            //     <IconButton aria-label="More Info" className={classes.icon} color="disabled" fontSize="large">
            //             <Chip
            //                 //   avatar={<Avatar>MB</Avatar>}
            //                   label="More Info"
            //                   onClick={this.handleClick}
            //                   className={classes.chip}
            //                   color="primary"
            //             />
            //         </IconButton>
            //         <IconButton
            //             className={classnames(classes.expand, {
            //                 [classes.expandOpen]: this.state.expanded,
            //             })}
            //             onClick={this.handleExpandClick}
            //             aria-expanded={this.state.expanded}
            //             aria-label="Show more"
            //         >
            //             <ExpandMoreIcon />
            //         </IconButton>
            //     </CardActions>
            //     <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            //         {/* <CardContent>
            //             {/* <Typography paragraph>Method:</Typography> */}
            //             {/* <Typography paragraph>
            //                 Buck Hill is a ski and snowboard hill in Burnsville, Minnesota, a suburb south of Minneapolis. It is one of three ski areas in the Twin Cities metropolitan area. Buck Hill opened in 1954 and offers ski, snowboard, and tubing trails.
            //             </Typography>
            //             <Typography paragraph>
            //                 Location: Burnsville, Minnesota, U.S.
            //             </Typography>
            //             <Typography paragraph>
            //                 Night skiing: every night
            //             </Typography>
            //             <Typography>
            //                 Base elevation: 949 ft (289 m)
            //                 <br />
            //                 Vertical: 262 ft (80 m)
            //             </Typography> */}
            //         {/* </CardContent> */} 
            //     </Collapse>
            // </Card>
            // </div>
        


const mapStateToProps = (reduxStore) => ({
    reduxStore
});

export default connect(mapStateToProps)(LocalHills);