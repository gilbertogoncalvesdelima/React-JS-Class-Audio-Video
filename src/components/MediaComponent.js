import React, { Component } from "react";
import { ReactVideo } from "reactjs-media";

class MediaComponent extends Component {
  render() {
    return (
      <div className = "Container">
        
        <h1>Video de apresentação</h1>
        
        <ReactVideo
          src="https://res.cloudinary.com/drimg72d1/video/upload/v1633700905/mar.mp4"
          poster="/poster.png"
          primaryColor="red"
          autoPlay
        />
      </div>
    );
  }
}

export default MediaComponent;