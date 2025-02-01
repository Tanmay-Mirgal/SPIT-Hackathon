import React, { useState } from "react";


const Schedule = () => {
  const [formData, setFormData] = useState({
    username: "",
    roomId: "",
    role: "user",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    
    // Add logic to handle form submission
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6 w-full h-full">
      <div className="flex bg-white p-5 rounded-lg shadow-md w-3/4 h-full">
        <div className="w-1/2 p-4 h-full flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-4">Join a Room</h2>
          <form onSubmit={handleSubmit} className="h-full flex flex-col justify-center">
            <label className="block mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              required
            />

            <label className="block mb-2">Room ID</label>
            <input
              type="text"
              name="roomId"
              value={formData.roomId}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              required
            />

            <label className="block mb-2">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
            >
              <option value="user">User</option>
              <option value="doctor">Doctor</option>
            </select>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-1/2 flex items-center justify-center h-full">
          <img src="./images/meeting.jpg" alt="Meeting" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
