import React, { Component } from "react";
import RichTextEditor from "react-rte";
import BlogBanner from "../components/Blog/Banner";
import UnderBanner from "../components/Blog/UnderBanner";

export default class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: RichTextEditor.createEmptyValue()
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

  render() {
    return (
      <div className="new-post">
        <BlogBanner />
        <UnderBanner path="New Post" />
        <div className="editor">
          <RichTextEditor value={this.state.value} onChange={this.onChange} />
        </div>
      </div>
    );
  }
}
