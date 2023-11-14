import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './loginView.css';

const LoginView = ()=>{


    const [information, setInformation] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

  


    const options = {
     
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `'Bearer ${import.meta.env.VITE_APP_API_TOKEN_AUTH_TMDB}`
            }
        };

  
    

    useEffect(()=>{
            
        const popularMovies = async()=>{
                 setIsLoading(false);
                 setError(null);
                try{
                    const response = await fetch('https://api.themoviedb.org/3/authentication/token/new ', options);
                    const data = await response.json();
                  
                    console.log (data)
                    setInformation(addaptedData)
    
                }catch(error){
                    setError(error);
                    }finally{
                    setIsLoading(true);
                }       
              }
      
             popularMovies();
          },[])

         
    


    return (
        <>
        <div className='login_container'>
            <form className='login_form'>
                <div className='form_data'>
                    <label className='form_label'> User</label>
                    <input className='form_input' placeholder='User'/>
                </div>
                
                <div className='form_data'>
                    <label className='form_label'> Password</label>
                    <input className='form_input' placeholder='Password'/>
                </div>
                
            </form>
            <div className='login_buttons'>
                <Link to='/'><button>Cancelar</button></Link>
            </div>
            
        </div>
        </>
    )
};

export {LoginView}