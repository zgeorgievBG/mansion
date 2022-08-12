import {useState, useEffect} from 'react';
import * as authService from "../services/authService";
import UserCard from './UserCard';



const Users = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        (async() => {
            const users = await authService.getUsers();
            setUsers(users);
        })()
    }, [])

    return(
      <div className="cardContainer">
        {users.map(user => <UserCard user={user}/>)}
      </div>
    )

}

export default Users