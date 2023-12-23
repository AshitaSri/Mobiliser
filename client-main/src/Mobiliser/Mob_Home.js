import React from 'react';
import Sidebar from './Sidebar'; // Assuming Sidebar component is in the same directory
import Navbar from './Navbar'; // Assuming Navbar component is in the same directory
import './Mob_Home.css'; 
import './Sidebar.css';
import './Navbar.css'; 

function Mob_Home() {
    return (
        <div>
            <Sidebar />
            <div className="mainContent">
                <Navbar />
                {/* Add your mobile page specific content here */}
                <div className="pageContent">
                    {/* Your mobile home page content goes here */}
                </div>
            </div>
        </div>
    );
}

export default Mob_Home;
