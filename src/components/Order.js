

import React,{  useEffect, useState} from "react";
import './Order.css';
import emailjs from '@emailjs/browser';
import TextareaField from "./TextareaField";
import InputField from "./InputField";
export const Order = () => {
const [values, setValues] = useState({
    fullName: '',
    email: '',
    numberP: '',
    phoneNumber:'',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_7110202001', 'template_wn89b6e', values, 'BXnglBKqorYGiS92Y')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          email: '',
          numberP: '',
          phoneNumber:'',
          message: ''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000); //3s
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
        return (
            <div className="form-group" style={{width:'30%', marginLeft:'35%'}}>
            {status && renderAlert()}
            <form onSubmit={handleSubmit}>
            <InputField value={values.fullName} handleChange={handleChange} label="Tên đầy đủ" name="fullName" type="text" placeholder="Nguyen Thanh An" />
            <InputField value={values.email} handleChange={handleChange} label="E-Mail" name="email" type="email" placeholder="thanhan7112@gmail.com" />
            <InputField value={values.numberP} handleChange={handleChange} label="Số người" name="numberP" type="text" placeholder="ex: 5"/>
            <InputField value={values.phoneNumber} handleChange={handleChange} label="Số điện thoại" name="phoneNumber"  type="text" placeholder="ex: 0364776328" />
            <TextareaField value={values.message} handleChange={handleChange} label="Lưu ý cho nhà hàng" name="message" placeholder="ex: abc" />
            <div className="form-group">
              <input type="submit" value="Send" className="btn btn-primary"/>
          </div>
            </form>
          </div>
        )
      }
      
      const renderAlert = () => (
        <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
          <p>your message submitted successfully</p>
        </div>
      )
    