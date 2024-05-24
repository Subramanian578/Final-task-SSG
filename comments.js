// import Leftside from '../Topside/Leftside';
// import './Bookc.css'
// import React, { useState } from 'react';
// import axios from 'axios';

// function Bpage() {
//   // const [level, setLevel] = useState('');
//   // const [slot, setSlot] = useState('');
//   // const [venue, setVenue] = useState('');
//   // const [tasks, setTasks] = useState([]);
//   // const [taskCounter, setTaskCounter] = useState(1);
//   const [showAssignmentBox, setShowAssignmentBox] = useState(false);
//   const [showBookSlotButton, setShowBookSlotButton] = useState(true);

//   const handleDisplay = () => {
//       setShowAssignmentBox(true);
//   };

//   // const cancelBooking = () => {
//   //     setShowAssignmentBox(false);
//   //     setLevel('');
//   //     setSlot('');
//   //     setVenue('');
//   // };

//   // const handleTaskSubmission = (e) => {
//   //     e.preventDefault();
//   //     setShowBookSlotButton(false);
//   //     const newTask = {
//   //         id: taskCounter,
//   //         level,
//   //         slot,
//   //         venue
//   //     };
//   //     setTasks([...tasks, newTask]);
//   //     setTaskCounter(taskCounter + 1);
//   //     setShowAssignmentBox(false);
//   //     setLevel('');
//   //     setSlot('');
//   //     setVenue('');
//   // };


//   return (
//       <div>
//           <Leftside />
//           <div class="coursemain">
//               <div className='flexrow'>
//                   <div className='videoback'>
//                       <div ><h3>COURSE MATERIAL</h3></div>
//                       <iframe class="youtube" src="https://www.youtube.com/embed/x3dQsMkJgDg?si=NnQygxNyBdhfquf_"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>   
//                   </div>
//                   <div className='bookflex'>
//                       <div className='flexcon'>
//                           <div class="pc">
//                               <a><div class="py" ></div></a>
//                               <p className='cp'>C PROGRAMMING</p>
//                               <div className='assdetail'>
//                                   <div ><h3>ASSESSMENT DETAILS</h3></div>
//                                    {showBookSlotButton && <a onClick={handleDisplay}><button className='bookbtn'>BOOK SLOT</button></a>}
//                                   {showAssignmentBox && (
//                                       <AssignmentBox
//                                           // level={level}
//                                           // setLevel={setLevel}
//                                           // slot={slot}
//                                           // setSlot={setSlot}
//                                           // venue={venue}
//                                           // setVenue={setVenue}
//                                           // onCancel={cancelBooking}
//                                           // onSubmit={handleTaskSubmission}
//                                       />
//                                   )} 
//                                   {/* <TaskList tasks={tasks} /> */}
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//               <div className='flexrow'>
//                   <div className='topicback'>
//                       <div ><h3>COURSE TOPICS</h3></div>
//                       <div className='btnflex'>
//                           <a><button className='coursebtn'>TOPIC NUMBER - 1</button></a>
//                           <a><button className='coursebtn'>TOPIC NUMBER - 2</button></a>
//                           <a><button className='coursebtn'>TOPIC NUMBER - 3</button></a>
//                           <a><button className='coursebtn'>TOPIC NUMBER - 4</button></a>
//                           <a><button className='coursebtn'>TOPIC NUMBER - 5</button></a>
//                           <a><button className='coursebtn'>TOPIC NUMBER - 6</button></a>
//                           <a><button className='coursebtn'>TOPIC NUMBER - 7</button></a>
//                           <a><button className='coursebtn'>TOPIC NUMBER - 8</button></a>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </div>
//   );
// }

// function AssignmentBox() {

//   const [values,setValues] = useState({
//   })
  
//   const handleChange= (event) =>{
      
//       setValues({...values,[event.target.name]:[event.target.value]})
//   }

//   const handleSubmit = (event) =>{
//       event.preventDefault();
//       axios.post('http://localhost:3031/form',values)
//       .then(res => console.log("Registered Successfully"))
      
 
//         }
//     return (
//       <div>
//         <div className="black"></div>
//         <div className="assign">
//             <h2>Slot selection</h2>
//               <div className='optionflex'></div>
//               <form onSubmit={handleSubmit}>
//                   <p  id="roll">Level</p>
//                   <select className='optionbox' name="Level" id="username" onChange={handleChange} required>
//                       <option value="">Choose your level</option>
//                       <option value="Level-I">Level-I</option>
//                       <option value="Level-II">Level-II</option>
//                       <option value="Level-III">Level-III</option>
//                     </select>
//                   <p id="nam">Available Slot</p>
//                   <select className='optionbox' name="Venue" id="email" onChange={handleChange} required>
//                       <option value="">Choose option</option>
//                       <option value="15.04.2024 (9 am to 10 am)">15.04.2024 (9 am to 10 am)</option>
//                       <option value="15.04.2024 (10 am to 11 am)">15.04.2024 (10 am to 11 am)</option>
//                       <option value="15.04.2024 (1.30 pm to 2.30 pm)">15.04.2024 (1.30 pm to 2.30 pm)</option>
//                       <option value="15.04.2024 (2.45 pm to 3.45 pm)">15.04.2024 (2.45 pm to 3.45 pm)</option>
//                     </select>
//                   <p id="dis">Available Venue</p>
//                     <select className='optionbox' id="pass" name="Timing" onChange={handleChange} required>
//                       <option value="">Choose option</option>
//                       <option value="CSE Lab 1">CSE Lab 1</option>
//                       <option value="CSE Lab 2">CSE Lab 2</option>
//                       <option value="IT Lab 1">IT Lab 1</option>
//                       <option value="IT Lab 2">IT Lab 2</option>
//                     </select>
//                     <button type="submit">Submit</button> 
//                     {/* <button onClick={onCancel}>Cancel</button> */}
//                 </form>
//       </div>
//       </div>
//     );
//   }
  
//   function TaskList({ tasks }) {
//     return (
//       <div className="task-list">
//         <ul>
//           {tasks.map((task) => (
//             <aside>
//             <div class="Task">
//                 <div class="subtask">
//                     <ul class="ul1" >
//                         <li  ><b>S.no - {task.id}</b></li>
                        
//                     </ul>
//                     <ul class="ul2">
//                         <li ><b>Level - {task.level}</b></li>
                        
//                     </ul>
//                     <ul class="ul3">
//                         <li ><b>Slot - {task.slot}</b></li>
                        
//                     </ul>
//                     <ul class="ul4">
//                         <li  ><b>Venue - {task.venue}</b></li>
                        
//                     </ul>
                    
//                 </div> 
//             </div></aside> 
//           ))}
//         </ul>
//       </div>
//     );
//   }

// export default Bpage;


// import Leftside from '../Topside/Leftside';
// import './Bookc.css'
// import { useNavigate } from "react-router-dom";
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useLocation } from "react-router-dom";

// function Bpage() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const user = location.state?.userData;
//   console.log(user);

//   const [showAssignmentBox, setShowAssignmentBox] = useState(false);
//   const [showBookSlotButton, setShowBookSlotButton] = useState(true);

//   const handleDisplay = () => {
//     setShowAssignmentBox(true);
//   };

//   return (
//     <div>
//       <Leftside />
//       <div className="coursemain">
//         <h2 className='head'>Welcome back {user?.username}</h2>
//         <div className='flexrow'>
//           <div className='videoback'>
//             <div><h3>COURSE MATERIAL</h3></div>
//             <iframe className="youtube" src="https://www.youtube.com/embed/x3dQsMkJgDg?si=NnQygxNyBdhfquf_" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//           </div>
//           <div className='bookflex'>
//             <div className='flexcon'>
//               <div className="pc">
//                 <a><div className="c"><p className='program'>C PROGRAMMING</p></div></a>
                
//                 <div className='assdetail'>
//                   <div><h3>ASSESSMENT DETAILS</h3></div>
//                   {showBookSlotButton && <button className='bookbtn' onClick={handleDisplay}>BOOK SLOT</button>}
//                   {showAssignmentBox && <AssignmentBox />}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='flexrow'>
//           <div className='topicback'>
//             <div><h3>COURSE TOPICS</h3></div>
//             <div className='btnflex'>
//               <button className='coursebtn'>TOPIC NUMBER - 1</button>
//               <button className='coursebtn'>TOPIC NUMBER - 2</button>
//               <button className='coursebtn'>TOPIC NUMBER - 3</button>
//               <button className='coursebtn'>TOPIC NUMBER - 4</button>
//               <button className='coursebtn'>TOPIC NUMBER - 5</button>
//               <button className='coursebtn'>TOPIC NUMBER - 6</button>
//               <button className='coursebtn'>TOPIC NUMBER - 7</button>
//               <button className='coursebtn'>TOPIC NUMBER - 8</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function AssignmentBox() {
//   const location = useLocation();
//   const user = location.state?.userData;
//   console.log(user);

//   const [formData, setFormData] = useState({
//     level: '',
//     slot: '',
//     venue: ''
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const userId = user?.id; // Use the actual user ID
//     axios.post('http://localhost:3001/updateScores', { id: userId, ...formData })
//       .then(response => {
//         console.log('Success:', response.data);
//         // Optionally, handle success (e.g., show a success message)
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div>
//       <div className="black"></div>
//       <div className="assign">
//         <h2>Slot selection</h2>
//         <div className='optionflex'></div>
//         <form onSubmit={handleSubmit}>
//           <p id="roll">Level</p>
//           <select className='optionbox' name="level" onChange={handleInputChange} required>
//             <option value="">Choose your level</option>
//             <option value="Level-I">Level-I</option>
//             <option value="Level-II">Level-II</option>
//             <option value="Level-III">Level-III</option>
//           </select>
//           <p id="nam">Available Slot</p>
//           <select className='optionbox' name="slot" onChange={handleInputChange} required>
//             <option value="">Choose option</option>
//             <option value="15.04.2024 (9 am to 10 am)">15.04.2024 (9 am to 10 am)</option>
//             <option value="15.04.2024 (10 am to 11 am)">15.04.2024 (10 am to 11 am)</option>
//             <option value="15.04.2024 (1.30 pm to 2.30 pm)">15.04.2024 (1.30 pm to 2.30 pm)</option>
//             <option value="15.04.2024 (2.45 pm to 3.45 pm)">15.04.2024 (2.45 pm to 3.45 pm)</option>
//           </select>
//           <p id="dis">Available Venue</p>
//           <select className='optionbox' name="venue" onChange={handleInputChange} required>
//             <option value="">Choose option</option>
//             <option value="CSE Lab 1">CSE Lab 1</option>
//             <option value="CSE Lab 2">CSE Lab 2</option>
//             <option value="IT Lab 1">IT Lab 1</option>
//             <option value="IT Lab 2">IT Lab 2</option>
//           </select>
//           <button type="submit">Submit</button> 
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Bpage;



// import Leftside from '../Topside/Leftside';
// import './Bookc.css';
// import { useNavigate } from "react-router-dom";
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useLocation } from "react-router-dom";

// function Bpage() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const user = location.state?.userData;
//   console.log(user);

//   const [showAssignmentBox, setShowAssignmentBox] = useState(false);
//   const [showBookSlotButton, setShowBookSlotButton] = useState(true);

//   const handleDisplay = () => {
//     setShowAssignmentBox(true);
//   };

//   const handleFormSubmit = () => {
//     setShowAssignmentBox(false);
//     setShowBookSlotButton(false);
//   };

//   return (
//     <div>
//       <Leftside />
//       <div className="coursemain">
//         <h3 className='head'>Welcome back {user?.username}</h3>
//         <div className='flexrow'>
//           <div className='videoback'>
//             <div><h3>COURSE MATERIAL</h3></div>
//             <iframe className="youtube" src="https://www.youtube.com/embed/x3dQsMkJgDg?si=NnQygxNyBdhfquf_" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//           </div>
//           <div className='bookflex'>
//             <div className='flexcon'>
//               <div className="pc">
//                 <a><div className="c"><p className='cp'>C PROGRAMMING</p></div></a>
                
//                 <div className='assdetail'>
//                   <div><h3>ASSESSMENT DETAILS</h3></div>
//                   {showBookSlotButton && <button className='bookbtn' onClick={handleDisplay}>BOOK SLOT</button>}
//                   {showAssignmentBox && <AssignmentBox onSubmit={handleFormSubmit} />}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='flexrow'>
//           <div className='topicback'>
//             <div><h3>COURSE TOPICS</h3></div>
//             <div className='btnflex'>
//               <button className='coursebtn'>TOPIC NUMBER - 1</button>
//               <button className='coursebtn'>TOPIC NUMBER - 2</button>
//               <button className='coursebtn'>TOPIC NUMBER - 3</button>
//               <button className='coursebtn'>TOPIC NUMBER - 4</button>
//               <button className='coursebtn'>TOPIC NUMBER - 5</button>
//               <button className='coursebtn'>TOPIC NUMBER - 6</button>
//               <button className='coursebtn'>TOPIC NUMBER - 7</button>
//               <button className='coursebtn'>TOPIC NUMBER - 8</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function AssignmentBox({ onSubmit }) {
//   const location = useLocation();
//   const user = location.state?.userData;
//   console.log(user);

//   const [formData, setFormData] = useState({
//     level: '',
//     slot: '',
//     venue: ''
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const userId = user?.id; // Use the actual user ID
//     axios.post('http://localhost:3001/updateScores', { id: userId, ...formData })
//       .then(response => {
//         console.log('Success:', response.data);
//         onSubmit(); // Call the onSubmit function passed from Bpage
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div>
//       <div className="black"></div>
//       <div className="assign">
//         <h2>Slot selection</h2>
//         <div className='optionflex'></div>
//         <form onSubmit={handleSubmit}>
//           <p id="roll">Level</p>
//           <select className='optionbox' name="level" onChange={handleInputChange} required>
//             <option value="">Choose your level</option>
//             <option value="Level-I">Level-I</option>
//             <option value="Level-II">Level-II</option>
//             <option value="Level-III">Level-III</option>
//           </select>
//           <p id="nam">Available Slot</p>
//           <select className='optionbox' name="slot" onChange={handleInputChange} required>
//             <option value="">Choose option</option>
//             <option value="15.04.2024 (9 am to 10 am)">15.04.2024 (9 am to 10 am)</option>
//             <option value="15.04.2024 (10 am to 11 am)">15.04.2024 (10 am to 11 am)</option>
//             <option value="15.04.2024 (1.30 pm to 2.30 pm)">15.04.2024 (1.30 pm to 2.30 pm)</option>
//             <option value="15.04.2024 (2.45 pm to 3.45 pm)">15.04.2024 (2.45 pm to 3.45 pm)</option>
//           </select>
//           <p id="dis">Available Venue</p>
//           <select className='optionbox' name="venue" onChange={handleInputChange} required>
//             <option value="">Choose option</option>
//             <option value="CSE Lab 1">CSE Lab 1</option>
//             <option value="CSE Lab 2">CSE Lab 2</option>
//             <option value="IT Lab 1">IT Lab 1</option>
//             <option value="IT Lab 2">IT Lab 2</option>
//           </select>
//           <button type="submit">Submit</button> 
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Bpage;










// import Leftside from '../Topside/Leftside';
// import './Bookc.css';
// import { useNavigate } from "react-router-dom";
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useLocation } from "react-router-dom";

// function Bpage() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const user = location.state?.userData;
//   console.log(user);

//   const [showAssignmentBox, setShowAssignmentBox] = useState(false);
//   const [showBookSlotButton, setShowBookSlotButton] = useState(true);
//   const [submittedData, setSubmittedData] = useState(null);

//   const handleDisplay = () => {
//     setShowAssignmentBox(true);
//   };

//   const handleFormSubmit = () => {
//     setShowAssignmentBox(false);
//     setShowBookSlotButton(false);
//     fetchSubmittedData();
//   };

//   const fetchSubmittedData = () => {
//     const userId = user?.id;
//     axios.get(`http://localhost:3001/getSubmission/${userId}`)
//       .then(response => {
//         console.log('Fetched Data:', response.data);
//         setSubmittedData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   };

//   useEffect(() => {
//     if (!showBookSlotButton) {
//       fetchSubmittedData();
//     }
//   }, [showBookSlotButton]);

//   return (
//     <div>
//       <Leftside />
//       <div className="coursemain">
//         <h3 className='head'>Welcome back {user?.username}</h3>
//         <div className='flexrow'>
//           <div className='videoback'>
//             <div><h3>COURSE MATERIAL</h3></div>
//             <iframe className="youtube" src="https://www.youtube.com/embed/x3dQsMkJgDg?si=NnQygxNyBdhfquf_" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//           </div>
//           <div className='bookflex'>
//             <div className='flexcon'>
//               <div className="pc">
//                 <a><div className="c"><p className='cp'>C PROGRAMMING</p></div></a>
                
//                 <div className='assdetail'>
//                   <div><h3>ASSESSMENT DETAILS</h3></div>
//                   <div className='submission-details'>
//                       <h4>Submission Details:</h4>
//                       <p>Level: {user?.level}</p>
//                       <p>Slot: {user?.slot}</p>
//                       <p>Venue: {user?.venue}</p>
//                     </div>
//                   {showBookSlotButton && <button className='bookbtn' onClick={handleDisplay}>BOOK SLOT</button>}
//                   {showAssignmentBox && <AssignmentBox onSubmit={handleFormSubmit} />}
                  
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='flexrow'>
//           <div className='topicback'>
//             <div><h3>COURSE TOPICS</h3></div>
//             <div className='btnflex'>
//               <button className='coursebtn'>TOPIC NUMBER - 1</button>
//               <button className='coursebtn'>TOPIC NUMBER - 2</button>
//               <button className='coursebtn'>TOPIC NUMBER - 3</button>
//               <button className='coursebtn'>TOPIC NUMBER - 4</button>
//               <button className='coursebtn'>TOPIC NUMBER - 5</button>
//               <button className='coursebtn'>TOPIC NUMBER - 6</button>
//               <button className='coursebtn'>TOPIC NUMBER - 7</button>
//               <button className='coursebtn'>TOPIC NUMBER - 8</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function AssignmentBox({ onSubmit }) {
//   const location = useLocation();
//   const user = location.state?.userData;
//   console.log(user);

//   const [formData, setFormData] = useState({
//     level: '',
//     slot: '',
//     venue: ''
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const userId = user?.id; // Use the actual user ID
//     axios.post('http://localhost:3001/updateScores', { id: userId, ...formData })
//       .then(response => {
//         console.log('Success:', response.data);
//         onSubmit(); // Call the onSubmit function passed from Bpage
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div>
//       <div className="black"></div>
//       <div className="assign">
//         <h2>Slot selection</h2>
//         <div className='optionflex'></div>
//         <form onSubmit={handleSubmit}>
//           <p id="roll">Level</p>
//           <select className='optionbox' name="level" onChange={handleInputChange} required>
//             <option value="">Choose your level</option>
//             <option value="Level-I">Level-I</option>
//             <option value="Level-II">Level-II</option>
//             <option value="Level-III">Level-III</option>
//           </select>
//           <p id="nam">Available Slot</p>
//           <select className='optionbox' name="slot" onChange={handleInputChange} required>
//             <option value="">Choose option</option>
//             <option value="15.04.2024 (9 am to 10 am)">15.04.2024 (9 am to 10 am)</option>
//             <option value="15.04.2024 (10 am to 11 am)">15.04.2024 (10 am to 11 am)</option>
//             <option value="15.04.2024 (1.30 pm to 2.30 pm)">15.04.2024 (1.30 pm to 2.30 pm)</option>
//             <option value="15.04.2024 (2.45 pm to 3.45 pm)">15.04.2024 (2.45 pm to 3.45 pm)</option>
//           </select>
//           <p id="dis">Available Venue</p>
//           <select className='optionbox' name="venue" onChange={handleInputChange} required>
//             <option value="">Choose option</option>
//             <option value="CSE Lab 1">CSE Lab 1</option>
//             <option value="CSE Lab 2">CSE Lab 2</option>
//             <option value="IT Lab 1">IT Lab 1</option>
//             <option value="IT Lab 2">IT Lab 2</option>
//           </select>
//           <button type="submit">Submit</button> 
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Bpage;


// import Leftside from '../Topside/Leftside';
// import './Bookc.css';
// import { useNavigate } from "react-router-dom";
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useLocation } from "react-router-dom";

// function Bpage() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const user = location.state?.userData;
//   console.log(user);

//   const [showAssignmentBox, setShowAssignmentBox] = useState(false);
//   const [showBookSlotButton, setShowBookSlotButton] = useState(true);
//   const [submittedData, setSubmittedData] = useState(null);

//   const handleDisplay = () => {
//     setShowAssignmentBox(true);
//   };

//   const handleFormSubmit = (newData) => {
//     setShowAssignmentBox(false);
//     setShowBookSlotButton(false);
//     setSubmittedData(newData);
//   };

//   const fetchSubmittedData = () => {
//     const userId = user?.id;
//     axios.get(`http://localhost:3001/getSubmission/${userId}`)
//       .then(response => {
//         console.log('Fetched Data:', response.data);
//         setSubmittedData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   };

//   useEffect(() => {
//     if (!showBookSlotButton) {
//       fetchSubmittedData();
//     }
//   }, [showBookSlotButton]);

//   return (
//     <div>
//       <Leftside />
//       <div className="coursemain">
//         <h3 className='head'>Welcome back {user?.username}</h3>
//         <div className='flexrow'>
//           <div className='videoback'>
//             <div><h3>COURSE MATERIAL</h3></div>
//             <iframe className="youtube" src="https://www.youtube.com/embed/x3dQsMkJgDg?si=NnQygxNyBdhfquf_" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
//           </div>
//           <div className='bookflex'>
//             <div className='flexcon'>
//               <div className="pc">
//                 <a><div className="c"><p className='cp'>C PROGRAMMING</p></div></a>
                
//                 <div className='assdetail'>
//                   <div><h3>ASSESSMENT DETAILS</h3></div>
//                   <div className='submission-details'>
//                       <h4>Submission Details:</h4>
//                       <p>Level: {submittedData?.level}</p>
//                       <p>Slot: {submittedData?.slot}</p>
//                       <p>Venue: {submittedData?.venue}</p>
//                     </div>
//                   {showBookSlotButton && <button className='bookbtn' onClick={handleDisplay}>BOOK SLOT</button>}
//                   {showAssignmentBox && <AssignmentBox onSubmit={handleFormSubmit} />}
                  
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='flexrow'>
//           <div className='topicback'>
//             <div><h3>COURSE TOPICS</h3></div>
//             <div className='btnflex'>
//               <button className='coursebtn'>TOPIC NUMBER - 1</button>
//               <button className='coursebtn'>TOPIC NUMBER - 2</button>
//               <button className='coursebtn'>TOPIC NUMBER - 3</button>
//               <button className='coursebtn'>TOPIC NUMBER - 4</button>
//               <button className='coursebtn'>TOPIC NUMBER - 5</button>
//               <button className='coursebtn'>TOPIC NUMBER - 6</button>
//               <button className='coursebtn'>TOPIC NUMBER - 7</button>
//               <button className='coursebtn'>TOPIC NUMBER - 8</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// function AssignmentBox({ onSubmit }) {
//   const location = useLocation();
//   const user = location.state?.userData;
//   console.log(user);

//   const [formData, setFormData] = useState({
//     level: '',
//     slot: '',
//     venue: ''
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const userId = user?.id; // Use the actual user ID
//     axios.post('http://localhost:3001/updateScores', { id: userId, ...formData })
//       .then(response => {
//         console.log('Success:', response.data);
//         onSubmit(formData); // Call the onSubmit function passed from Bpage with the new data
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div>
//       <div className="black"></div>
//       <div className="assign">
//         <h2>Slot selection</h2>
//         <div className='optionflex'></div>
//         <form onSubmit={handleSubmit}>
//           <p id="roll">Level</p>
//           <select className='optionbox' name="level" onChange={handleInputChange} required>
//             <option value="">Choose your level</option>
//             <option value="Level-I">Level-I</option>
//             <option value="Level-II">Level-II</option>
//             <option value="Level-III">Level-III</option>
//           </select>
//           <p id="nam">Available Slot</p>
//           <select className='optionbox' name="slot" onChange={handleInputChange} required>
//             <option value="">Choose option</option>
//             <option value="15.04.2024 (9 am to 10 am)">15.04.2024 (9 am to 10 am)</option>
//             <option value="15.04.2024 (10 am to 11 am)">15.04.2024 (10 am to 11 am)</option>
//             <option value="15.04.2024 (1.30 pm to 2.30 pm)">15.04.2024 (1.30 pm to 2.30 pm)</option>
//             <option value="15.04.2024 (2.45 pm to 3.45 pm)">15.04.2024 (2.45 pm to 3.45 pm)</option>
//           </select>
//           <p id="dis">Available Venue</p>
//           <select className='optionbox' name="venue" onChange={handleInputChange} required>
//             <option value="">Choose option</option>
//             <option value="CSE Lab 1">CSE Lab 1</option>
//             <option value="CSE Lab 2">CSE Lab 2</option>
//             <option value="IT Lab 1">IT Lab 1</option>
//             <option value="IT Lab 2">IT Lab 2</option>
//           </select>
//           <button type="submit">Submit</button> 
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Bpage;