
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,
  onAuthStateChanged,FacebookAuthProvider,
  createUserWithEmailAndPassword,} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initialize from "../Firebase/firevaseInt";

initialize()

const useFirebase = () => {
  const [lodding,setLodding] = useState(true)
  
    const [user, setUser] =useState({});
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    let [erroe, setErroe]=useState('')
    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();
    const provider = new FacebookAuthProvider();

   //////////////email and password creat register from ///////////////////////////////////
const handelnemail = (e)=> {
 setEmail(e.target.value);

};
const handelpassword = (e) =>{
  setPassword(e.target.value);
 
}
const handelsubmit = (e) =>{
  e.preventDefault();
  setLodding(true);
  if(password.length <6 ){
    setErroe('password at last 6 charartes')
    return;
  }
  if(!/[a-z]/.test(password)){
    setErroe('minimum 2 lower case use ')
    return;
  }
  return createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {   
    const user = userCredential.user;
    setUser(user)
    setErroe('');
    
  })
  .catch((error) => { 
    setErroe = error.message;
    setLodding(false)
  });

}
   ///email and password creat register from ///////////////////////////////////

  
    
//1------------------- singin google  start------------------------------//
    const singingoogle = () => {
      setLodding(true);
      
      return  signInWithPopup(auth, googleprovider)
        
          .finally(()=>setLodding(false));
          
    };
//1------------------- singingoogle  end------------------------------//

//04444 -------------facebook sing in---------------------------//
const facebook = () =>{
  setLodding(true);
  return signInWithPopup(auth, provider)

  
  .finally(()=>setLodding(false));;
}

//0444444 -------------facebook sing in---------------------------//




//2---------------observe user state-chage use start----------------------------------//
    useEffect( ()=>{
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }

             else {
              setUser({})
            }
            setLodding(false)
          });
          return () => unsubscribe;
    },[])
//2---------------observe user state-chage use end----------------------------------//






//3---------------logout start----------------------------------//
    const logout = ()=>{
        signOut(auth)
        .then(() => {
          setUser({})
          })
          .finally(()=>setLodding(false));
    }
 //3---------------logout end----------------------------------//

 ////
 
 ///



 

    return{
        user,
        lodding,
        singingoogle,
        logout,
        facebook,
        handelnemail,
        handelpassword,
        handelsubmit,
        erroe,

    }
}


export default useFirebase ;