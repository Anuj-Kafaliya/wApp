import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Card from './Card.jsx'

const App = ()=>  {
  
  const [city, setCity] = useState(""); 
  const [datum, setDatum] = useState({});

  const [error,setError] = useState('');


  const handleChange = (e) => {
      setError('');
      setCity(e.target.value);
      console.log(city);
  }

  const handleClick = (e) => {
    
    
    if(city !== "" && city !== "undefined")
    {
      axios.get("https://api.openweathermap.org/data/2.5/weather",{
        params: {
          q: city,
          appid: "24d967e566c162e654d04d07f1913187",
          units: "metric"
        }
      }).then((res)=>{
          setDatum(res.data);
      }).catch((err) => {
        console.log(err);
      })
  }else{
    setError('enter some value');
  }
  }
   

  return (
    <div className="App">
      	<div>
          <h1>Weather App</h1>
        </div>
        <div>
          <input type="text" placeholder= "enter city name" value={city} onChange={(e) => handleChange(e)} name="city"/>
          <button onClick={handleClick}>Search</button>
        </div>
        <div>
          <Card datum = {datum} />
        </div>
        <p style={{color:'red'}}>{error}</p>
    </div>
  );
}

export default App;
