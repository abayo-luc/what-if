import React, { Component } from "react";
import RichTextEditor from "react-rte";
import BlogBanner from "../components/Blog/Banner";
import UnderBanner from "../components/Blog/UnderBanner";
import { SaveButton } from "../components/SaveButton";
import { TextInput } from "../components/TextInput";
import axios from "axios";
export default class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: RichTextEditor.createEmptyValue(),
      title: "",
      cover: ""
    };
  }

  onChange = value => {
    this.setState({ value });
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(value.toString("html"));
    }
  };
  onChangeTitle = (e, key) => {
    this.setState({
      [key]: e.target.value
    });
  };
  render() {
    return (
      <div className="new-post">
        <BlogBanner />
        <UnderBanner path="New Post" />
        <div className="editor">
          <TextInput
            placeholder="Title"
            onChange={e => this.onChangeTitle(e, "title")}
          />
          <TextInput
            placeholder="https://res.cloudinary.com/dghepsznx/image/upload/v1549123382/WhatIf/3.jpg"
            onChange={e => this.onChangeTitle(e, "cover")}
          />
          <RichTextEditor value={this.state.value} onChange={this.onChange} />
          <SaveButton onClick={() => this._savePost()} title="Save" />
        </div>
      </div>
    );
  }

  _savePost = () => {
    const post = {
      title: this.state.title,
      content: this.state.value.toString("html"),
      author: 2,
      cover: this.state.cover
    };
    axios
      .post("/api/v1/posts", { ...post })
      .then(response => {
        console.log(response);
        alert("done");
      })
      .catch(error => {
        console.log(error);
      });
  };
}
