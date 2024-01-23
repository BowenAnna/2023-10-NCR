import { useState } from "react";

function Form(props){
    const[formData, setFormData]=useState({
        searchterm: ""
    })
    const handleChange=(event)=>{
        setFormData({...formData,[event.target.name]:event.target.value})}

        const handleSubmit=(event)=>{
            event.preventDefault()
            props.moviesearch(formData.searchterm)
        }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                name="searchterm"
                onChange={handleChange}
                value={formData.searchterm}/>
                
                <input type="submit" value="find movie"/>
            </form>
{/* <h1>The Form Component!</h1> */}
</div>
    )
}
export default Form;