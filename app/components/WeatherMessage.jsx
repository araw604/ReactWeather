var React = require('react');


var WeatherMessage = ({temp, location}) => {

  return (
    <h3>it is {temp}F in {location}.</h3>
  )
};
module.exports = WeatherMessage;
