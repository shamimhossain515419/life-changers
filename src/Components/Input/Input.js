import React from 'react';
import './input.css'
const Input = ({ type, placeholder, title, onChange,value }) => {
     return (
          <div className=' w-full  my-6'>
               <label className=' text-base md:text-xl font-bold pb-2 textColor'>{title} </label>
               <input className=' w-full   input' value={value}
                    onChange={onChange} type={type} placeholder={placeholder}></input>
          </div>
     );
};

export default Input;  