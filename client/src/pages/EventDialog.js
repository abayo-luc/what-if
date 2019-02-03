import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import AddButton from "../components/AddButton";
import { Link } from "react-router-dom";
const styles = theme => ({
  appBar: {
    position: "relative",
    backgroundColor: "#343a40"
  },
  flex: {
    flex: 1
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
class EventDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      event: {
        title: "",
        organizer: "",
        location: "",
        date: "",
        description: ""
      }
    };
  }

  _handleOnChange = (e, key) => {
    this.setState({
      event: {
        ...this.state.event,
        [key]: e.target.value
      }
    });
  };
  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };
  handleClose = () => {
    this.setState({
      open: false
    });
  };
  render() {
    return (
      <div>
        <AddButton onClick={this.handleClickOpen} />
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={this.props.classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                onClick={this.handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </IconButton>
              <Typography
                variant="h6"
                color="inherit"
                className={this.props.classes.flex}
              >
                What-If Events
              </Typography>
              <Button color="inherit" onClick={this._handleSubmit}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <div className="event-form">
            <section class="contact py-5" id="contact">
              <div class="row contact-grids">
                <div class="col-lg-7 mt-lg-0 mt-5 contact-right">
                  <label>Title</label>
                  <input
                    type="text"
                    onfocus="this.value = '';"
                    onblur="if (this.value == '') {this.value = 'Name';}"
                    required=""
                    value={this.state.event.title}
                    onChange={e => this._handleOnChange(e, "title")}
                  />
                  <div class="clearfix" />

                  <label>Organizer</label>
                  <input
                    type="text"
                    placeholder="Silas Gasasira"
                    onfocus="this.value = '';"
                    onblur="if (this.value == '') {this.value = 'Email';}"
                    required=""
                    value={this.state.event.organizer}
                    onChange={e => this._handleOnChange(e, "organizer")}
                  />
                  <div class="clearfix" />
                  <label>Location</label>
                  <input
                    type="text"
                    placeholder="KG 11 Av 15"
                    onfocus="this.value = '';"
                    onblur="if (this.value == '') {this.value = 'Phone';}"
                    required=""
                    value={this.state.event.location}
                    onChange={e => this._handleOnChange(e, "location")}
                  />
                  <div class="clearfix" />
                  <label>Date</label>
                  <input
                    type="date"
                    onfocus="this.value = '';"
                    onblur="if (this.value == '') {this.value = 'Phone';}"
                    required=""
                    value={this.state.event.date}
                    onChange={e => this._handleOnChange(e, "date")}
                  />
                  <div class="clearfix" />
                  <label>Description</label>
                  <textarea
                    placeholder="Message"
                    required=""
                    value={this.state.event.description}
                    onChange={e => this._handleOnChange(e, "description")}
                  >
                    Message...
                  </textarea>
                  <input type="submit" onClick={() => this._handleSubmit()} />
                </div>
              </div>
            </section>
          </div>
        </Dialog>
      </div>
    );
  }
  _handleSubmit = () => {
    const { event } = this.state;
    this.handleClose();
  };
}

export default withStyles(styles)(EventDialog);
