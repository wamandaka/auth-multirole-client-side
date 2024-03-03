import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:8080/users");
    setUsers(response.data);
  }

  const deleteUser = async (userId: any) => {
    await axios.delete(`http://localhost:8080/users/${userId}`);
    getUsers();
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-base-300">User List</h1>
      <Link
        to={"/users/add"}
        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700 my-4"
      >
        Add new User
      </Link>
      <div className="overflow-x-auto max-w-screen-lg">
        <table className="table bg-slate-800 rounded-md">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user: any, index) => (
              <tr key={user.uuid}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <Link
                    to={`/users/edit/${user.uuid}`}
                    className="btn btn-info"
                  >
                    Edit
                  </Link>
                  <button onClick={() => deleteUser(user.uuid)} className="btn btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
