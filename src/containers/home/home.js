import React from 'react';
import { Typography } from '@material-ui/core';
import { Row } from 'react-flexbox-grid';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { submitForm, uploadFile } from '../../actions';
import UserForm from './fragments/user-form';
import './home.css';

class Home extends React.Component {
  handleUpload = (e) => {
    const fileDetails = {
      file: e.target.files[0]
    };

    this.props.uploadFile(fileDetails);
  };

  render() {
    const { submit } = this.props;
    return (
  <React.Fragment>
    <Row center="md">
      <Typography variant="headline" gutterBottom>Business Details</Typography>
    </Row>
        <UserForm onSubmit={ submit } onFileUpload={ this.handleUpload }/>
  </React.Fragment>
    )
  }
}

Home.propTypes = {};

Home.defaultProps = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  submit: submitForm,
  uploadFile: uploadFile,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
