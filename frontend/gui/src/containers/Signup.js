import React from 'react';
import {
  Button,
  Form,
  Input,
  Select,
  AutoComplete,
} from 'antd';
import * as actions from '../store/actions/auth';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
// eslint-disable-next-line
const { Option } = Select; 
// eslint-disable-next-line
const AutoCompleteOption = AutoComplete.Option;


class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.onAuth(values.userName,
          values.email,
          values.password,
          values.confirm)
        console.log('Received values of form: ', values);
      }
      this.props.history.push('/');
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  
  render() {
    const { getFieldDecorator } = this.props.form;
   

  
   
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item >
          User Name: 
          {getFieldDecorator('userName', {
            rules: [
              {
                type: 'userName',
                message: 'not valid!!',
              },
              {
                required: true,
                message: 'Please enter your username',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item >
          Email :
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item>
          Password : 
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item>
          COnfirm Password : 
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        
        <Form.Item>
          <Button type="primary" htmlType="submit" style ={{marginRight : '10px'}}>
            Signup
          </Button>
            Or 
            <NavLink style={{marginRight: '10px'}} to="/login/"> login
            </NavLink>
        </Form.Item>


       
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
const mapStateToProps = (state) =>{
  return {
    loading: state.loading,
    error:state.error
  }
}

const mapDispatchToProps = (dispatch) => {
return {
  onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
}
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedRegistrationForm);