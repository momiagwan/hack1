import React ,{useState} from 'react'
import auth from "../../firebase";
const SignIn=()=>{
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const signin=(e)=>{e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
.then((userCredential)=>{console.log(userCredential)})
.catch((error)=>{console.log(error)
})
}
    return(
    <div className='sign-in-container'>
        
        <form onSubmit={SignIn}>
            <h1>log in</h1>
            <input type='email' placeholder='enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
            <input type='password' placeholder='enter your password'  value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button type='submit'>Log in</button>
        </form>
        </div>
   );
};
export default SignIn