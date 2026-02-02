import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const userData = await response.json();
        setData(userData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const groupByCity = Data.reduce((acc, user)=>{
    let city =  user.address?.city || "unknown";
    acc[city] = acc[city] || []
    acc[city].push(user)
    return acc
  },{})

  console.log(groupByCity)
  return (
    <>
      <div>
        <h2> user group by city </h2>
        {
          Object.entries(groupByCity).map(([city, cityUser]) =>(
            <div key={city}>
              <h3>{city}</h3>
              <ul>
                {cityUser.map((user)=>(
                  <li key={user.id}>{user.name}</li>
                ))}
              </ul>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default App;
