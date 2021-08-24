import React , {Component} from "react";
import axios from 'axios';

class ListUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {}
        }
       
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            this.successShow(response);
        })
        .catch((error) => {
            this.successShow(error);
        });
        console.log("componetdidmount");
    }

   
    successShow(response) {
        this.setState({
            users: response.data
        });
    }

    render() {
        return (
            <div>
              <h3>User list using class component</h3>
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
                 {console.log(this.state.users)}
                 {console.log(this.state.users.length)
                 }
                {this.state.users.length > 0 ? (
                    this.state.users.map((user) =>
                    <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.name}</td>
                        <td>{user.address.street}</td>
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
        );
    }
}


export default ListUser;