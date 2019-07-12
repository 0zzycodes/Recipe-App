import React, { Component } from 'react';
import Form from './Form';

import '../Main.css';
class Showcase extends Component {
  render() {
    const { Submit, Change } = this.props;
    return (
      <div className="Showcase">
        <div className="Overlay">
          <div className="ShowcaseItems">
            <Form Change={Change} Submit={Submit} />
          </div>
        </div>
      </div>
    );
  }
}
export default Showcase;
