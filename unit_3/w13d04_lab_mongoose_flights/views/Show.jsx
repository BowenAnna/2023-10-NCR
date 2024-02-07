// const React = require('react');

// const myStyle = {
//     color: '#ffffff',
//     backgroundColor: '#000000',
//     };

//     class Show extends React.Component {
//         render() {
//             const { pokemon } = this.props;
//             return (
//                     <div >
//                         <h1 style={myStyle}>Gotta Catch 'Em All!</h1>
//                                         <h2>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h2>
//                                         <br/>
//                                         <img src={pokemon.img + ".jpg"} alt="pokemon image"/>
//                                         <br/>
//                                         <a href="/pokemons" style={{color:"red"}}>Go back</a>
//                     </div>
//             );
//         }
//       }
//       module.exports = Show;


const React = require('react');

class Show extends React.Component {
  render() {
    const flight = this.props.flight
   
    return (
    <div>
      <h1> Airline Details </h1>
         {flight.airline} {flight.flightNo} Departure time: {flight.departs.toISOString().slice(0, 10)}{' '}{flight.departs.toISOString().slice(11,16)} Departure airport: {flight.airport}
        <br/> 
   <a href={`/flights/${flight._id}/edit`} style={{color:"green", textDecoration:"none"}}>Add Destination Details</a>
  <div><a href="/flights" style={{color:"red", textDecoration:"none"}}>Back to the main</a></div>
    </div>
    );
  }
}

module.exports = Show;