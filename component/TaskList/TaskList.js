'use client'
import axios from 'axios';
import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { AiFillDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import EditUser from '../EditUser/EditUser';
 

const TaskList = ({ userDetail, setUserDetails }) => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState("");
 

  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`/api/delete/${id}`);
      setUserDetails((prev)=>prev.filter((row)=> row._id !== id))
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

    const handleModalOpen = (id) => {
      setShowModal(true);
       setUser(id);
    };

    const handleModalClose = () => {
      setShowModal(false);
    };

  return (
    <>
      <Table className="mt-8 md:flex-row">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {userDetail.map((data, index) => (
          <tbody key={data._id}>
            <tr>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td onClick={() => handleModalOpen(data._id)}>
                <CiEdit size={25} className="cursor-pointer text-blue-800" />
              </td>
              <td onClick={() => deleteUser(data._id)}>
                <AiFillDelete
                  size={25}
                  className="cursor-pointer text-red-700"
                />
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
      {showModal && (
        <EditUser
          id={user}
          showModal={showModal}
          handleModalClose={handleModalClose}
          setUserDetails={setUserDetails}
        />
      )}
    </>
  );
};

export default TaskList