import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class CardPopup extends React.Component {
    state = {
      open: false,
    };
  
    handleClickOpen = scroll => () => {
      this.setState({ open: true});
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };
  
    render() {
      return (
        <div>
          <Dialog
            open={this.props.open}
            onClose={this.handleClose}
            scroll='paper'
            aria-labelledby="scroll-dialog-title"
          >
            <DialogTitle id="scroll-dialog-title">{this.props.title}</DialogTitle>
            <DialogContent>
              <DialogContentText color="default">
                {this.props.text}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }
  
  export default CardPopup;