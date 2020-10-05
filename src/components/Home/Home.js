import React, { useContext, useEffect } from 'react';
import { CardDeck, Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import Events from '../Events/Events';
import Header from '../Header/Header';
import SearchEvent from '../SearchEvent/SearchEvent';
import './Home.css';

const Home = () => {
  const { allEvents, setAllEvents } = useContext(UserContext);

  // Set list of 20 events for homepage display
  const events20 = allEvents.slice(0, 20);

  useEffect(() => {
    fetch('http://localhost:4000/events')
      .then(res => res.json())
      .then(data => setAllEvents(data))
  }, [])


  return (
    <Container>
      <Header />
      <SearchEvent />
      <CardDeck className="card-deck">
        {
          events20.map(event => {
            return (
              <Events key={event._id} event={event}> </Events>
            )
          })
        }
      </CardDeck>
    </Container>
  );
};

export default Home;