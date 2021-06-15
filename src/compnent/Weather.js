import React from 'react';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {


    render() {
        return (
            <div>
               
                {this.props.goToWeather.map((item) => {
                    return (
                        <div>
                            <Card body>{item.description}</Card>
                            <Card body>{item.date}</Card>
                            {/* {<p>{item.description} </p>}
                            {<p>{item.date}</p>} */}
                        </div>
                    )
                })}


            </div>
        );
    }

}
export default Weather;