import React from 'react';
import { NavLink } from 'react-router-dom';
import HookFormDemo from './HookFormDemo';

export default function Login() {
  return (
    <div>
      <div className='primary-nav'>
        <ul>
          <li><NavLink to="/">Logo</NavLink></li>
        </ul>
      </div>
      <div class="form-container">
        <HookFormDemo />
      </div>
    </div>
  );
}