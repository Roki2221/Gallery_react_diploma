import React from 'react';
import CSS from './WhyPeopleChoose.module.css';
function WhyPeopleChoose() {
  return (
    <div className={CSS.number_container}>
      <h2>Why People Choose Us</h2>
      <div className={CSS.number_stats}>
        <div>
          <span className={CSS.stats_number}>6</span>
          <span className={CSS.stats_text}>Exhibitions Monthly</span>
        </div>
        <div>
          <span className={CSS.stats_number}>124</span>
          <span className={CSS.stats_text}>Events a Year</span>
        </div>
        <div>
          <span className={CSS.stats_number}>12</span>
          <span className={CSS.stats_text}>Events a Year</span>
        </div>
        <div>
          <span className={CSS.stats_number}>9999</span>
          <span className={CSS.stats_text}>Yearly Visitors</span>
        </div>
      </div>
    </div>
  );
}
export default WhyPeopleChoose;
