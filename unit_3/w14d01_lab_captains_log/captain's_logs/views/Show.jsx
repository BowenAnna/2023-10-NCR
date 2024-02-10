const React = require('react');
const moment = require("moment")

class Show extends React.Component {
  render() {
    const log = this.props.log
    return (
    <div>
      <h1> Log Page </h1>
        Title: {log.title} <br/>
        Entry: {log.entry} <br/>
        {log.shipIsBroken? 'The ship is broken!' : 'The ship is not broken!'}
        <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
        <a href="/logs">Back to the main page</a>
    </div>
    );
  }
}

module.exports = Show;