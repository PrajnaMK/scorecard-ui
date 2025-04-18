import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserManagementPage.css'; // you can still use this for layout styling

const UserManagementPage = () => {
  const [users, setUsers] = useState([]);

 useEffect(() => {
  fetch('http://localhost:8080/users')
    .then(res => res.json())
    .then(data => {
      console.log("Raw user data:", data); // log this!
      setUsers(data);
    })
    .catch(err => console.error('Error fetching users:', err));
}, []);

  console.log("Fetched users:", users);
  return (
    <div>
      {/* Reuse animated background */}
      <div className="animated-bg"></div>

      <div className="container text-center text-white mt-5 p-4 rounded bg-opacity">
        <h2 className="fw-bold mb-4">User Management</h2>

        <table className="table table-bordered table-striped bg-white text-dark rounded">
          <thead className="fw-bold">
            <tr>
              <th>ID</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>EMAIL</th>
              <th>ROLE</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter(user => user)
              .map((user, index) => (
                <tr key={user.id || index}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
            ))}
          </tbody>
        </table>

        <a href="/home" className="btn btn-light mt-3">Back to Home</a>
      </div>
    </div>
  );
};

export default UserManagementPage;
