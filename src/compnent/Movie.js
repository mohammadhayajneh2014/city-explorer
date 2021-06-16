import React from 'react';
import Movieday from './Movieday';


class Movie extends React.Component {


    render() {
        return (

            <div>



                <Movieday movieDesc={this.props.goToMovie} />



            </div>



        );
    }

}
export default Movie;
