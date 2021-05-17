import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { send } from "emailjs-com";


const MesajeGuvern = () => {
  const [toSend, setToSend] = useState({
    message: '',
    subject: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_hospital',
      'template_kc3cu4a',
      toSend,
      'user_W6cwsDtzIoE5SHDzAB2MP'
    ).then((response) => {
      console.log('SUCCES', response.status, response.text);
    }).catch((err) => {
      console.log('Eroare', err);
  
    });
    
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };



return (
    <React.Fragment>
      <Navbar />
      <div className="container">
      <h1>Mesaje Guvern</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label >Subiect</label>
            <input  type='text' 
                    name='subject'
                    className="form-control" 
                    placeholder='Subiect'
                    value={toSend.subject}
                    onChange={handleChange}
                    />
          </div>
          <div className="form-group">
            <label >Mesaj</label>
            <input  type='text' 
                    name='message'
                    className="form-control" 
                    placeholder='Scrie aici un mesaj...'
                    value={toSend.message}
                    onChange={handleChange}
                    />
          </div>
          { <button type='submit' 
          className="btn btn-primary"> Submit</button> }
        
        </form>
      </div>
    </React.Fragment>
  );
};

export default MesajeGuvern;
