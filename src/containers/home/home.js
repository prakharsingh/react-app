import React from 'react';
import { Typography } from '@material-ui/core';
import { Row } from 'react-flexbox-grid';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AppActions, StorageActions } from '../../actions';
import UserForm from './fragments/user-form';
import RandomString from '../../utils/random';

class Home extends React.Component {
  getNewFileName = (fileName) => {
    const arr = fileName.split('.');
    const last = arr.length - 1;
    const randString = RandomString() + "-" + Date.now();
    return randString + '.' + arr[last];
  };

  handleUpload = (e) => {
    const file = e.target.files[0];
    const acl = 'public-read';
    const key = encodeURIComponent(acl + '/' + this.getNewFileName(file.name));

    this.props.initiateUpload({ file, key });
  };

  render() {
    const { submit, storage: { isLoading } } = this.props;
    return (
  <React.Fragment>
    <Row center="md">
      <Typography variant="h5" gutterBottom>Business Details</Typography>
    </Row>
    <hr/>
    <UserForm
      onSubmit={ (fields) => submit(fields) }
      onFileUpload={ this.handleUpload }
      isSubmitDisabled={ isLoading }
    />
  </React.Fragment>
    )
  }
}

Home.propTypes = {};

Home.defaultProps = {};

const mapStateToProps = (state) => ({
  storage: state.storage
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  submit: AppActions.submitForm,
  initiateUpload: StorageActions.initiateUpload,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
