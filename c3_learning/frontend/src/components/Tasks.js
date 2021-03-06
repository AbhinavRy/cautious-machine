import React, {useState, useEffect} from 'react';
import '../styles.scss';

const Tasks = () => {
    const [task, setTask] = useState([]);
    useEffect(() => {
      myCourses();
    }, []);
  
    const myCourses = () => {fetch("http://localhost:5000/api/tasks")
      .then(res => res.json())
      .then(data => {
        setTask(data);
      })
    }

    return(
        <div className="card inline">
            <div className="card-header"><p className="card-header-title">TASK TO DO</p></div>
            <div className="card-content"><div className="content">
                {task.map(item => {
                    return (<p>{item}</p>
                    )
                })}
            </div></div>
        </div>
    );
};

export default Tasks;