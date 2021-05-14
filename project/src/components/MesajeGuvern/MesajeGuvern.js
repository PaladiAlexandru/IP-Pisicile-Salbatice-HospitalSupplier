import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { send } from "emailjs-com";

const MesajeGuvern = () => {
  const [toSend, setToSend] = useState({
    message: '',
    subject: '',
  });

  const onSubmit = (e) =>{
    e.preventDefault();
    send(
      'service_hospital',
      'template_kc3cu4a',
      toSend,
      'user_W6cwsDtzIoE5SHDzAB2MP'
    ).then((response)=>{console.log('SUCCES', response.status, response.text);
    }).catch((err) => {console.log('Eroare', err);
    });
  };

  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <form onSubmit={onSubmit}>
          <input type='text' 
            name='subject' 
            placeholder='Subiect' 
            value={toSend.subject} 
            onChange={handleChange}
          />
          <input type='text' 
            name='message' 
            placeholder='Mesaj' 
            value={toSend.message} 
            onChange={handleChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default MesajeGuvern;
