import React, {useState, useEffect} from 'react';
import '../styles.scss';

const Leaderboard = () => {
    const [state, setState] = useState({result:[]});
    useEffect(() => {
      myCourses();
    }, []);
  
    const myCourses = () => {fetch("http://localhost:5000/api/leaderboard")
      .then(res => res.json())
      .then(data => {
        setState({result:data});
      })
    }

    return(
        <div className="card inline">
            <div className="card-header"><p className="card-header-title">LEADERBOARD</p></div>
            <div className="card-content"><div className="content">
                {state.result.map(item => {
                    return (<div className="columns">
                      <div className="column is-half">{item.name}</div>
                      <div className="column is-half">{item.score}</div>
                    </div>)
                })}
            </div></div>
        </div>
    );
};

export default Leaderboard;