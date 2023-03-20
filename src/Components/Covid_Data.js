import React from 'react'
import { useState , useEffect } from 'react'
import './Covid_Data.css'

const Covid_Data = () => {
  const [data,setData]=useState([]);
  const getCovidData = async () => {
    const res = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
    const resultData = await res.json()
    console.log(resultData.data.regional);
    setData(resultData.data.regional);
  }

  useEffect(() => {
      getCovidData();
  }, []);


  return(
    <div>
      <div class="nav">Covid API Project</div>
      {
        data.map((coin) =>{
          return (
            <div>
              <h1>{coin.loc}</h1>
            </div>
          )
        })
      }
    </div>

  );
}






export default Covid_Data