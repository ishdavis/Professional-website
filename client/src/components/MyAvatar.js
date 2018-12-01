import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: window.innerHeight / 3,
    height: window.innerHeight / 3,
  },
};

function MyAvatar(props) {
  const { classes } = props;
  const { imageName } = props;
  let source = "/img/" + imageName;
  return (
    <div className={classes.row}>
      <Avatar
        src={source}
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
    </div>
  );
}

MyAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyAvatar);
