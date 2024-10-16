import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';  
import Session from 'react-session-api';
import React,{useState} from 'react';
import Loginpage from './Loginpage.js';
import Memberjoin from './Memberjoin.js';
import './assets/admin_css.css';

function App() {
  let [member, memberdata] = useState(''); 
  //로그인 정보
  function login_data(){
    memberdata({"id":"hong", "name":"홍길동"});
    Session.set("member", member);
  }
  function load(){
    Session.get("member", member);
    console.log(member);
  } 
  if(member==""){
    return (
      <>
      <Routes>
      <Route path="/" element={<Loginpage/>}/>
      <Route path="/Memberjoin" element={<Memberjoin/>}/>
      </Routes>
      </>
    );
  }
  else {
    return (
      <div>
        <h1>Session test</h1>
        <button type='button' onClick={login_data}>저장</button>
        <button type='button' onClick={load}>읽기</button>
      </div>
    );
  }
}

export default App;
