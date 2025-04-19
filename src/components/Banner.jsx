import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle, TypeH2} from "react-bootstrap-icons"
import logo from '/images/logo.png';
// import pepeHigh from '/images/pepeHigh.png';
// import HomeExperience from "./HomeExperience";
// import LogoShowcase from "./LogoShowcase";
import { useNavigate } from "react-router-dom";
import { FishExperience } from "./FishExperience";
// import AnimatedCounter from "./AnimatedCounter";

 const Banner=()=>{
    const navigate = useNavigate();
    return (
        <section className="banner" id="home"> 
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={6}>
                <span className="tagline">Run Jump Earn Play !</span>
                <h1>{'Fred The Fish'}<span className="wrap">!</span></h1>
                <p>Fred the Fish is not just a quirky name in the crypto world—it's a symbol of innovation and community-driven values. 
                As a cryptocurrency, Fred the Fish aims to combine the fun side of meme coins with a deeper purpose</p>
                <button className="pointer-events-auto " onClick={() => {navigate('/game')}} >
                    Let's Play
                    <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={6}>
                {/* <img src={logo} alt="Header img"/> */}

                <div>
                    <FishExperience/>
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
 export default Banner;