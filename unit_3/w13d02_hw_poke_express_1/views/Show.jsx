const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

    class Show extends React.Component {
        render() {
            const { pokemon } = this.props;
            return (
                    <div >
                        <h1 style={myStyle}>Gotta Catch 'Em All!</h1>
                                        <h2>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h2>
                                        <br/>
                                        <img src={pokemon.img + ".jpg"} alt="pokemon image"/>
                                        <br/>
                                        <a href="/pokemons" style={{color:"red"}}>Go back</a>
                    </div>
            );
        }
      }
      module.exports = Show;
