import React from 'react'
import s from './style.module.css'
import {useDispatch} from "react-redux"
import { addPeopleAction } from '../../store/reducer/peopleReducer'

export default function AddForm() {
   const dispatch = useDispatch()
  const addPeople = (event) => {
    event.preventDefault()
    const {name, link, sex} = event.target
    
     dispatch(addPeopleAction(name.value, link.value, sex.value))

    name.value = "";
    link.value = "";
    sex.value = "";
  }
  return (
    <form className={s.form_add} onSubmit={(e) => addPeople(e)}>
        <input type='text' name='name' placeholder='Name'/>
        <input type='text' name='link' placeholder='Link to avatar'/>
        <select name='sex' id={s.select}>
           <option value="">Sex:</option>
           <option value="male">Male</option>
           <option value="female">Female</option>
       </select>
       <button className={s.btn_add}>add</button>

</form>
)
}





    
