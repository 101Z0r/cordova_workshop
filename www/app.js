window.onload = function() {
    class Greetings extends React.Component {
        render() {
            return React.createElement('h1', null, 'Hallo ' + this.props.name + '!');
        }
    }
    ReactDOM.render(
        React.createElement(Greetings, {
            name: 'FFF'
        }),
        document.getElementById('root')
    );
};