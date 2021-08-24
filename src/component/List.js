import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function List(){
    const initialUserState = {
        users:{},
        loading:true,
    }

    const[users,setUsers] = useState(initialUserState)
    
    useEffect(() => {
        const getUser = async () =>{
            const {data} = await axios(`https://jsonplaceholder.typicode.com/users`)
            setUsers(data);
        }
        getUser()
    },[])

    return users.loading ? (
            <div>Loading...</div>
        ):(
       <div className="container">
         <div className="main-user">
           <div className="tab">
            <div className="userlist">
            <table className="table">
             <thead>
                <tr>
                    <th>User Name</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Zipcode</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Company Name</th>
                    <th>Website</th>
                </tr>
             </thead>
             <tbody>
                {users.length > 0 ? (
                    users.map((user) =>
                    <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.name}</td>
                        <td>{user.address.street}, {user.address.suite}</td>
                        <td>{user.address.city}</td>
                        <td>{user.address.zipcode}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.company.name}</td>
                        <td>{user.website}</td>

                    </tr>
                    )
                    ):
                    (
                        <tr>
                        <td colSpan={3}>No User Found.</td>
                    </tr>
                    )
                    }
             </tbody>
            </table>
         </div>
         </div>
     </div>
</div>
)
}


