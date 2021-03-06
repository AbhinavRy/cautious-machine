import React, {useEffect, useState} from 'react';
import './styles.scss';
import UpcomingLessons from './components/UpcomingLessons';
import Tasks from './components/Tasks';
import Leaderboard from './components/Leaderboard';
import MyCourses from './components/MyCourses';
import Homework from './components/Homework';
import Graph from './components/Graph';

const App = () => {
  const tabs = ['HOME', 'DASHBOARD', 'MY COURSES', 'ACHIEVEMENTS', 'FORUM'];

  return (
    <>
      <div className="navbar-menu behind">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <h4>John Doe</h4>
              <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg" 
                alt="John Doe Image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="main-content columns is-fullheight">
      <aside className="column is-2  is-fullheight section ">
        <ul className="menu-list inline">
          <li className="mb-6"><img src='' alt='LOGO' /></li>
          {
            tabs.map(text => {
              return (<div>{text === 'DASHBOARD'?
                <li><a className='is-active'>{text}</a></li>
                :<li><a>{text}</a></li>
              }
              </div>)
            })
          }
        </ul>
      
      </aside>
      <div className="container column is-10">
    <div className="section">
      <UpcomingLessons />
      <Tasks />
      <Leaderboard />
      <MyCourses />
      <Homework />
      <Graph />
    </div>
    </div>
  </div>
    </>
  );
};

export default App;
