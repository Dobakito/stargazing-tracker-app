import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import MCard from '../Component/MCard';
import Nav from '../Component/Nav';

class Objects extends Component {
  render() {
    const messiers = this.props;
    return (
      <div className='Objects'>
        <Nav />
        <Card.Group itemsPerRow={4}>
          {messiers.map(messier => (
            <MCard messier={messier} />
          ))}
        </Card.Group>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messiers: state.messiers,
});

export default connect(mapStateToProps)(Objects);
