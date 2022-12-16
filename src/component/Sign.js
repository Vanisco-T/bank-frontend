import React from "react"
import { useState } from "react"
import NavBar from './NavBar';
import { useNavigate } from "react-router-dom"
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"

const Sign = () => {
	const navigate = useNavigate()
	const [firstName, setFirstName] = useState()
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [address, setAddress] = useState('')
	const [contact, setContact] = useState('')
	const [balance, setBalance] = useState()
	
	const registerUser = async (event) => {
		event.preventDefault()
		const response = await fetch("http://localhost:5000/api/register", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password,
				balance: balance,
				address: address,
				contact: contact,
			}),
		})
		const data = await response.json()
		console.log(data)

		if (data.status === 'ok') {
			navigate('/log')
		}
	}

	return (
		<div>
			<NavBar />
			<div style={{ color: "white" }} className="main">
				<div className="form-body container mt-5 mb-5">
					<h4 className="mb-5">Get started with us today! By filling out the form given below</h4>
					<div className="form" style={{ width: "50%", margin: "auto" }}>
						<Form>
							<Row className="mb-4">
								<Form.Group as={Col} controlId="formFirstName">
									<Form.Label>First Name</Form.Label>
									<Form.Control
										type="text"
										placeholder="John"
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
									/>
								</Form.Group>

								<Form.Group as={Col} controlId="formLastName">
									<Form.Label>Last Name</Form.Label>
									<Form.Control
										type="text"
										placeholder="Doe"
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
									/>
								</Form.Group>
							</Row>

							<Row className="mb-4">
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control
										type="email"
										placeholder="Enter email"
										value={email}
										onChange={(e) => setEmail(e.target.value)} />
								</Form.Group>

								<Form.Group as={Col} controlId="formGridPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control 
										type="password" 
										placeholder="Password"
										value={password}
										onChange={(e) => setPassword(e.target.value)} />
								</Form.Group>
							</Row>

							<Form.Group className="mb-4" controlId="formGridAddress1">
								<Form.Label>Address</Form.Label>
								<Form.Control 
									placeholder="Yaounde"
									value={address}
									onChange={(e) => setAddress(e.target.value)} />
							</Form.Group>

							<Form.Group className="mb-4" controlId="formGridAddress2">
								<Form.Label>Contact</Form.Label>
								<Form.Control 
									placeholder="Phone Number"
									value={contact}
									onChange={(e) => setContact(e.target.value)}
								/>
							</Form.Group>
							<Form.Group className="mb-4" controlId="formDep">
								<Form.Label>Amount Deposited</Form.Label>
								<Form.Control 
									type="number" 
									placeholder="Initial Amount"
									value={balance}
									onChange={(e) => setBalance(e.target.value)} />
							</Form.Group>
          	<Form.Group className="mb-4" id="formGridCheckbox">
								<Form.Check type="checkbox" label="Accept terms and conditions" />
							</Form.Group>
							<Button variant="primary" type="submit" onClick={registerUser}>
								Submit
              </Button>
						</Form>
					</div>
				</div>
			</div>
		</div>


	);
}

export default Sign