import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './componenets/Navbar';
import Filter from './componenets/Filter';
import Cards from './componenets/Cards';
import { filterData, apiUrl } from './data';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Spring from './componenets/Spring';

const App = () => {

  const [courses, setCourses] = useState(0);
// console.log(courses);
  useEffect(
    () => {
      const fetchData = async () => {
        try {
          const res = await fetch(apiUrl);
          const output = await res.json();
          setCourses(output.data);
        }
        catch (error) {
          toast.error("Something went wrong");
        }
      }
      fetchData();
    },[]
  );

  return (
    <div className="App" >
      <Navbar />
      <Filter filterData={filterData} />
      <div>
        {
          <Cards courses={courses}/>
        }
      </div>
    </div>
  );
}

export default App;
