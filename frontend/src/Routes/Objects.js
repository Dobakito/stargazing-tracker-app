import { useSelector } from 'react-redux';
import { Card, Segment, Header } from 'semantic-ui-react';
import MCard from '../Component/MCard';
import Nav from '../Component/Nav';

const Objects = () => {
  // const dispatch = useDispatch();
  const messiers = useSelector(state => state.messierReducer.messiers);

  return (
    <>
      <Nav />
      <Segment textAlign='center' inverted>
        <Header as='h2'>View all of the Messier Objects</Header>
      </Segment>
      <div className='Messiers'>
        <Card.Group itemsPerRow={4}>
          {messiers.map(messier => (
            <MCard key={messier.id} messier={messier} />
          ))}
        </Card.Group>
      </div>
    </>
  );
};

export default Objects;
