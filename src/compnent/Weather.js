import React from 'react';
import Weatherday from './Weatherday';


class Weather extends React.Component {


    render() {
        return (

            <div>



                <Weatherday WeatherDesc= {this.props.goToWeather}/>



            </div>



        );
    }

}
export default Weather;
