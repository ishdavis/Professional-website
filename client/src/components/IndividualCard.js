import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardPopup from './CardPopup';

const styles = theme => ({
  card: {
    maxWidth: 300,
    minWidth: 300,
    maxHeight: 209,
    minHeight: 209
  },
  cardContent: {
    maxWidth: 270,
    minWidth: 270,
    maxHeight: 134,
    minHeight: 134,
    paddingTop: 0
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop: 10,
  },
});

class IndividualCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {popupOpen: false};
  }

  togglePopUpOpen = () => {
    this.setState({popupOpen: !this.state.popupOpen})
  }
  
  render(){
    const { classes } = this.props;
    const { title } = this.props;
    const { summary } = this.props;
    const { button1Text } = this.props;
    const { button1Link } = this.props;
    const { button2Text } = this.props;
    const { button2Link } = this.props;
    const { longDescription } = this.props;
    const { date } = this.props;

    return (
      <Card className={classes.card}>
          <CardContent className={classes.cardContent }>
            <Typography align="center">
              <h2 style={{"color": "black", "padding-bottom": 0, "margin-bottom": 0}}><strong>{title}</strong></h2>
            </Typography>
            <Typography align="center" className={classes.t} variant="h6" >
              <i>{ date }</i>
            </Typography>
            <Typography variant="p">
              {
                  summary != null &&
                  <strong>{summary}</strong>
              }
            </Typography>
          </CardContent>
        <CardActions>
          {
            longDescription != null &&
            <Button size="small" color="primary" onClick={this.togglePopUpOpen} className={classes.pos}>
              Learn more
              <CardPopup open={this.state.popupOpen} title={title} text={longDescription}></CardPopup>
            </Button>
          }
          {
            button1Text != null &&
            <Button className={classes.pos} size="small" color="primary" href={button1Link == null ? undefined : button1Link} target={button1Link == null ? undefined : "_blank"}>
              {button1Text}
            </Button>
          }
          {
            button2Text != null &&
            <Button className={classes.pos} size="small" color="primary" href={button2Link == null ? undefined : button2Link} target={button2Link == null ? undefined : "_blank"}>
              {button2Text}
            </Button>
          }
        </CardActions>
      </Card>
    );
  }
}

IndividualCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndividualCard);
