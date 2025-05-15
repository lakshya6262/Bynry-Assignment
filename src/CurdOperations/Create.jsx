import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Create() {
    const [inputData, setInputData] = useState({
        id: "",
        name: "",
        email: "",
        age: "",
        location: "",
        gender: "",
        classification: "",
        phone: "",
        status: ""
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", inputData);

        try {
            if (!inputData.id || !inputData.name || !inputData.email || !inputData.age) {
                alert("Please fill in all required fields");
                return;
            }

            console.log("Sending POST request to: http://localhost:3000/Infoviaan");
            const response = await axios.post('http://localhost:3000/Infoviaan', inputData);
            console.log("Response received:", response);
            alert("Data Inserted Successfully...");
            navigate('/');
        } catch (error) {
            console.error("Error details:", {
                message: error.message,
                response: error.response ? {
                    status: error.response.status,
                    data: error.response.data
                } : "No response",
                request: error.request ? "Request was made but no response received" : "No request made"
            });
            alert("Error submitting form: " + error.message);
        }
    };

    return (
        <>
            <h1 style={{ textAlign: 'center', fontSize: "45px" }}><u>Data Insertion Form</u></h1>
            <div className='d-flex w-100 justify-content-center align-items-center'>
                <div className='w-50 border bg-secondary text-white p-5'>
                          <div className="col-md-4 mb-2">
                            <Link to="/admin" className="btn btn-success btn-lg">Admin</Link>
                          </div>
                    <form onSubmit={handleSubmit}>
                        {[
                            { label: 'User ID', type: 'number', name: 'id' },
                            { label: 'User Name', type: 'text', name: 'name' },
                            { label: 'User Age', type: 'number', name: 'age' },
                            { label: 'User Email', type: 'email', name: 'email' },
                            { label: 'Location', type: 'text', name: 'location' },
                            { label: 'Gender', type: 'text', name: 'gender' },
                            { label: 'Classification', type: 'text', name: 'classification' },
                            { label: 'Phone', type: 'tel', name: 'phone' },
                            { label: 'Status', type: 'text', name: 'status' }
                        ].map((field) => (
                            <div className="mb-4" key={field.name}>
                                <label htmlFor={field.name} className="block mb-2">
                                    {field.label}:
                                </label>
                                <input
                                    type={field.type}
                                    id={field.name}
                                    name={field.name}
                                    className="form-control w-full p-2 text-black rounded"
                                    value={inputData[field.name]}
                                    onChange={(e) =>
                                        setInputData({ ...inputData, [field.name]: e.target.value })
                                    }
                                    required={['id', 'name', 'age', 'email'].includes(field.name)}
                                />
                            </div>
                        ))}

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Create;
