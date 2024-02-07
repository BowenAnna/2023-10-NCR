const React = require('react');

    class Index extends React.Component {
        render() {
            const { flights } = this.props;
            return (
                    <div>
                        <h1>All Flights:</h1>
                        <ul>
                            {flights.map((flight) => {
                                return (
                                    <li key={flight._id}>
                                        <p>
                                      {flight.airline} airlines, flight number {" "}
                                      {flight.flightNo}
                                      {/* <br/> */}
                                      {/* {flight.departs}
                                      <br/> */} departing{" "}
                                       {flight.departs.toISOString().slice(0, 10)}{' at '}{flight.departs.toISOString().slice(11, 16)} 
                                       </p>
                                      <a href={`/flights/${flight._id}`} style={{color:'green', textDecoration:"none"}}>Full flight details</a>
                                    </li>
                                );
                            })}
                           
                        </ul>
                        <a href="/flights/new" style={{color:"red", textDecoration:"none"}}>Create a new flight</a>
                    </div>
            );
        }
      }
      module.exports = Index;

