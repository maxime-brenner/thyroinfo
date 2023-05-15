import woman from '../../assets/general.jpg'
import '../../style/style.css';
import { Row, 
         Col,
         Card,
         CardBody,
         CardTitle,
         CardSubtitle,
         CardText,
         Button } from 'reactstrap';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function Home () {
    return (
        <main>
            <section className="g-container catch-line">
                <div className='inside-container'>
                    <h1>Thyro Info</h1>
                    <p>Tout sur la thyroïde</p>
                </div>
            </section>
            <section className='g-container' >
                <div className='inside-container'>
                    <MenuBookIcon />
                    <h2>Un autre titre</h2>
                </div>
            </section>            
            <section className='g-container catch-line' >
                <div className='inside-container'>
                    <h2>Un titre</h2>
                    <h2>Un autre titre</h2>
                </div>
            </section>            
            <section className='g-container' >
                <div className='inside-container'>
                    <Row>
                        <Col>
                            <Card>
                                <img className='card-img' src={woman} />
                                <CardBody>
                                    <CardTitle>
                                        Article 1
                                    </CardTitle>
                                    <CardSubtitle>
                                        Sous-titre 1
                                    </CardSubtitle>
                                    <CardText>
                                        Lorem ipsum...
                                    </CardText>
                                </CardBody>
                                <Button href={'/test'} className="btn btn-warning">Voir</Button>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <img className='card-img' src={woman}  />
                                <CardBody>
                                    <CardTitle>
                                        Article 1
                                    </CardTitle>
                                    <CardSubtitle>
                                        Sous-titre 1
                                    </CardSubtitle>
                                    <CardText>
                                        Lorem ipsum...
                                    </CardText>
                                </CardBody>
                                <Button className="btn btn-warning">Voir</Button>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <img className='card-img' src={woman}  />
                                <CardBody>
                                    <CardTitle>
                                        Article 1
                                    </CardTitle>
                                    <CardSubtitle>
                                        Sous-titre 1
                                    </CardSubtitle>
                                    <CardText>
                                        Lorem ipsum...
                                    </CardText>
                                </CardBody>
                                <Button className="btn btn-warning">Voir</Button>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <img className='card-img' src={woman} />
                                <CardBody>
                                    <CardTitle>
                                        Article 1
                                    </CardTitle>
                                    <CardSubtitle>
                                        Sous-titre 1
                                    </CardSubtitle>
                                    <CardText>
                                        Lorem ipsum...
                                    </CardText>
                                </CardBody>
                                <Button className="btn btn-warning">Voir</Button>
                            </Card>
                        </Col>
                        
                    </Row>
                </div>
            </section>            
        </main>
        
    )
}

export default Home