var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
    return (
      <div>
        <Navigation/>
        <div className="grid-x">
          <div className="medium-6 large-4 cell small-centered">
            {props.children}
          </div>
        </div>
      </div>
    );
};

module.exports = Main;
