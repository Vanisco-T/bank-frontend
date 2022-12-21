import React, { useState } from "react";
import './style/Deposit.css'
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavbarLog from "./NavbarLog";

const Widthdraw = () => {

    const [amount, setAmount] = useState()
    const navigate = useNavigate()

    async function updateBalance(event) {
        event.preventDefault()
        
        
        const req = await fetch('https://backend-c0yf.onrender.com/api/remove', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            },
            body: JSON.stringify({
                balance: amount
            })
        })

        const data = await req.json()
        console.log(data.status)
        if (data.status === 'ok') {
            navigate('/profile')
        }
        else {
            alert("error")
            navigate('/failed')
        }
    }
    return (
        <div>
            <NavbarLog />
            <div className="bghdep">
                <h1>Enjoy your free Widthdraw with Us</h1>
                <div className="leftc">
                    <h3>Widthdraw Form</h3>
                    <>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>$ Amount</InputGroup.Text>
                            <FormControl
                                aria-label="Amount (to the nearest Rupee)"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)} 
                            />
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>
                        
                        <Button className="mt-3" variant="primary" size="lg" onClick={updateBalance}>Widthdraw</Button>
                    </>
                </div>
            </div>
        </div>
    );
};

export default Widthdraw;