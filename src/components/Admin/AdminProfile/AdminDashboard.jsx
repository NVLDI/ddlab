import React from 'react'
import Sidebar from "../SideBar/Sidebar"
import Navbar from "../Navbar/Navbar";

export default function AdminDashboard() {
  return (
    <div>
      <Navbar/>
        <div className="container">
            <Sidebar/>
        </div>
    </div>
  )
}
