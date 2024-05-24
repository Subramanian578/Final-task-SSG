import React, { useState } from 'react';
import './Bookc.css';

function Neww() {
  const [level, setLevel] = useState('');
  const [slot, setSlot] = useState('');
  const [venue, setVenue] = useState('');
  const [tasks, setTasks] = useState([]);
  const [taskCounter, setTaskCounter] = useState(1);
  const [showAssignmentBox, setShowAssignmentBox] = useState(false);

  const handleDisplay = () => {
    setShowAssignmentBox(true);
  };

  const cancelBooking = () => {
    setShowAssignmentBox(false);
    setLevel('');
    setSlot('');
    setVenue('');
  };

  const handleTaskSubmission = (e) => {
    e.preventDefault();
    const newTask = {
      id: taskCounter,
      level,
      slot,
      venue
    };
    setTasks([...tasks, newTask]);
    setTaskCounter(taskCounter + 1);
    setShowAssignmentBox(false);
    setLevel('');
    setSlot('');
    setVenue('');
  };

  return (
    <div>
      <button onClick={handleDisplay}>Display</button>
      {showAssignmentBox && (
        <AssignmentBox
          level={level}
          setLevel={setLevel}
          slot={slot}
          setSlot={setSlot}
          venue={venue}
          setVenue={setVenue}
          onCancel={handleDisplay}
          onSubmit={handleTaskSubmission}
        />
      )}
      <TaskList tasks={tasks} />
    </div>
  );
}

function AssignmentBox({ level, setLevel, slot, setSlot, venue, setVenue, onCancel, onSubmit }) {
  return (
    <div className="assign">
      <div className="black"></div>
                <div className="assign">
                    <h2>Slot selection</h2>
                    <div className='optionflex'></div>
      <form onSubmit={onSubmit}>
        <p  id="roll">Level</p>
                                        <select className='optionbox' id="level" value={level} onChange={(e) => setLevel(e.target.value)}>
                                            <option>Choose your level</option>
                                            <option value="Level-I">Level-I</option>
                                            <option value="Level-II">Level-II</option>
                                            <option value="Level-III">Level-III</option>
                                        </select>
                                    <p id="nam">Available Slot</p>
                                        <select className='optionbox' id="slot" value={slot} onChange={(e) => setSlot(e.target.value)}>
                                            <option>Choose option</option>
                                            <option value="15.04.2024 (9 am to 10 am)">15.04.2024 (9 am to 10 am)</option>
                                            <option value="15.04.2024 (10 am to 11 am)">15.04.2024 (10 am to 11 am)</option>
                                            <option value="15.04.2024 (1.30 pm to 2.30 pm)">15.04.2024 (1.30 pm to 2.30 pm)</option>
                                            <option value="15.04.2024 (2.45 pm to 3.45 pm)">15.04.2024 (2.45 pm to 3.45 pm)</option>
                                        </select>
                                    <p id="dis">Available Venue</p>
                                        <select className='optionbox' id="venue" value={venue} onChange={(e) => setVenue(e.target.value)}>
                                            <option>Choose option</option>
                                            <option value="CSE Lab 1">CSE Lab 1</option>
                                            <option value="CSE Lab 2">CSE Lab 2</option>
                                            <option value="IT Lab 1">IT Lab 1</option>
                                            <option value="IT Lab 2">IT Lab 2</option>
                                        </select>
                                        
        <button type="submit">Submit</button> 
        <button onClick={onCancel}>Cancel</button>
      </form>
    </div>
    </div>
  );
}

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => (
          // <li key={task.id}>{task.level}, {task.slot}, {task.venue}</li>
          <aside>
          <div class="Task">
              <div class="subtask">
                  <ul class="ul1" >
                      <li  ><b>S.no - {task.id}</b></li>
                      
                  </ul>
                  <ul class="ul2">
                      <li ><b>Level - {task.level}</b></li>
                      
                  </ul>
                  <ul class="ul3">
                      <li ><b>Slot - {task.slot}</b></li>
                      
                  </ul>
                  <ul class="ul4">
                      <li  ><b>Venue - {task.venue}</b></li>
                      
                  </ul>
                  
              </div> 
          </div></aside> 
        ))}
      </ul>
    </div>
  );
}

export default Neww;
