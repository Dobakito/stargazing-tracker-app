import { useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';
import MCard from '../Component/MCard';
import Nav from '../Component/Nav';

const Objects = () => {
  // const dispatch = useDispatch();
  const messiers = useSelector(state => state.messiers);

  return (
    <>
      <Nav />
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
