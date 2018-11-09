import React from 'react';
import PropTypes from 'prop-types';
import { Typography, MenuItem, Radio, FormControlLabel, Button } from '@material-ui/core';
import { Row, Col } from 'react-flexbox-grid';
import { Field, reduxForm } from 'redux-form';
import { renderSelectField, renderRadioGroup, renderTextField } from '../../../components/render-field';
import FileUploader from '../../../components/file-uploader';

const requiredFields = [
  'location',
  'city',
  'country',
  'membership'
];

const UserForm = ({ pristine, submitting, handleSubmit, onFileUpload }) => (
  <form onSubmit={ handleSubmit }>
    <Row>
      <Col md={ 6 }>
        <Row>
          <Col md={ 12 }>
            <Field name="category" label="Categories" component={ renderSelectField }>
              <MenuItem value="1">Category 1</MenuItem>
              <MenuItem value="2">Category 2</MenuItem>
              <MenuItem value="3">Category 3</MenuItem>
            </Field>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md={ 12 }>
            <Typography variant="body1" gutterBottom>
              Do you want to create a branch in existing or new category?
            </Typography>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md={ 12 }>
            <Field
              name="categoryType"
              component={ renderRadioGroup }
            >
              <FormControlLabel value="new" control={ <Radio/> } label="New"/>
              <FormControlLabel value="existing" control={ <Radio/> } label="Existing"/>
            </Field>
          </Col>
        </Row>
        <Row>
          <Col md={ 6 }>
            <Field
              name="busNameEng"
              label="Business Name(English)"
              component={ renderTextField }
            />
          </Col>
          <Col md={ 6 }>
            <Field
              name="busNameArab"
              label="Business Name(Arabic)"
              component={ renderTextField }
            />
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md={ 6 }>
            <Field
              name="branchNameEng"
              label="Branch Name(English)"
              component={ renderTextField }
            />
          </Col>
          <Col md={ 6 }>
            <Field
              name="branchNameArab"
              label="Branch Name(Arabic)"
              component={ renderTextField }
            />
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md={ 12 }>
            <Field
              name="location"
              label="Location*"
              component={ renderTextField }
            />
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md={ 12 }>
            <Field
              name="city"
              label="City*"
              component={ renderTextField }
            />
          </Col>
        </Row>
      </Col>
      <Col md={ 6 }>
        <Row>
          <Col md={ 12 }>
            <Field
              name="country"
              label="Country*"
              component={ renderTextField }
            />
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md={ 6 }>
            <Field
              name="instaUrl"
              label="Instagram Url (optional)"
              component={ renderTextField }
            />
          </Col>
          <Col md={ 6 }>
            <Field
              name="fbUrl"
              label="Facebook Url (optional)"
              component={ renderTextField }
            />
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md={ 12 }>
            <Field
              name="about"
              label="About"
              multiline
              rows={ 2 }
              component={ renderTextField }
            />
          </Col>
        </Row>
        <Row>
          <Col md={ 6 }>
            <Field
              name="email"
              label="Email (optional)"
              component={ renderTextField }
            />
          </Col>
          <Col md={ 6 }>
            <Field
              name="phone"
              label="Phone Number (optional)"
              component={ renderTextField }
            />
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md={ 12 }>
            <Field name="membership" label="Membership Type*" component={ renderSelectField }>
              <MenuItem value="1">Monthly</MenuItem>
              <MenuItem value="2">Annual</MenuItem>
            </Field>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md={ 12 }>
            <Typography variant="body1" gutterBottom>
              Profile Pic (optional)
              <Typography variant="caption" gutterBottom>
                Appropriate image ratio should be 16:9
              </Typography>
            </Typography>
            <Field name="profilePicUrl" type="text" component="input" hidden/>
            <FileUploader handleFile={onFileUpload}/>
          </Col>
        </Row>
      </Col>
    </Row>
    <br/>
    <Row>
      <Button type="submit" disabled={pristine || submitting} color="secondary" variant="contained"> Submit </Button>
    </Row>
  </form>
);

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'userForm',
  validate: (values) => {
    const errors = {};
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required'
      }
    });
    return errors;
  },
})(UserForm);
