import React, { createContext, useContext, useState, useRef, useReducer, useEffect } from 'react';
import Greethings from './Greethings';
import { LanguageProvider } from './LanguageContext';
import MyComponent from './MyComponent';
import FetchSpeakers from './FetchSpeakers'; // custom hook
import axios from "axios";
import './App.css';

const initialState = {
  isLoading: false,
  error: null,
  data: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "getEventSchedule":
      return { ...state, isLoading: true, error: null };
    case "getEventScheduleSuccess":
      return { ...state, isLoading: false, data: action.payload, error: null };
    case "getEventScheduleFailure":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default function MyApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  

const API_URL = "https://dummyjson.com/users";
const [data] = FetchSpeakers(API_URL);
  // ✅ useRef to store timer or data reference
  const dataRef = useRef(null);
  const intervalRef = useRef(null);

  // ✅ Fetch function
  const getEventSchedule = async () => {
    dispatch({ type: "getEventSchedule" });
    try {
      const res = await axios.get("http://localhost:5000/schedules"); // adjust API URL
      dispatch({ type: "getEventScheduleSuccess", payload: res.data });
      dataRef.current = res.data; // Store latest data in ref (without re-render)
    } catch (error) {
      dispatch({ type: "getEventScheduleFailure", payload: error.message });
    }
  };

  // // ✅ useEffect for scheduling data refresh
  useEffect(() => {
    getEventSchedule(); // ............fetch on mount

    // Auto-refresh every 20 seconds
    intervalRef.current = setInterval(() => {
      getEventSchedule();
    }, 20000);

    // Cleanup on unmount
    return () => clearInterval(intervalRef.current);
  }, []);

  // ✅ You can access the latest data anytime:
  const handleViewLatestData = () => {
    console.log("Latest data:", dataRef.current);
  };

  return (
    <LanguageProvider>
      <div className="App">
        <h1>Hi Reducer + useRef</h1>
        
        <h2>Event Schedule</h2>
        {state.isLoading && <p>Loading schedule...</p>}
        {state.error && <p style={{ color: "red" }}>Error: {state.error}</p>}
        {state.data && state.data.length === 0 && <div>No schedules available.</div>}
         {/* Data  */}

         <p><b>useRef is a React Hook that lets you reference a value that’s not needed for rendering.</b></p>
          <ul>
          {
            state.data  && state.data.map(({ id, time,speaker, subjectTitle, venue})=>(
              <li key={id}>
              Time: {time} <br/>
              Speaker: {speaker} <br/>
              subjectTitle: {subjectTitle} <br/>
              venue: {venue} <br/>
              --------------------------
              </li> 
            ))
        }
          </ul>
        <div id='two'>
        {/* useContext component */}
        <div className='welcome'>
          {/* <p> <b>useContext Hook</b> is a way to pass data through the component tree without having to pass props down manually at every level.</p> */}
         <p>useContext is a way to manage React applications global state. </p>
          <Greethings />
        </div>

        <div className='memo'>
          {/* Memo Component */}
          {/* memo lets your component skip re-renders with same props. Used with useMemo and useCallback. */}
                <MyComponent />
        </div>
        </div>
        
        {/* Re-rendring for the cutom hook */}
       <div id='custom'>
        <h1>Custom Hook - Fetch Speakers from JSON data</h1>
          <h3>Speakers from API</h3>
          <ul>
            {Array.isArray(data) &&
              data.map((user) => (
                <li key={user.id}>
                  {user.firstName} {user.lastName}
                </li>
              ))}
          </ul>
        </div>

      </div>
    </LanguageProvider>
  );
}
