import React, {useState,setState} from 'react';
import './style.css';
import {database} from '../firebase';
import {ref,push,child,update} from "firebase/database";
import { render } from 'react-dom';



function LookupForm() {
    return (
        <div>
            <div className="form">
                <div className='formHeader'>Look-Up</div>
                <div className='forms'>
                    
                </div>
            </div>
        </div>
    );
}

export default LookupForm