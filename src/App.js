import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from 'axios';
import axiosInstance from "./axiosConfig";
import axiosConfig from "./axiosConfig";

function App() {

  // const currentMessage = await axios.get('/api/hello')
  // console.log('📌 /api/hello = ' + currentMessage)

  const [message, setMessage] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await axios.get('http://localhost:4000/api/hello');
  //       // console.log(('📌 /api/hello = ' + response.data));
  //       setMessage(response.data);
  //     } catch (e) {
  //       console.log('⁉️ Error >>> ',e);
  //     }
  //   })();
  // },[]);

  useEffect(()=>{
    (async () => {
      // let tempReq = 'http://localhost:4000/api/hello';
      let tempReq = '15.164.141.28:80/api/hello';

      const interceptRes = await axiosInstance.get(tempReq);
      console.log('axios intercept res >>> ' + interceptRes.data);
      setMessage('front 로 넘어오기전에 가공을 하고 ~ '+ interceptRes.data);
    })();
  },[])

  console.log('front state message >>> ' + message);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          이 페이지 랜더링시 be에 요청
        </p>
        <p>
          {message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
