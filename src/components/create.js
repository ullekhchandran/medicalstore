
import React from "react"
import Navbar from "./Navbar"
import { addData } from "../UserReducer"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { useSelector } from "react-redux"
import checkAuth from "./mainAuth/checkAuth"
import { useNavigate } from "react-router-dom"

const Create = () => {



    const currentTime = new Date();
    const formatedTime = currentTime.toLocaleTimeString()
    console.log(formatedTime)

    const [time, setTime] = useState(formatedTime)
    const [medicine, setMedicine] = useState()
    const [availablestock,setAvailablestock]= useState()
    const datas = useSelector((state) => state.data)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (event) => {

        event.preventDefault()
        const timeExists = datas.some((entry) => entry.time === time)
        if (timeExists) {
            return window.alert("time is already exists")
        }
        if (datas.length >= 5) {
            window.alert("maximum will exceed")
            navigate('/')

        } else {
            dispatch(addData({
                id: datas[datas.length - 1].id + 1, time, medicine,availablestock
            }))
            navigate('/read')
            window.alert('data updated')


        }



    };


    return (
        <div>
            <Navbar />
            <div className="text-center m-5 p-5">

                <h3>Create Medicine Data</h3>
                <form onSubmit={handleSubmit}>
                    <div >

                        <label htmlFor="name">Enter the availablestock:</label>
                        <input className="form-control" type="number" placeholder="enter number of stocks available" onChange={e =>setAvailablestock(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="medicine"> Enter medicine name:</label>
                        <input className="form-control" placeholder="enter medicine name" onChange={e => setMedicine(e.target.value)} />
                    </div> <br></br>
                    
                    <button type="submit" className="btn btn-info"> Submit</button>
                </form>

            </div>
        </div>
    )
}
export default checkAuth(Create)