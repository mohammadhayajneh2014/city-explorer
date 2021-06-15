import React from 'react'

 class Weather extends React.Component {


    render() {
        return(
            <div>
                {<p>{this.props.goToWeather.description} </p>}
                 {<p>{this.props.goToWeather.date}</p>}
                
            </div>
        );
    }
      
}
export default Weather;