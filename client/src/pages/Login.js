import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isSubmitting: false,
      redirect: false,
      errors: {
        message: null
      }
    };
  }

  _onChange = (e, key) => {
    this.setState({
      [key]: e.target.value,
      errors: {
        message: null
      }
    });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/blog" />;
    }
    return (
      <div className="login-pg">
        <section className="contact" id="contact">
          <div className="row contact-grids">
            <div className="col-lg-5 mt-lg-0 mt-5 contact-right">
              <p style={styles.errors}>{this.state.errors.message}</p>
              <br />
              <label>Email</label>
              <input
                type="Email"
                onblur="if (this.value == '') {this.value = 'Name';}"
                required={true}
                onChange={e => this._onChange(e, "email")}
                value={this.state.email}
              />
              <div className="clearfix" />
              <label>Password</label>
              <input
                type="password"
                onfocus="this.value = '';"
                onblur="if (this.value == '') {this.value = 'Email';}"
                required={true}
                onChange={e => this._onChange(e, "password")}
                value={this.state.password}
              />
              <div className="clearfix" />
              <div className="clearfix" />
              <input
                type="submit"
                value="Submit"
                onClick={() => this._onSubmit()}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
  _onSubmit = () => {
    this.setState({
      errors: {
        message: null
      }
    });
    const { email, password } = this.state;
    console.log(email, password);
    if (!email || !password) {
      alert("Email and Password required");
      return;
    }
    axios
      .post("/api/v1/login", {
        email,
        password
      })
      .then(async response => {
        const { user, token } = response.data;
        await localStorage.setItem("user", JSON.stringify(user));
        await localStorage.setItem("token", JSON.stringify(token));
        this.setState({
          redirect: true
        });
      })
      .catch(err => {
        const {
          data: { message }
        } = err.response;
        this.setState({
          errors: {
            message
          }
        });
      });
  };
}

const styles = {
  errors: {
    color: "red",
    textAlign: "center"
  }
};
