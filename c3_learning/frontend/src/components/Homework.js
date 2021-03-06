import React, {useState, useEffect} from 'react';
import '../styles.scss';

const Homework = () => {
    const [state, setState] = useState({result:[]});
    useEffect(() => {
      myCourses();
    }, []);
  
    const myCourses = () => {fetch("http://localhost:5000/api/homework")
      .then(res => res.json())
      .then(data => {
        setState({result:data});
      })
    }

    return(
        <div className="card inline">
            <div className="card-header"><p className="card-header-title">HOMEWORK</p></div>
            <div className="card-content"><div className="content">
            <div className="columns">
              <div className="column is-half is-size-4">Subject</div>
              <div className="column is-half is-size-4">Progress</div>
            </div>
                {state.result.map(item => {
                    return (<div className="columns">
                      <div className="column is-half">{item.subject}</div>
                      <div className="column is-half">{item.progress}</div>
                    </div>)
                })}
            </div></div>
        </div>
    );
};

export default Homework;