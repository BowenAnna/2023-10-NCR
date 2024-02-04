const React = require('react');

class Index extends React.Component {
    render() {
        const { marioCharacters } = this.props;
        return (
                <div>
                    <h1>Mario Characters Index Page</h1>
                    <nav>
                    <a href="/characters/new">Create a New Fruit</a>
                    </nav>
                    <ul>
                        {marioCharacters.map((character, i) => {
                            return (
                                <li key={i}>
                                    <a href={`/characters/${i}`}>
                                        {character.name}'s favorite color is
                                    </a>{' '}
                                    is {character.color} and he/she <br></br>
                                    {character.mainCharacter
                                        ? ` is "Mario's" main character`
                                        : ` is not "Mario's" main character`}
                                    <br />
                                </li>
                            );
                        })}
                    </ul>
                </div>
        );
    }
  }
  module.exports = Index;