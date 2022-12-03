import React from 'react';
import FormContainer from './components/mainForms/formContainer/Form';

import './App.css';
import Input, { Button } from './components/mainForms/formContainer/Input';
import Login from './components/mainForms/Login/Login';

function App() {
   return (
      <div dir='rtl' className='w-full h-screen'>
         <Login />
      </div>
   );
}

export default App;
