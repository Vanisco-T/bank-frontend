import React from "react";
import "./style/Tranfer.css";
import {useState} from "react"
import {useNavigate} from "react-router-dom"
import { InputGroup, FormControl, Button } from "react-bootstrap";
import NavbarLog from "./NavbarLog";

const Transfer = () => {

    const navigate = useNavigate()
    const [receiverEmail, setReceiverEmail] = useState()
    const [amount, setAmount] = useState('')
    const [desc, setDesc] = useState('')

    async function transferMoney(event) {
        event.preventDefault()

        const req = await fetch('http://localhost:5000/api/transaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            },
            body: JSON.stringify({
                email: receiverEmail,
                balance: amount,
                desc: desc,
            })
        })

        const data = await req.json()
        console.log(data)
        if(data.status === 'ok'){
            navigate('/transaction')
        }
    }

    return (
        <div>
            <NavbarLog />
            <div>
                <div className="bgh">
                    <h1 className="transfer-heading">Enjoy Your Free Transfer With Us</h1>
                    <div className="leftc">
                        <h3 className="transfer-title">Transfer Form</h3>
                        <>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Recipient's Email"
                                    value={receiverEmail}
                                    onChange={(e) => setReceiverEmail(e.target.value)}
                                    aria-label="Recipient's Acc No"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">Recipient</InputGroup.Text>
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text>$ Amount</InputGroup.Text>
                                <FormControl 
                                    aria-label="Amount (to the nearest Rupee)"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)} />
                                <InputGroup.Text>.00</InputGroup.Text>
                            </InputGroup>

                            <InputGroup>
                                <InputGroup.Text>Description of the transaction</InputGroup.Text>
                                <FormControl 
                                    as="textarea" 
                                    aria-label="With textarea"
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)} />
                            </InputGroup>

                            <Button className="mt-3" variant="primary" size="lg" onClick={transferMoney}>Transfer</Button>
                        </>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Transfer;