import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode"
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import bpfp from "../images/image.png"
import "./style/Profile.css"
import { useNavigate } from "react-router";
import NavbarLog from "./NavbarLog"
const Profile = () => {
    const [accountId, setAccountId] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')
    const [balance, setBalance] = useState()

    const navigate = useNavigate()

    async function populateInfo() {

        const req = await fetch('http://localhost:5000/api/user', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            },
        })

        const data = await req.json()
        if (data.status === 'ok') {
            setAccountId(data.id)
            setFirstName(data.fname)
            setLastName(data.lname)
            setEmail(data.email)
            setAddress(data.address)
            setContact(data.contact)
            setBalance(data.balance)
        }
        else {
            alert(data.error)
        }
    }

    async function populateBalance() {

        const req = await fetch('http://localhost:5000/api/balance', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            },
        })

        const data = await req.json()
        if (data.status === 'ok') {
            setBalance(data.balance)
        }
        else {
            alert(data.error)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt_decode(token)
            if (!user) {
                localStorage.removeItem(token)
                navigate('/log', { replace: true })
            }
            else {
                populateInfo()
            }
        }

    }, [])

    return (
        <div className="bjh">
            <NavbarLog />
            <div className="container  mt-4" style={{ color: "white", border: "4px solid white", borderRadius: "10px" }}>
                <div className="jumbotron">
                    <div className="gridpf">
                        <div className="c1">
                            <img src={bpfp} alt="" className="image" />
                        </div>
                        <div className="c2">
                            <h2 className="display-4">{firstName} {lastName}</h2>

                            <p>Account Number: {accountId}</p>
                            <p>Balance : {balance}</p>                           
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div className="profile-info">
                        <p>Address : {address}</p>
                        <p>Contact Number : {contact} </p>
                        <p>Email : {email}</p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Profile;