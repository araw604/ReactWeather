var React = require('react');
var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About </h1>
      <p>This is a weather app built on React. </p>
      <p>Here are some of the tools i used</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>- This was the javascript framework used
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather maps</a>
            - Used open weather maps API to search for weather using city name
        </li>
      </ul>
    </div>
  )
};



module.exports = About;
