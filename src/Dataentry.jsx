import React, { useState } from 'react';
import { app } from './firebaseConfig';
import { getDatabase, ref, set } from 'firebase/database';
//FOR AUTHENTICATION
//import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Signing from './signup';
//for authentication
//const auth = getAuth(app);
 // Import your Firebase configuration

// Initialize Firebase
const db = getDatabase(app);

function Dataentry() {
    const putData = () => {
      set(ref(db,'user/shivam'), {
        id:1,
        name:"its shivam",
        age:19
      });
    }

        //for authentication
  //  const signupusr = () => {
    //  createUserWithEmailAndPassword(auth, 'shivamnavy1@gmail.com', '12345678').then((value) => console.log(value));
   // }
    
    const gotodata = () => {
        // window.open('url') opens url in same windows
        window.location.href = 'https://1drv.ms/x/c/2c33cba23f596be3/EcJjsK4DnT1FtnBMl5g-IP0BudMImuOvKWtjUaZ4QVJtHA?e=kcuNYH&nav=MTVfezAwMDAwMDAwLTAwMDEtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMH0';
    }

    return (
        <div className="dataentry">
            <h2>Enter the data</h2>
            <button className="home-login-button h-10 w-max px-2 bg-rose-600 shadow-black shadow-md rounded-md" onClick={gotodata}>Go to upload data for attendence</button>
            <button className="home-login-button h-10 w-max px-2 bg-rose-600 shadow-black shadow-md rounded-md" onClick={putData}>Go to upload data to fire</button>
            <Signing />
            
        </div>
    );
}

export default Dataentry;
