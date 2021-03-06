import React, {useState, useEffect} from 'react';
import '../styles.scss';

const MyCourses = () => {
    const [state, setState] = useState({result:[]});
    useEffect(() => {
      myCourses();
    }, []);
  
    const myCourses = () => {fetch("http://localhost:5000/api/courses")
      .then(res => res.json())
      .then(data => {
        setState({result:data});
      })
    }

    return(
        <div class="card inline">
            <div className="card-header"><p className="card-header-title">MY COURSES</p></div>
            <div className="card-content"><div className="content">
            <div className="columns">
              <div className="column is-half is-size-4">Subject</div>
              <div className="column is-half is-size-4">No. Of Lessons</div>
              </div>
                {state.result.map(item => {
                    return (<div className="columns">
                      <div className="column is-half">{item.subject}</div>
                      <div className="column is-half">{item.noOfLesson}</div>
                    </div>)
                })}
            </div></div>
        </div>
    );
};

export default MyCourses;