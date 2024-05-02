import React from 'react';
import EventStats from 'components/EventStats/EventStats';
import Artists from 'components/Artists/Artists';
import CurrentExhibitions from 'components/CurrentExhibitions/CurrentExhibitions';
function Home() {
  return (
    <div>
      <EventStats></EventStats>
      <Artists></Artists>
      <CurrentExhibitions></CurrentExhibitions>
    </div>
  );
}

export default Home;
