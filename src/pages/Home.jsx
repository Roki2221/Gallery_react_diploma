import React from 'react';
import EventStats from 'components/EventStats/EventStats';
import Artists from 'components/Artists/Artists';
import CurrentExhibitions from 'components/CurrentExhibitions/CurrentExhibitions';
import PlanningVisitSchedule from '../components/PlanningVisitSchedule/PlanningVisitSchedule';
import BlogHome from 'components/BlogHome/BlogHome';
function Home() {
  return (
    <div>
      <EventStats></EventStats>
      <Artists></Artists>
      <CurrentExhibitions></CurrentExhibitions>
      <PlanningVisitSchedule></PlanningVisitSchedule>
      <BlogHome></BlogHome>
    </div>
  );
}

export default Home;
