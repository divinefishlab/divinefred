import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle, TypeH2} from "react-bootstrap-icons"
import logo from '/images/logo.png';
// import pepeHigh from '/images/pepeHigh.png';
// import HomeExperience from "./HomeExperience";
// import LogoShowcase from "./LogoShowcase";
import { useNavigate } from "react-router-dom";
import { RickExperience } from "./RickExperience";
// import AnimatedCounter from "./AnimatedCounter";

 const RickBanner=()=>{
    const navigate = useNavigate();
    return (
        <section className="bannerrick" id='about'> 
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={6}>
                {/* <span className="tagline">Bigger  Better Stronger</span> */}
                <h1>{'Meet Rick'}<span className="wrap"></span></h1>
                <h1>{'The Scientist!'}<span className="wrap">!</span></h1>
                <p>Rick was a brilliant scientist who invented a time travel device. However, the device had its limitations—it could only take him into the future, never into the past. Confident in his invention, Rick decided to explore what lay ahead.

When $FRED, a new cryptocurrency, emerged, Rick dismissed it as just another rug pull scheme, like many others before it. He didn't invest and moved on, certain he'd made the wise choice.

Years later, Rick traveled to the future, only to discover that $FRED had become a global sensation—a once-in-a-lifetime opportunity that he had completely overlooked. Now old, frustrated, and poor, Rick lived with the regret of his skepticism.

The lesson? Don't be like Rick. Keep an open mind, and don't let doubt make you miss out on potential opportunities!</p>
                {/* <button className="pointer-events-auto" onClick={() => {navigate('/game')}} >Let's Play<ArrowRightCircle size={25}/></button> */}
                </Col>
                <Col xs={12} md={6} xl={6}>
                {/* <img src={logo} alt="Header img"/> */}

                <div>
                    <RickExperience/>
                </div>

                {/* <figure>
                <div className="hero-3d-layout ">
                <HomeExperience/>
                </div>
                </figure> */}

                </Col>
            </Row>
        </Container>
        
      
        </section>
        
        
    )
 }
 export default RickBanner;