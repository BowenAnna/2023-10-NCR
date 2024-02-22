import SignUpForm from "../components/SignUpForm/SignUpForm"
import LoginForm from "../components/LoginForm/LoginForm"
export default function Auth({setUser}){
return(
    <div>
        <h1>Auth Page</h1>
        <SignUpForm setUser={setUser}/>
        <LoginForm setUser={setUser}/>
    </div>
    )
}
