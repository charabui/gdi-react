var React = require('react');
var ReactDOM = require('react-dom');


var Hello = React.createClass({
  render: function() {
    return (
      <div>Hello React!</div>
      );
  }
});

ReactDOM.render(
  <Hello />,
  document.getElementById('hello')
);

