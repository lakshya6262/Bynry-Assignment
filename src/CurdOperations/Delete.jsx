
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Delete(props) {
    const { id } = useParams();

    const [inputData, setInputData] = useState({
        id: id,
        name: "",
        age: "",
        email: ""
    });

    let navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/Infoviaan/' + id)
            .then((response) => {
                setInputData(response.data);
            }).catch((err) => console.log(err));
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault();

        const confirm = window.confirm(`Do You Want To Delete Id :  ${id}`);

        if (confirm) {
            axios.delete('http://localhost:3000/Infoviaan/' + id, inputData)
                .then((res) => {
                    alert(`Id ${id} Successfully Deleted...`);
                    navigate('/admin');
                })
        }
        else{
            navigate('/admin');
        }
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: "45px" }}> <u> Data Deleted </u> </h1>
            <div className='d-flex w-100 justify-content-center align-items-center'>
                <div className='w-50 border bg-secondary text-white p-5'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='name'> User_ID : </label>
                            <input type='number' name='id' className='form-control'
                                value={inputData.id} disabled
                                onChange={(e) => { setInputData({ ...inputData, id: e.target.value }) }}
                                required />
                        </div> <br />
                        <div>
                            <label htmlFor='name'> User_Name : </label>
                            <input type='text' name='name' className='form-control'
                                value={inputData.name} disabled
                                onChange={(e) => { setInputData({ ...inputData, name: e.target.value }) }} required
                            />
                        </div> <br />
                        <div>
                            <label htmlFor='name'> User_Age : </label>
                            <input type='number' name='age' className='form-control'
                                value={inputData.age} disabled
                                onChange={(e) => { setInputData({ ...inputData, age: e.target.value }) }} required
                            />
                        </div> <br />
                        <div>
                            <label htmlFor='email'> User_Email : </label>
                            <input type='email' name='email' className='form-control'
                                value={inputData.email} disabled
                                onChange={(e) => { setInputData({ ...inputData, email: e.target.value }) }} required
                            />
                        </div> <br />
                        <button type='submit' className='btn btn-danger' > Delete Data </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Delete;