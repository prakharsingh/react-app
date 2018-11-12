import React from 'react';
import { getFormValues } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, withStyles, CircularProgress, Card, CardMedia } from '@material-ui/core';
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
  },
  card: {
    maxWidth: 150,
  },
  media: {
    height: 140,
    width:140
  },
  imageContainer: {
    marginTop: -104,
    float: 'right'
  }
});

class FileUploader extends React.Component {
  render() {
    const { classes, storage: { isLoading, progress, fileName }, values } = this.props;

    return (
      <React.Fragment>
        <input
          type="file"
          accept="image/*"
          ref={ elem => this.input = elem }
          onChange={ this.props.handleFile }
          hidden
        />
        <div className={ classes.container }>
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
            <React.Fragment>
              <CircularProgress className={ classes.progress } variant="indeterminate">
                { progress }
              </CircularProgress>
              <span>{ fileName }</span>
            </React.Fragment>
          }
        </div>
        {
          values && values.profilePicUrl &&
          <div className={classes.imageContainer}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={values.profilePicUrl || ''}
                title='profile-pic'
              />
            </Card>
          </div>
        }
      </React.Fragment>
    );
  }
}

FileUploader.propTypes = {
  handleFile: PropTypes.func.isRequired,
  storage: PropTypes.shape({
    isLoading: PropTypes.bool,
    progress: PropTypes.number,
    fileName: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  storage: state.storage,
  values: getFormValues('userForm')(state)
});

export default connect(mapStateToProps, null)(withStyles(styles)(FileUploader));
