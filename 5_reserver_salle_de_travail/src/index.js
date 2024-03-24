// reserver une salle de travail 

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './style.css'

const WorkingRoom = () => {

  const[Reservation, setReservation] = useState([]);


  const[inputFirstName, setinputValue1] = useState('');
  const[inputLastName, setinputValue2] = useState('');
  const[inputEmail, setinputValue3] = useState('');
  const[inputYourId, setinputValue4]  = useState('');
  const[inputTimeSlot, setinputValue5] = useState('');



  const addTask = () => {

    if(inputFirstName.trim() !== '') {

      setReservation([...Reservation, { name: inputFirstName, last_name : inputLastName, email :  inputEmail, id : inputYourId, time_slot : inputTimeSlot}]);
      setinputValue1('');
      setinputValue2('');
      setinputValue3('');
      setinputValue4('');
      setinputValue5('');

    };
  };

  
  const removeReservation = (index) => {

    const newCopyReservation = [...Reservation];
    newCopyReservation.splice(index, 1);
    setReservation(newCopyReservation);

  };


  return(

    <div>
      <h1> Register To Book A Working Room</h1>

      <label for='first_name'>First Name : </label>

      <input
      type='text'
      name='first_name'
      placeholder='Paul'
      value={inputFirstName}
      onChange={(e) => setinputValue1(e.target.value)}
      />

      <br/>
      <br/>



      <label for='last_name'> Last Name : </label>

      <input
      type='text'
      placeholder='Dupont'
      name='last_name'
      value={inputLastName}
      onChange={(e) => setinputValue2(e.target.value)}
      />

<br/>
<br/>


      <label for='email'>Email : </label>

      <input
      type='text'
      placeholder='paul.dupont@gmail.com'
      name='email'
      value={inputEmail}
      onChange={(e) => setinputValue3(e.target.value)}
      />

<br/>
<br/>


      <label for='your_id'>Enter Your Id : </label>

      <input

      type='text'
      placeholder="12345678"
      value={inputYourId}
      name='your_id'
      onChange={(e) => setinputValue4(e.target.value)}

      />

<br/>
<br/>

<label for='time_slot'>Time Slot : </label>

      <input
      type='text'
      placeholder='10:30am - 12:00am'
      value={inputTimeSlot}
      name='time_slot'
      onChange={(e) => setinputValue5(e.target.value)}

      />

      <br/>
      <br/>

      <button onClick={addTask}>Register</button>

      <ul>
        {Reservation.map((Reservation, index) => (

          <li key={index}>

            <div>
              First Name : {Reservation.name}
            </div>

            <br/>

            <div>
              Last Name : {Reservation.last_name}
            </div>

            <br/>

            <div>
              Email : {Reservation.email}
            </div>

            <br/>

            <div>
              Your Id : {Reservation.id}
            </div>

            <br/>

            <div>
              Choose Time Slot : {Reservation.time_slot}
            </div>

            <br/>
            <br/>

            <button onClick={() => removeReservation(Reservation.name, Reservation.last_name, Reservation.email, Reservation.id)}>Delete</button>

          </li>

        ))}


      </ul>



    </div>
  );

};


ReactDOM.render(

  <React.StrictMode>
    <WorkingRoom />
  </React.StrictMode>,

  document.getElementById('root')

)