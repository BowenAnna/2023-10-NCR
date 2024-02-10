const React = require('react');


class Index extends React.Component {
  render() {
    const { logs } = this.props;
    return (
      <div>
        <ul>
          {logs.map((log, i) => {
            return (
              <li key={i}>
                Title: <a href={`/logs/${log._id}`}>
                  {log.title}
                </a>{' '}
                 <br/>
                Ship Information: {log.shipIsBroken
                  ? 'The ship is broken!'
                  : 'The ship is not broken!'
                }
                <br/>
              
                <form
                  action={`/logs/${log._id}?_method=DELETE`}
                  method="POST"
                >
                  <input
                    type="submit"
                    value="DELETE"
                  />
                </form>
                <form
                  action={`/logs/${log._id}`}
                >
                  <input
                    type="submit"
                    value="EDIT"
                  />
                </form>
          

                {/* <button><a href={`/logs/${log._id}/edit`}>Edit This Log</a></button> */}
              </li>
            );
          })}
        </ul>
        <a href="/logs/new">Create a New Log</a>
      </div>
    );
  }
}

module.exports = Index;