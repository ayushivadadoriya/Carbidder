import React  from 'react'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignUp from './Signup';
import { Link } from 'react-router-dom';

const Profile = () => {

    return (
        <>
            <div className="iconuser icon">
                <Link to="./signup"  onClick={() => <SignUp />}><FontAwesomeIcon icon={faUser} color="black" /></Link>
            </div>
            

        </>
    )
}

export default Profile
