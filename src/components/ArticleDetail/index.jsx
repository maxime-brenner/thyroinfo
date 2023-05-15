import woman from '../../assets/general.jpg'
import { Row, Col } from 'reactstrap';
import { faker } from '@faker-js/faker';


function ArticleDetail () {
    const title = faker.lorem.sentence(10);
    const body = faker.lorem.paragraphs(5, '\n');

    return(
        <main>
            <header className="catch-line">
                <Row className="inside-container">
                    <Row>
                        <Col className="col-lg-4">
                            <img className='header-img' src={woman}/>
                        </Col>
                        <Col className="col-lg-8">
                            <h1>{title}</h1>
                            <p className="headline-author">Maxime</p>
                            <p className="headline-posted">27-04-2023</p>
                            <p className="headline-tag"></p>
                        </Col>
                    </Row>
                </Row>
            </header>
            <Row>
                <div className='article-wrapper'>
                    <Col className='col-lg-1'>
                    </Col>
                    <Col className='article-body col-lg-9'>
                        <article>
                            {body}
                        </article>            
                    </Col>
                    <Col className='aside-article col-lg-3'>
                        <aside>
                            <div>
                                <h2>
                                    Derniers articles
                                </h2>
                            </div>
                        </aside>
                    </Col>
                </div>
            </Row>
            
                    
        </main>
    )
}

export default ArticleDetail