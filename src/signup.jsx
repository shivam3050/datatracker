import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from './firebaseConfig';

const auth = getAuth(app);


const Signing = () => {
  
    createUserWithEmailAndPassword(auth, 'shivamnavy1@gmail.com', '12345678').then((value) => console.log(value));




    return(
        <div className="signing">
          <button className="bg-yellow" onClick={createUserWithEmailAndPassword}>the new user auth</button>

        </div>
    );
}
export default Signing;
