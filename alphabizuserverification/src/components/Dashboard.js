import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Logout from './Logout';
import "../styles/Dashboard.css"; 

const Dashboard = () => {
    const userContext = useContext(UserContext);
    if (!userContext) {
        return <div>Loading...</div>;
    }

    const { user } = userContext;
    return (
        <div className="dash__container">
           
            <Logout />
          
            <div className="article__container">
                <div className="article">
                    <h2>welcome back,</h2>
                    <h1>{user?.name}</h1>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
