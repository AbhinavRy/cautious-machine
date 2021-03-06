import React, {useState, useEffect} from 'react';
import '../styles.scss';

const Graph = () => {
    const [state, setState] = useState({result:[]});
    useEffect(() => {
      myCourses();
    }, []);
  
    const myCourses = () => {fetch("http://localhost:5000/api/graph")
      .then(res => res.json())
      .then(data => {
        setState({result:data});
      })
    }

    return(
        <div className="card inline">
            <div className="card-header"><p className="card-header-title">GRAPH</p></div>
            <div className="card-content"><div className="content">
                {state.result.map(item => {
                    return (<div>
                        <p className="is-size-5">{item.name}</p>
                        <img src={item.link} alt={item.name} />
                    </div>)
                })}
            </div></div>
        </div>
    );
};

export default Graph;