import React from 'react';
import Card from 'react-bootstrap/Card';

class Movie extends React.Component {


    render() {
        return (
            <div>
              {this.props.goToMovie.map((item) => {
          return (
            <div >
              {
                  <Card body>{item.original}</Card>
                // <p>
                //   {item.original}
                // </p>
              }
               <Card body>{item.overview}</Card>
               <Card body>{item.averageVotes}</Card>
               <Card body>{item.totalVotes}</Card>
               <Card body>{item.imagel}</Card>
               <Card body>{item.popularity}</Card>
               <Card body>{item.releasedOn}</Card>

              {/* {<p>{item.overview}</p>}
              {<p>{item.averageVotes}</p>}
              {<p>{item.totalVotes}</p>}
              {<p>{item.imagel}</p>}
              {<p>{item.popularity}</p>}
              {<p>{item.releasedOn}</p>} */}
            </div>
          )
            }
        )}

            </div>
        );
    }

}
export default Movie;