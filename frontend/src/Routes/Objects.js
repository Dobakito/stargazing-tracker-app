import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';
import { getAllMessiers } from '../Actions/messiers';
import MCard from '../Component/MCard';
import Nav from '../Component/Nav';

class Objects extends Component {
  handleClick = event => event.preventDefault();

  componentDidMount() {
    this.props.dispatch(getAllMessiers);
  }

  render() {
    const messiers = this.props;
    return (
      <div className='Objects'>
        <Nav />
        <Card.Group itemsPerRow={4}>
          {messiers.map(messier => (
            <MCard onclick={this.handleClick} messier={messier} />
          ))}
        </Card.Group>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messiers: state.messiers,
});

const mapDispatchToProps = dispatch => ({
  getAllMessiers: () => dispatch(getAllMessiers),
});

export default connect(mapStateToProps, mapDispatchToProps)(Objects);
