import React, { useState } from 'react';
import { app } from './firebaseConfig';    // for fire api connection
import { getDatabase, ref, set } from 'firebase/database';  // for firebase database connection

import Signing from './signup';

const db = getDatabase(app);     // for getting database

function Dataentry() {
    const putData = () => {
      set(ref(db,'user/shivam'), {    //'REF' will refer to path for example here data is being created in user>>shivam 
        id:1,                          // 'SET' will set or add the data 
        name:"its shivam",
        age:19
      });
    }

    
    const gotodata = () => {
        // window.open('url') opens url in same windows
        window.location.href = 'https://1drv.ms/x/c/2c33cba23f596be3/EcJjsK4DnT1FtnBMl5g-IP0BudMImuOvKWtjUaZ4QVJtHA?e=kcuNYH&nav=MTVfezAwMDAwMDAwLTAwMDEtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMH0';
    }

    return (
        <div className="dataentry h-screen py-5">
            <h2>Page to database</h2>
            
            <button className="h-10  px-2 bg-rose-600 shadow-black shadow-sm rounded-sm w-max h-5 my-2 mx-2 text-xs" onClick={gotodata}>upload for attendence</button>
            <button className=" h-10 px-2 bg-rose-600 shadow-black shadow-sm rounded-sm w-max h-5 my-2 mx-2 text-xs" onClick={putData}>data to fire</button>
            <Signing />
            
        </div>
    );
}

export default Dataentry;
