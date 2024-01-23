'use client'
import {useState} from "react";

export default function AddNewUser() {
	const [name, setName] = useState('')
	const [age, setAge] = useState('')
	const [email, setEmail] = useState('')

	const addNewUserHandler = async () => {
		let response = await fetch('/api/users',{
			method:"POST",
			body: JSON.stringify({name,age,email}),
		})

		response = await response.json()

		if (response.ok){
			alert("User added successfully")
		}
		else {
			alert("Something went wrong")
		}
	}

	return (
		<div>
			<input type={"text"} value={name} onChange={(e) =>
				setName(e.target.value)} placeholder={"Enter your name"}/>
			<br/>
			<input type={"number"} value={age} onChange={(e) =>
				setAge(e.target.value)} placeholder={"Enter your age"}/>
			<br/>
			<input type={"email"} value={email} onChange={(e) =>
				setEmail(e.target.value)} placeholder={"Enter your email"}/>
			<br/>
			<button className="bg-black text-white" onClick={addNewUserHandler}>Add New User</button>
		</div>
	)
}