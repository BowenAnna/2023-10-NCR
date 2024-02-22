// import { useState } from "react";
// // import * as userService from "../../utilities/users-services"

// const LoginForm = ({ setUser }) => {
//   const [credentials, setcredentials] = useState({
//     email: "",
//     password: ""
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setcredentials({ ...credentials, [name]: value });

//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const user = await userService.login(credentials);
//       // The promise returned by the signUp service method
//       // will resolve to the user object included in the
//       // payload of the JSON Web Token (JWT)

//     //   setUser(user)
//     // userService.login(credentials);
//     } catch (error) {
//       // An error has occurred
//       setError("Login Failed - Try Again");
//     }
//   };

//   return (
//     <div>
//       <div className="form-container">
//         <form autoComplete="off" onSubmit={handleSubmit}>
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={credentials.email}
//             onChange={handleChange}
//             required
//           />
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={credentials.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">LOGIN</button>
//         </form>
//       </div>
//       <p className="error-message">&nbsp;{error}</p>
//     </div>
//   );
// };

// export default LoginForm;

import { useState } from "react";
import * as usersService from '../../utilities/users-service'

const LoginForm = ({ setUser }) => {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setcredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await usersService.logIn(credentials);
      setUser(user);

    } catch (error) {
      setError("Login Failed - Try Again");
    }
  };

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
};

export default LoginForm;