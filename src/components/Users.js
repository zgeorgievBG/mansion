import {useState, useEffect} from 'react';
import * as authService from "../services/authService";



const Users = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        (async() => {
            const users = await authService.getUsers();
            setUsers(users);
        })()
    }, [])



    return (
      <ul
        style={{
          backgroundColor: "#140c27",
          borderRadius: "20px",
          width: "150px",
          padding: "10px",
          margin: '10px'
        }}>
        {users.map((user) => (
          <li style={{color: "white", fontSize: "20px", marginLeft: '5px'}}>{user.email}</li>
        ))}
      </ul>
    );

}

export default Users