import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    cssRoot: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          color: 'white',
    }
  });

class MenuOptions extends Component{
    render() {
        return(
      <div className="Menu">
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
        >
        <strong>Work Experience</strong>
        </Button>
        <Button
        variant="contained"
        color="primary"
        className={classNames(this.props.classes.button, this.props.classes.cssRoot)}
        >
        <strong>Volunteer/Speaking Experience</strong>
        </Button>
        <Button
        variant="contained"
        color="primary"
        className={classNames(this.props.classes.button, this.props.classes.cssRoot)}
        >
        <strong>Projects</strong>
        </Button>
        <Button
        variant="contained"
        color="primary"
        className={classNames(this.props.classes.button, this.props.classes.cssRoot)}
        >
        <strong>Contact</strong>
        </Button>
      </div>
        )
    }
}

MenuOptions.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MenuOptions);