import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Snackbar, IconButton, withStyles } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons'
import { AppActions } from '../../actions';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
});

const Toast = ({ app: { showToast, toastMessage }, hideToast, classes }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    hideToast()
  };

  return (
    <Snackbar
      anchorOrigin={ { vertical: 'bottom', horizontal: 'center' } }
      open={ showToast }
      onClose={ handleClose }
      message={ <span>{ toastMessage }</span> }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
  );
};

Toast.propTypes = {
  app: PropTypes.shape({
    showToast: PropTypes.bool,
    toastMessage: PropTypes.string
  }).isRequired,
  hideToast: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  app: state.app
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  hideToast: AppActions.hideToast,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Toast));


