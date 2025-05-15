import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [userdata, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get('http://localhost:3000/Infoviaan')
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const openLocation = (location) => {
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
    window.open(mapUrl, '_blank');
  };

  // Filter data by name or location
  const filteredUsers = userdata.filter((user) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      user.name.toLowerCase().includes(lowerSearch) ||
      user.location?.toLowerCase().includes(lowerSearch)
    );
  });

  return (
    <>
    <div className='container mt-5' >
      <h2>Home Page</h2> <hr/>

      <div>
        <div className="row justify-content-between align-items-center">
          <div className="col-md-4 mb-2">
            <Link to="/admin" className="btn btn-success btn-lg">Admin</Link>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              placeholder="Search by name or location..."
              className="form-control form-control-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      
        <div className="row">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((details, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                <div className="card shadow-lg h-100">
                  <div className="card-body">
                    <h5 className="card-title">User ID: {details.id}</h5>
                    <p className="card-text"><strong>Name:</strong> {details.name}</p>
                    <p className="card-text"><strong>Age:</strong> {details.age}</p>
                    <p className="card-text"><strong>Email:</strong> {details.email}</p>

                    <div className="d-flex flex-wrap gap-2 mt-3">
                      <Link to={`/read/${details.id}`} className="btn btn-warning">Read</Link>
                      {details.location && (
                        <button
                          className="btn btn-info"
                          onClick={() => openLocation(details.location)}
                        >
                          Summary
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <p>No matching users found.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
