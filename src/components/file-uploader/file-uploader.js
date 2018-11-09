import React from 'react';
import PropTypes from 'prop-types';
import { Button, withStyles } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  }
});

class FileUploader extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <input
          type="file"
          accept="image/*"
          ref={ elem => this.input = elem }
          onChange={this.props.handleFile }
          hidden
        />
        <Button
          color="primary"
          variant="contained"
          className={ classes.button }
          onClick={ () => this.input.click() }
        >
          <CloudUploadIcon className={ classes.leftIcon }/>
          Upload
        </Button>
      </React.Fragment>
    );
  }
}

FileUploader.propTypes ={
  handleFile: PropTypes.func.isRequired
};

export default withStyles(styles)(FileUploader);
