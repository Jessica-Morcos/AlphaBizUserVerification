import React from "react";
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { toast } from 'react-hot-toast';
import axios from "axios";
import Logout from './Logout'

const Dashboard = () => {
    const userContext = useContext(UserContext);
    if (!userContext) {
        return <div>Loading...</div>;
      }
    
      const { user } = userContext;
    return (
        <div className="dash__container">
          <div className="article__container">
            <div className="article">
              <h2>welcome back,</h2>
              <h1>{user?.name}</h1>
            </div>
          </div>
          <Logout />
        </div>
      )
}

export default Dashboard