import React, {useEffect, useState} from 'react';
import Card from './components/Card';
import Menu from './components/Menu';
import axios from 'axios';
import UpcomingLessons from './components/UpcomingLessons';
import './styles.css';

const App = () => {
  const tabs = ['UPCOMING LESSONS', 'TASK TO DO', 'LEADERBOARD', 'MY COURSES', 'HOMEWORK PROGRESS', 'GRAPH'];
  const [state, setState] = useState({subject:'',noOfLesson:''});
  var courses = [];
  useEffect(() => {
    myCourses();
  }, []);

  const myCourses = () => {fetch("http://localhost:5000/api/courses")
    .then(res => res.json())
    .then(data => setState(data))
  }
  console.log(state);

  // const myCourses = () => {axios
  //   .get("http://localhost:5000/api/courses")
  //   .then(res => res.data.forEach(element => {
  //     courses.push(element)
  //   }))
  //   .catch(error => console.error(`Error ${error}`));
  // }
  // console.log(courses);
  return (
    <>
      <div className="navbar-menu">
        <a className="navbar-item"><img src="" alt="LOGO" width="112" height="28" /></a>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-white">Log in</a>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content columns is-fullheight">
      <aside className="column is-2  is-fullheight section ">
        <ul className="menu-list inline">
          <li><a>HOME</a></li>
          <li><a className="is-active">DASHBOARD</a></li>
          <li><a>MY COURSES</a></li>
          <li><a>ACHIEVENMENTS</a></li>
          <li><a>FORUM</a></li>
        </ul>
      
      </aside>
      <div class="container column is-10">
    <div class="section">
    <div>
    </div>
      {
        tabs.map((text) => (
          <Card name={text}/>
        ))
      }
    </div>
    </div>
  </div>
    </>
  );
};

export default App;
