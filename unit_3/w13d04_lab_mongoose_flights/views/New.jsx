const React = require('react');

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>Add Flight</h1>
        <form action="/flights" method="POST">
          Airline: <select name="airline">
          <option value="American">American</option>
          <option value="Southwest">Southwest</option>
          <option value="United">United</option>
            </select><br/><br />
          Flight No: <input type="number" name="flightNo" min="10" max="9999" /><br/><br/>
          Departure date: <input type="datetime-local" name="departure"/><br/><br/>
          
          Departure airport: <select name="airport"  defaultValue={this.props.departureAirport} >
          <option value="AUS">AUS</option>
          <option value="DAL">DAL</option>
          <option value="LAX">LAX</option>
          <option value="SAN">SAN</option>
          <option value="SEA">SEA</option>

            {this.props.departAirport}</select><br/><br/>

           <input type="submit" name="" value="Create Flight"/>
        </form>
     </div>
    )
  }
}

module.exports = New;