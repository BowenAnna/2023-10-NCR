const React = require('react');

class New extends React.Component{
render(){
    return(
        <div>
            <h1>New Pokemon</h1>
            <form action="/pokemons" method="POST">
                Name: <input type="text" name="name"/><br/>
                Image URL: <input type="text" name="img"/><br/>
                <input type="submit" name="" value="New Pokemon"/>
            </form>
        </div>
    )
}
}
module.exports=New;