import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateData = () =>{
    const {id} = useParams()
    const [readSingle ,setReadSingle] = useState([])
    const [info,setInfo] = useState({})

    const handleBlur = (e) =>{
        const setNewInfo = {...info}
        setNewInfo[e.target.name] = e.target.value;
        setInfo(setNewInfo)
    }
    useEffect(() => {
        fetch(`http://localhost:5000/singlecountry/${id}`)
        .then(res => res.json())
        .then(data =>setReadSingle(data.data))
    },[])
console.log(info , id);
    const handleUpdate = () => {
        const formData = new FormData();
        formData.append('id',id)
        formData.append('country',info.country)
        formData.append('capital',info.capital)
        fetch(`http://localhost:5000/updatedata`,{
            method: 'PUT',
            body: formData
        })
        .then(res => res.json())
        .then(data=>console.log(data))
    }

    return(
        <div className="container">
            <div className="form-group">
                <div className="row">
                    <label>Country</label>
                    <input className="form-control" name="country" onChange={handleBlur} defaultValue={readSingle.country}></input>
                    <input className="form-control" name="capital" onChange={handleBlur} defaultValue={readSingle.capital}></input>
                    <button onClick={handleUpdate} className="btn btn-info">Update</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateData;