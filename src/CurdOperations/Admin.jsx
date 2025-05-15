import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Admin() {
    const [userdata, setUserData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/Infoviaan')
            .then((response) => {
                setUserData(response.data);
            });
    }, []);

    return (
        <div className='container mt-5'>

            <h2>CRUD App With JSON Server</h2>
            <hr />

            <div className="d-flex justify-content-between flex-wrap mb-3">
                <Link to="/" className="btn btn-success btn-lg">Home</Link>
                <Link to="/create" className="btn btn-success btn-lg">Create +</Link>
            </div>

            <div className="table-responsive">
                <table className='table table-bordered table-striped'>
                    <thead className='table-dark card-title'>
                        <tr className=''>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userdata.map((details, index) => (
                                <tr key={index}>
                                    <td>{details.id}</td>
                                    <td>{details.name}</td>
                                    <td>{details.age}</td>
                                    <td>{details.email}</td>
                                    <td>
                                        <div className="d-flex flex-wrap gap-2">
                                            <Link to={`/update/${details.id}`} className='btn btn-primary btn-sm'>Update</Link>
                                            <Link to={`/delete/${details.id}`} className='btn btn-danger btn-sm'>Delete</Link>
                                            <Link to={`/read/${details.id}`} className='btn btn-warning btn-sm'>Read</Link>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Admin;
