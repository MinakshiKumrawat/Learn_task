import React, {useState} from 'react';

export default function From(){
  const [state, setState] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };
  
  const emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
  const handleSubmit = (event) => {
    if((state.name == "") || (state.email == "") || (state.password == ""))
    {
      alert("Please Fill All Required Fields ");
      event.preventDefault();
    }    
    else 
    if (!state.email.length) {
      alert('Please Enter Valid Email');
      event.preventDefault();
    } 
    else if (!emailRegex.test(state.email)) {
      alert('Please Enter Valid Email');
      event.preventDefault();
    }
    else if ((state.password.length <= 7) || (state.password.length >= 13)){
      alert('Please Enter Valid Password Minimum Length is 8 and Maximum Length is 12');
      event.preventDefault();
    }
   else{
    event.preventDefault();
    console.log(state);
    console.log(`Name: `+ state.name +`, Email: ` + state.email + `, Password: ` + state.password + ``);
    alert(`Successfully Form Submit. Your Name: `+ state.name +`, Email: `+ state.email +``);
   }
  };

      return (
       <div className="container">
         <div className="signup-block">
           <div className="logo-div">
              <h3>Sign Up</h3>
           </div>
           <div className="row text-field-block">
             <form  onSubmit={handleSubmit} method="post">
             <div className="col-md-12">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Full Name*"  value={state.name}
                onChange={handleInputChange} name="name"/>
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email*"  value={state.email}
                onChange={handleInputChange} name="email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Password*"  value={state.password}
                onChange={handleInputChange} name="password" />
              </div>
              <div className="form-group">
               <button>Sign Up</button>
             </div>
             </div>
             </form>
           </div>
         </div>
       </div>
)
}


