import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/routing/Home';
import AboutUs from './components/routing/AboutUs';
import Contact from './components/routing/Contact';
import NoPageFound from './components/routing/NoPageFound';
import College from './components/nested/College';
import Teacher from './components/nested/Teacher';
import Student from './components/nested/Student';
import Login from './components/routing/Login';
import Dashboard from './components/routing/Dashboard';
import MapDemo from './components/routing/MapDemo';
import Axios from './components/routing/Axios';
import FormDemo from './components/routing/FormDemo';
import Hooks from './components/routing/Hooks';
import UseEffectDemo from './components/demo/UseEffectDemo';
import UseMemoDemo from './components/demo/UseMemoDemo';
import UserContextSol from './components/demo/UserContextSol';
import ComponentType from './components/routing/ComponentType';
import ClassDemo from './components/demo/classDemo';
import FuncDemo from './components/demo/funcDemo';
import ConditionalDemo from './components/demo/conditionalDemo';
import LifecycleDemo from './components/demo/LifeCycleDemo';
import NestedApiResults from './components/routing/NestedApiResults';
import HookFormDemo from './components/routing/HookFormDemo';
import Counter from './components/Redux/Counter';
import Spa from './components/routing/Spa';

import './App.css';
import Map from './components/map';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<AboutUs age={25} />} />
          <Route path="contact" element={<Contact />} />
          <Route path="college" element={<College />}>
            <Route path="teacher" element={<Teacher/>} />
            <Route path="student" element={<Student/>} />
          </Route>
          <Route path='map' element={<MapDemo/>}/>
          <Route path='hooks' element={<Hooks/>}>
            <Route path="use-effect" element={<UseEffectDemo/>}/>
            <Route path="use-memo" element={<UseMemoDemo/>}/>
            <Route path="use-context" element={<UserContextSol/>}/>
          </Route>
          <Route path="component-types" element={<ComponentType/>}>
            <Route path='class-demo' element={<ClassDemo/>}/>
            <Route path='func-demo' element={<FuncDemo/>}/>
          </Route>
          <Route path="conditional-demo" element={<ConditionalDemo/>}/>
          <Route path="lifecycle" element={<LifecycleDemo />}/>
          <Route path='axios' element={<Axios/>}/>
          <Route path='api-nested' element={<NestedApiResults/>}/>
          <Route path='form' element={<FormDemo/>}/>
          <Route path="hook-form" element={<HookFormDemo/>}/>
          <Route path="data-map" element={<Map/>}/>
          <Route path="counter" element={<Counter/>}/>
          <Route path="spa" element={<Spa/>}/>
        </Route>
        <Route path="*" element={<NoPageFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
