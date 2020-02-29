import React, { Component } from "react";
import { RichTextEditor, Breadcrumb } from "matx";

class EditorForm extends Component {
  state = {
    content: `<h1>Matx | Matx Pro Admin Template</h1><p><a href="http://matx-react.ui-lib.com/" target="_blank"><strong>Matx</strong></a></p><p><br></p><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>`
  };

  handleContentChange = contentHtml => {
    this.setState({
      content: contentHtml
    });
  };

  render() {
    return (
      <div className="m-sm-30">
        <div className="mb-sm-30">
          <Breadcrumb
            routeSegments={[
              { name: "Forms", path: "/forms" },
              { name: "Editor" }
            ]}
          />
        </div>
        <RichTextEditor
          content={this.state.content}
          handleContentChange={this.handleContentChange}
          placeholder="insert text here..."
        />
      </div>
    );
  }
}

export default EditorForm;
