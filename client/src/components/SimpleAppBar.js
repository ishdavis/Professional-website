import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  cssRoot: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: 'white',
  }
});

class SimpleAppBar extends Component{
  render(){

  return (
    <div className={this.props.classes.root}>
      <AppBar position="static" color="white">
        <Toolbar style={{ 'justify-content': 'center' }}>
        <Button
          variant="contained"
          color="primary"
          className={classNames(this.props.classes.button, this.props.classes.cssRoot)}
          onClick={() => this.props.updatePage(0)}
          >
          <strong>Home</strong>
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classNames(this.props.classes.button, this.props.classes.cssRoot)}
          onClick={() => this.props.updatePage(1)}
          >
          <strong>Education</strong>
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classNames(this.props.classes.button, this.props.classes.cssRoot)}
          onClick={() => this.props.updatePage(2)}
          >
          <strong>Work Experience</strong>
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classNames(this.props.classes.button, this.props.classes.cssRoot)}
          onClick={() => this.props.updatePage(3)}
          >
          <strong>Projects</strong>
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classNames(this.props.classes.button, this.props.classes.cssRoot)}
          onClick={() => this.props.updatePage(4)}
          >
          <strong>Development Activities</strong>
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classNames(this.props.classes.button, this.props.classes.cssRoot)}
          onClick={() => this.props.updatePage(5)}
          >
          <strong>Contact</strong>
        </Button>

        </Toolbar>
      </AppBar>
    </div>
  );
  }
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);