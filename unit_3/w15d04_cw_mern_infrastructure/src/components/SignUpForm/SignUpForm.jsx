import { useState } from 'react';
import {signUp} from "../../utilities/users-service"

const SignUpForm = ({setUser}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirm: ""
    })

    const [error, setError] = useState("")

    const handleChange = e => {
        const { name, value } = e.target

        setFormData({...formData, [name]: value})

        // setFormData(prevFormData => {
        //     return (
        //         {
        //             ...prevFormData,
        //             [name] : value
        //         }
        //     )
        // })
    }

    const handleSubmit =async (e) => {
        e.preventDefault()
        try {
          // const  user={
          //   name: formData.name,
          //   email: formData.email,
          //   password: formData.password

          //code below is a cleaner code
          console.log(formData);
          const userData ={...formData}
          delete userData.confirm;
          // console.log('hi', userData)
          //   console.log(userData);
          // The promise returned by the signUp service method
          // will resolve to the user object included in the
          // payload of the JSON Web Token (JWT)
          const user = await signUp(formData);
          // Baby step!
          // console.log(user);
          setUser(user);
        } catch(error) {
            setError("Sign up failed, try again");
        }
    }

    const disable = formData.password !== formData.confirm;

    return (
        <div>
         <div className="form-container">
           <form autoComplete="off" onSubmit={handleSubmit}>
             <label>Name</label>
             <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label>Confirm</label>
            <input
              type="password"
              name="confirm"
              value={formData.confirm}
              onChange={handleChange}
              required
            />
            <button type="submit" >
              SIGN UP
            </button>
          </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div>
    )
}

export default SignUpForm


// import { Component } from "react";

// export default class SignUpForm extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//     confirm: "",
//     error: ""
//   };


//   handleChange=(evt)=>{
//     //e or evt or event
//     console.log(evt.target.value)
//     // console.log(evt.target.value)
//     this.setState( //must use setState
//         {
//             [evt.target.name]: evt.target.value, //
//             error: " "
//         }
//     )
//   }

//   handleSubmit=(evt)=>{
// // evt.preventDefault();
// // console.log(this.state, "hi mishelle")
//     evt.preventDefault()
//     try{
//       console.log(FormData);
//       // const formData = {...this.state}
//       // this.props.setUser(formData)
//     }
//     catch(error){
//       this.setState()
//       console.log("Sign up fail, try again", error)
//       // this.setState({error:"Sign Up Failed"})
//       // alert(JSON.stringify(this.state));
//     }
//   }
  
//   render() {
//     // "" !== ""
//     // const disable=this.state.password !==this.state.confirm;
//     const disable = this.state.password !== this.state.confirm;
//     console.log(disable);
//     console.log(this.state)
//     return (
//       <div>
//         <h1>Sign Up Form</h1>
//         <div>
//           <div className="form-container">
//             <form autoComplete="off" onSubmit={this.handleSubmit}>
//               <label>Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={this.state.name}
//                 onChange={this.handleChange}
//                 required
//               />
//               <label>Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={this.state.email}
//                 onChange={this.handleChange}
//                 required
//               />
//               <label>Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={this.state.password}
//                 onChange={this.handleChange}
//                 required
//               />
//               <label>Confirm</label>
//               <input
//                 type="password"
//                 name="confirm"
//                 value={this.state.confirm}
//                 onChange={this.handleChange}
//                 required
//               />
//               <button type="submit" disabled={disable}>
//                 SIGN UP
//               </button>
//             </form>
//           </div>
//           <p className="error-message">&nbsp;{this.state.error}</p>
//         </div>
//       </div>
//     );
//   }
// }
