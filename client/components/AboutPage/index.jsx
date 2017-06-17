import React from 'react';
import CardComponent from '../CardComponent';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="card-panel z-depth-8 aboutcard" id="aboutcard">
        <ul>
          <h5> - Create, edit, and delete documents</h5>
          <h5> - Restrict access to your documents</h5>
          <CardComponent />
          <CardComponent />
          <h5> - Access Documents of persons in the same role as you</h5>
        </ul>
      </div>
    );
  }
}

export default AboutPage;
