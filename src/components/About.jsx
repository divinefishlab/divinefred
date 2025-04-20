import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle, TypeH2} from "react-bootstrap-icons"
import logo from '/images/logo.png';
// import pepeHigh from '/images/pepeHigh.png';
// import HomeExperience from "./HomeExperience";
// import LogoShowcase from "./LogoShowcase";
import { useNavigate } from "react-router-dom";
import { RickExperience } from "./RickExperience";
// import AnimatedCounter from "./AnimatedCounter";

 const About=()=>{
    const navigate = useNavigate();
    return (
        <section className="bannerrick" id='#'> 
        <Container>
            <Row className="align-items-center">
                <Col xs={12} m1d={12} xl={12}>
                {/* <span className="tagline">Bigger  Better Stronger</span> */}
                <h1>{'About us'}<span className="wrap"></span></h1>
                {/* <h2>{'About Fred the Fish Coin'}<span className="wrap">!</span></h2> */}
                <p>
Welcome to the deep end of decentralized fun.

Fred the Fish Coin(#FRED) isn’t just another memecoin — it’s a movement. Born in the bubbling depths of crypto culture, Fred represents the underdog, the dreamer, and the fish who dared to moon. With a community-first mindset and a play-to-earn ecosystem in the works, Fred’s not just swimming in circles — he’s building waves.

Whether you’re here to HODL, trade, or just vibe with the gang, Fred’s reef is open to all. Just remember: in the ocean of DeFi, only the boldest fish make it to the surface.

Join the school. Ride the tide. Believe in Fred.</p>
                {/* <button className="pointer-events-auto" onClick={() => {navigate('/game')}} >Let's Play<ArrowRightCircle size={25}/></button> */}
                </Col>
            </Row>
        </Container>
        
      
        </section>
        
        
    )
 }
 export default About;