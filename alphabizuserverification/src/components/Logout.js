
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'; 
import { useContext } from 'react'

const Logout = () => {
    const navigate = useNavigate();

    // Access logout function from context
    const userContext = useContext(UserContext);

    if (!userContext) {
        console.error('UserContext is not available');
        return null;
    }

    const { logout } = userContext;

    // Function to handle logout action
    const handleLogout = async () => {
        try {
            await logout();
            localStorage.removeItem('token');
            navigate('/'); 
        } catch (error) {
            console.log('Error during logout:', error);
        }
    };

    return (
        <div className="logout__container">
            <button onClick={handleLogout} className="confirm__button">
                Logout
            </button>
        </div>
    );
};

export default Logout;