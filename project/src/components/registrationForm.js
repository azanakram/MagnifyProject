import React, {useState,setState} from 'react';
import './style.css'
import {database, storage} from '../firebase'
import {ref,push,child,update} from "firebase/database";

function RegistrationForm() {
    
    const [identification, setIdentification] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [department, setDepartment] = useState(null);
    const [employmentStatus, setEmploymentStatus] = useState(null);
    const [email, setEmail] = useState(null);
    const [accommodation, setAccommodation] = useState(null);
    const [fileUpload, setFileUpload] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
       
        if(id === "identification"){
            setIdentification(value);
        }
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "department"){
            setDepartment(value);
        }
        if(id === "employmentStatus"){
            setEmploymentStatus(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "accommodation"){
            setAccommodation(value);
        }
        if(id === "fileUpload"){
            setFileUpload(value);
        }

    }

    const handleSubmit = () =>{
        
        let obj = {
                identification:identification,
                firstName:firstName,
                lastName:lastName,
                department:department,
                employmentStatus:employmentStatus,
                email:email,
                accommodation:accommodation,
                fileUpload:fileUpload,
            }       
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj
        return update(ref(database), updates);
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="identification">
                    <label className="form__label" for="identification">ID </label>
                    <input className="form__input" type="text" value={identification} onChange = {(e) => handleInputChange(e)} id="identification" placeholder="ex. 100846"/>
                </div>
                <div className="firstname">
                    <label className="form__label" for="firstName">First Name </label>
                    <input  type="text" name="" id="firstname" value={firstName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="ex. John"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="ex. Smith"/>
                </div>
                <div className="department">
                    <label className="form__label" for="department">Department </label>
                    <input  type="text" name="" id="department" value={department}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="ex. Research"/>
                </div>
                <div className="employmentStatus">
                    <label className="form__label" for="employmentStatus">Employment Status </label>
                    <input  type="text" name="" id="employmentStatus" value={employmentStatus}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="ex. Full-Time"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="ex j.smith@magnify.xyz"/>
                </div>
                <div className="accommodation">
                    <label className="form__label" for="accommodation">Accommodations </label>
                    <input  type="text" name="" id="accommodation" value={accommodation}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder=""/>
                </div>
                <div className="fileUpload">
                    <label className="form__label" for="fileUpload">Upload File (.txt)</label>
                    <input className="form__input" type="file"  id="fileUpload" value={fileUpload} onChange = {(e) => handleInputChange(e)} placeholder="Please select file"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
       
    )       
}

export default RegistrationForm