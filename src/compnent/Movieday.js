
import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';


class Movieday extends React.Component {


    render() {
        return (
            <div>
                {this.props.movieDesc.map((item) => {
                    return (
                        <div >

                            <CardColumns>
                            

                                <Card style={{ width: '18rem' }}>
                                <Card.Header>{item.original}</Card.Header>
                                    
                                    <Card.Body>
                                    <Card.Img variant="top" src={item.imagel} />
                                        <Card.Text>
                                            {item.overview}
                                        </Card.Text>
                                        
                                        <Card.Text>
                                            {item.popularity}
                                        </Card.Text>
                                        <Card.Text>
                                            {item.releasedOn}
                                        </Card.Text>

                                    </Card.Body>
                                    <Card.Footer>
                                    <Card.Text>
                                            {item.averageVotes}
                                        </Card.Text>
                                        <Card.Text>
                                            {item.totalVotes}
                                        </Card.Text>
                                    
                                    </Card.Footer>

                                </Card>
                            </CardColumns>
                        </div>
                    )
                }
                )}

            </div>
        );
    }

}
export default Movieday;
