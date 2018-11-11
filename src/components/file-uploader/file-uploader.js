import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, withStyles, CircularProgress } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  progress: {
    margin: theme.spacing.unit
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  }
});

class FileUploader extends React.Component {
  render() {
    const { classes, storage: { isLoading, progress } } = this.props;
    return (
      <React.Fragment>
        <input
          type="file"
          accept="image/*"
          ref={ elem => this.input = elem }
          onChange={ this.props.handleFile }
          hidden
        />
        <div className={classes.container}>
          <Button
            color="primary"
            variant="contained"
            className={ classes.button }
            onClick={ () => this.input.click() }
            disabled={ isLoading }
          >
            <CloudUploadIcon className={ classes.leftIcon }/>
            Upload
          </Button>
          {
            isLoading &&
            <CircularProgress className={ classes.progress } variant="indeterminate">
              {progress}
            </CircularProgress>
          }
          <span>{this.input && this.input.value}</span>
        </div>
      </React.Fragment>
    );
  }
}

FileUploader.propTypes = {
  handleFile: PropTypes.func.isRequired,
  storage: PropTypes.shape({
    isLoading: PropTypes.bool,
    progress: PropTypes.number
  }).isRequired
};

const mapStateToProps = (state) => ({
  storage: state.storage
});

export default connect(mapStateToProps, null)(withStyles(styles)(FileUploader));
