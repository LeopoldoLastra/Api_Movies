import React from 'react';
import { Link } from 'react-router-dom';
import './loginView.css';

const LoginView = ()=>{

 
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

export default LoginView;