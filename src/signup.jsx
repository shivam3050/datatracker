import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from './firebaseConfig';
import { useState } from "react";

const auth = getAuth(app);


function Signing() {
    const [yourEmail,setYourEmail]=useState("");
    const [yourPassword,setYourPassword]=useState("");

    const getDataOfEmail = (event) => {
        setYourEmail(event.target.value);
    }
    const getDataOfPassword = (event) => {
      setYourPassword(event.target.value);
  }
  
    const submitFormData = () => {
      createUserWithEmailAndPassword(auth, yourEmail, yourPassword).then(() => console.log(yourEmail +" linked successfully"));
    }





    return(
        <div className="signing-up bg-rose-400 mx-2 px-2 py-2 w-max border-5 shadow-lg shadow-black">
          <form action="" className="flex flex-col w-max">
            <h6 className="text-sm">Not have account, Sign up</h6>
            <div className="flex sm:flex-row">
              <input type="text" name="" id="" onChange={getDataOfEmail} placeholder="enter your email" className="mr-1 text-xs w-28 shadow-sm shadow-black rounded-sm" />
              <input type="password" name="" id="" onChange={getDataOfPassword} placeholder="create password" className="text-xs w-28 shadow-sm shadow-black rounded-sm shadow-md" />
            </div>
              <input type="button" onClick={submitFormData} className="h-5 my-2 w-max px-2 bg-rose-600 text-xs w-max shadow-black shadow-sm rounded-sm" value="Create New User" />
          </form>

        </div>
    );
}
export default Signing;
