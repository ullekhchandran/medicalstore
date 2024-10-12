import React, { useState } from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'
import { deleteData } from '../UserReducer'
import { useDispatch } from 'react-redux'
import { updateData } from '../UserReducer'
import { searchData } from '../search'

import checkAuth from './mainAuth/checkAuth'
import { Userdata } from '../Userdata'
import { useEffect } from 'react'

const Read = () => {
    const dispatch = useDispatch()
    const [b, setB] = useState(false)
    const [ids, setId] = useState()
    const [bb, setBb] = useState(true)


    const [searchterm, setSearchterm] = useState("")
    const [inputStyle, setInputStyle] = useState({})
    const [errormsg, setErrormsg] = useState("")
    const [event, setEvent] = useState()

    const datas = useSelector((state) => state.data)
    const sdata = useSelector((state) =>
        state.data.find(user => user.id === ids)
    )
    const [items, setItems] = useState(datas);
    const [time, setTime] = useState(sdata ? sdata.time : '');
    const [medicine, setMedicine] = useState(sdata ? sdata.medicine : '');
    const [availablestock, setAvailablestock]=useState(sdata ? sdata.availablestock:'');

    const update = (event) => {
        event.preventDefault();


        // const dateExists=datas.some((entry)=>entry.date === date)
        // if (dateExists){
        //     setB(false)
        //     return window.alert("date is alredy exists")
        // }
        dispatch(updateData({
            id: ids,
            newData: { time, medicine,availablestock }

        }))
        setB(false)
        window.alert('Success fully updated')


    }




    const fdata = useSelector(state => searchData(state, event))
    useEffect(() => {
        if (fdata) {
            setItems(fdata)
        }
    }, [fdata])

    const handleSearch = (e) => {
        e.preventDefault();
        const searchvalue = e.target.search.value
        console.log(searchvalue)
        setEvent(searchvalue)



        console.log(event)
        setBb(false)




    }




    return (
        <div>
            <Navbar/>
            <div className='text-center'>

                {b ? <>
                    <h3 className='mt-5'>edite</h3>

                    <form onSubmit={update}>
                       
                        <label>medicine:</label>
                        <input
                            type="text"
                            value={medicine}
                            onChange={(e) => setMedicine(e.target.value)}
                        />
                        <label>availablestock:</label>
                        <input
                           type="number"
                           value={availablestock}
                           onChange={(e)=>setAvailablestock(e.target.value)}
                        />
                        <button type="submit" className='mt-2 ' >Update Data</button>
                    </form>


                </> :
                    ''

                }
                <div className='p-5 m-5'>

                    <table className='table'>
                        <thead>
                            <th>ID</th>
                            <th>time</th>
                            <th>Medicine</th>
                            <th>availablestock</th>
                            <th>Action</th>
                        </thead>
                        <tbody>

                            {bb ?
                                datas.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.id}</td>
                                        <td>{data.time}</td>
                                        <td>{data.medicine}  </td>
                                        <td>{data.availablestock}</td>
                                        <td>
                                            <button className='btn btn-sm btn-warning ms-2' onClick={() => {
                                                setB(true)
                                                setId(data.id)
                                                setTime(data.time)
                                                setMedicine(data.medicine)
                                                setAvailablestock(data.availablestock)

                                            }}>edit</button>
                                            <button className='btn btn-sm btn-danger ms-2' onClick={() => {
                                                dispatch(deleteData(data.id))

                                            }}>Delete</button>

                                        </td>

                                    </tr>

                                ))
                                :
                                <tr key={items.id}>
                                    <td>{items.id}</td>
                                    <td>{items.time}</td>
                                    <td>{items.medicine}  </td>
                                    <td>{items.availablestock}</td>
                                    <td>
                                        <button className='btn btn-sm btn-warning ms-2' onClick={() => {
                                            setB(true)
                                            setId(items.id)
                                            setTime(items.time)
                                            setMedicine(items.medicine)
                                            setAvailablestock(items.availablestock)

                                        }}>edit</button>
                                        <button className='btn btn-sm btn-danger ms-2' onClick={() => {
                                            dispatch(deleteData(items.id))

                                        }}>Delete</button>

                                    </td>

                                </tr>


                            }
                        </tbody>
                    </table>
                </div>

                <form onSubmit={handleSearch}>
                    <label>search cheyyoo:</label>
                    <input type="text" placeholder="search here" name="search" style={inputStyle}></input>
                    <button className="btn btn-success" type='submit'> search</button>

                </form>
            </div>
        </div>
    )
}

export default checkAuth(Read)