import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Update(props) {
    const { id } = useParams();

    const [inputData, setInputData] = useState({
        id: id,
        name: "",
        age: "",
        email: "",
        location: "",
        gender: "",
        classification: "",
        phone: "",
        status: "",
    });

    let navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/Infoviaan/' + id)
            .then((response) => {
                setInputData(response.data);
            }).catch((err) => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3000/Infoviaan/' + id, inputData)
            .then((res) => {
                alert("Data Update Successfully...");
                navigate('/');
            });
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: "45px" }}> <u> Data Updated </u> </h1>
            <div className='d-flex w-100 justify-content-center align-items-center'>
                <div className='w-50 border bg-secondary text-white p-5'>
                
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='id'> User_ID : </label>
                            <input type='number' name='id' className='form-control'
                                value={inputData.id} disabled
                                onChange={(e) => { setInputData({ ...inputData, id: e.target.value }) }}
                                required />
                        </div> <br />
                        <div>
                            <label htmlFor='name'> User_Name : </label>
                            <input type='text' name='name' className='form-control'
                                value={inputData.name}
                                onChange={(e) => { setInputData({ ...inputData, name: e.target.value }) }} required
                            />
                        </div> <br />
                        <div>
                            <label htmlFor='age'> User_Age : </label>
                            <input type='number' name='age' className='form-control'
                                value={inputData.age}
                                onChange={(e) => { setInputData({ ...inputData, age: e.target.value }) }} required
                            />
                        </div> <br />
                        <div>
                            <label htmlFor='email'> User_Email : </label>
                            <input type='email' name='email' className='form-control'
                                value={inputData.email}
                                onChange={(e) => { setInputData({ ...inputData, email: e.target.value }) }} required
                            />
                        </div> <br />
                        <div>
                            <label htmlFor='location'> User_Location : </label>
                            <input type='text' name='location' className='form-control'
                                value={inputData.location}
                                onChange={(e) => { setInputData({ ...inputData, location: e.target.value }) }} required
                            />
                        </div> <br />
                        <div>
                            <label htmlFor='gender'> User_Gender : </label>
                            <input type='text' name='gender' className='form-control'
                                value={inputData.gender}
                                onChange={(e) => { setInputData({ ...inputData, gender: e.target.value }) }} required
                            />
                        </div> <br />
                        <div>
                            <label htmlFor='classification'> Classification : </label>
                            <input type='text' name='classification' className='form-control'
                                value={inputData.classification}
                                onChange={(e) => { setInputData({ ...inputData, classification: e.target.value }) }} required
                            />
                        </div> <br />
                        <div>
                            <label htmlFor='phone'> Phone Number : </label>
                            <input type='text' name='phone' className='form-control'
                                value={inputData.phone}
                                onChange={(e) => { setInputData({ ...inputData, phone: e.target.value }) }} required
                            />
                        </div> <br />
                        <div>
                            <label htmlFor='status'> Status : </label>
                            <input type='text' name='status' className='form-control'
                                value={inputData.status}
                                onChange={(e) => { setInputData({ ...inputData, status: e.target.value }) }} required
                            />
                        </div> <br />
                        <button type='submit' className='btn btn-info'> Submit </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Update;
