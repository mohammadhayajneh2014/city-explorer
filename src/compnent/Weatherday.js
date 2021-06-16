import React from 'react';
import Card from 'react-bootstrap/Card';

class Weatherday extends React.Component {


    render() {
        return (
            <div>

                {this.props.WeatherDesc.map((item) => {
                    return (
                        <div>

                            {/* <Card body>{item.description}</Card>
                            <Card body>{item.date}</Card> */}
                            {/* {<p>{item.description} </p>}
                            {<p>{item.date}</p>} */}
                            
                            <ul class="list-group">
                            <li class="list-group-item list-group-item-dark">{item.date}</li>
                            <li class="list-group-item list-group-item-primary">{item.description}</li>
                            </ul>
                        </div>
                    )
                })}


            </div>
        );
    }

}
export default Weatherday;