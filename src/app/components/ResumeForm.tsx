'use client';
import { useState } from 'react';

export default function ResumeForm() {
  const [email, setEmail] = useState('Email');
  const [phone, setPhone] = useState('Phone');
  const [name, setName] = useState('Name');

  return (

    <div className='bg-slate-800 flex flex-col w-3/5 h-full shadow-lg p-4 rounded-lg text-white'>
      
      <form action='resume-form' className='flex flex-col gap-4'>
        <p
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => setName(e.target.innerText)}
          className='cursor-text text-3xl font-bold text-center w-fit self-center'>
          {name}
        </p>

        <div id='contact-info' className='flex gap-2 items-center justify-center w-full'>
          <p
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setEmail(e.target.innerText)}
            className='cursor-text'>
            {email}
          </p>
          <p className='self-center text-center text-xl'>|</p>
          <p
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setPhone(e.target.innerText)}
            className='cursor-text'>
            {phone}
          </p>
        </div>
      </form>
    </div>

  );
}
