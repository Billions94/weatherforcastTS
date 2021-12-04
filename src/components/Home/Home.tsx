import { Row, Col } from "react-bootstrap";
import Search from "./Search";
import { useSelector } from "react-redux";
import "./styles.css";
import WeatherForcast from "./WeatherForcast";
import Favorite from "./Favorite";

const Home = () => {

    const { data: {data} } = useSelector(state => state)

  return (
    <div className=" mx-auto">
      <Search />
      <Row className="justify-content-around customMap mx-auto mt-5">
        <Col md={5} className='mr-5'>
            <WeatherForcast />
        </Col>
        <Col md={5} className='ml-5'>
        <div>
            {data ?
            <iframe title='#'                                                                //lon   //lat
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19988.66471838222!2d${data.coord.lon}!3d${data.coord.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1638529771795!5m2!1sen!2sde`}
            width={530}
            height={366}
            style={{ border: 0, borderRadius: '20px'}}
            allowFullScreen
            loading="lazy"
            />
            :
            <iframe title='#'                                                                //lon   //lat
            src={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19988.66471838222!2d6.73742745!3d51.226755399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1638529771795!5m2!1sen!2sde"}
            width={530}
            height={366}
            style={{ border: 0, borderRadius: '20px'}}
            allowFullScreen
            loading="lazy"
          />
            }
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={10}>
          <Favorite />
        </Col>
        <Col md={4} className='mt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quam
          dolor, obcaecati placeat rerum suscipit odit deleniti magni commodi. A
          cumque vero, animi eligendi odit tempore? Itaque dicta aut esse. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Harum quam dolor,
          obcaecati placeat rerum suscipit odit deleniti magni commodi. A cumque
          vero, animi eligendi odit tempore? Itaque dicta aut esse. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Harum quam dolor,
          obcaecati placeat rerum suscipit odit deleniti magni commodi. A cumque
          vero, animi eligendi odit tempore? Itaque dicta aut esse. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Harum quam dolor,
          obcaecati placeat rerum suscipit odit deleniti magni commodi. A cumque
          vero, animi eligendi odit tempore? Itaque dicta aut esse.
        </Col>
      </Row>
    </div>
  );
};

export default Home;
