import './home.css'
import HamedImage from '../Routes/Hamed.jpeg'
const Home = () => {
  return (
    <div className='container'>
  <h1>Home</h1>
  <div className="card">
  <img src={HamedImage} alt="Hamed" />
  <h1>Hamedullah Syed</h1>
  <p className="title">Certified Full-Stack Developer</p>
  <p>Coding in Color Graduate</p>
  <a href="#"><i className="fa fa-dribbble"></i></a>
  <a href="#"><i className="fa fa-twitter"></i></a>
  <a href="#"><i className="fa fa-linkedin"></i></a>
  <a href="#"><i className="fa fa-facebook"></i></a>
  <a href="/contact">   <p><button>Contact</button></p>
</a>
</div>
  </div>  );
}
 
export default Home;

