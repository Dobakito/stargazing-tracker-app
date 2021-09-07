import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import MCard from '../Component/MCard';

class Objects extends Component {
  handleClick = event => event.preventDefault();

  render() {
    const { messiers } = this.props;
    return (
      <div className='Messiers'>
        <Card.Group itemsPerRow={4}>
          {messiers.map(messier => (
            <MCard
              key={messier.id}
              onclick={this.handleClick}
              messier={messier}
            />
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
