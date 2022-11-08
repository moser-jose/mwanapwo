import React, { useState, useContext, useEffect } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/api";
import { useNavigate } from "react-router-dom"
import logo from '../logo.png';
import "../assets/scss/_files/_login.scss";
import { GiEnvelope,GiKeyLock } from "react-icons/gi";
import {AuthContext} from "../contexts/authContext";

const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navitage = useNavigate();

    const {dispatch,currentUser} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
    
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = {
                "uid":userCredential.user.uid,
                "email":userCredential.user.email,
                "phoneNumber":userCredential.user.phoneNumber,
                "photoURL":userCredential.user.photoURL,
                "displayName":userCredential.user.displayName,
            }
            dispatch({type:"LOGIN", payload:user})
            navitage("/admin")
          })
          .catch((error) => {
            setError(true);
          });
      };

      useEffect(() => {
        if(currentUser){
            navitage("/admin")
        }
      }, [])
      

    return (
        <div className='login'>
            <form  onSubmit={handleLogin}>
                <div className='img'>
                    <img src={logo}/>
                    <h2>MWANA PWO</h2>

                    <h3>Faça o Login 🧑🏿‍💻</h3>

                </div>
                <label>E-mail</label>
                <div className='inputs'>
                    <GiEnvelope size={30} color="#bc7e29"/>
                    <input 
                        type="email" 
                        placeholder="Insira o E-mail"
                        onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <label>Senha</label>
                <div className='inputs'>
                    <GiKeyLock size={30} color="#bc7e29"/>
                    <input 
                        type="password"
                        placeholder="************"
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <button type='submit'>Entrar</button>
                {error && <span>Wrong email or password!</span>}
            </form>
        </div>
    )
}
export default Login