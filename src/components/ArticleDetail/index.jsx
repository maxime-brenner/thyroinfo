import woman from '../../assets/general.jpg'
import { Row, Col } from 'reactstrap';


function ArticleDetail () {
    return(
        <main>
            <header className="catch-line">
                <Row className="inside-container">
                    <Col>
                        <img className='header-img' src={woman}/>
                    </Col>
                    <Col>
                        <h1>Titre</h1>
                        <p className="headline-author">Maxime</p>
                        <p className="headline-posted">27-04-2023</p>
                        <p className="headline-tag"></p>
                    </Col>
                </Row>
            </header>
            <article>
                Bla bla
            </article>
        </main>
    )
}

export default ArticleDetail