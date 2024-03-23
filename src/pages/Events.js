import React from 'react';
import "../styles/Events.css"

const Events = () => {
  return (
    <div>
      <h1 id='events-title' className='display-4'>Events Page</h1>
      <p>Check out our upcoming events!</p>
      <iframe title="Events Calendar" src="https://calendar.google.com/calendar/embed?src=stcs.careforcreation%40gmail.com&ctz=America%2FChicago" width="800" height="600" frameborder="0" scrolling="no"></iframe>
    </div>
  );
};

export default Events;
