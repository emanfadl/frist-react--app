
import Navs  from './../../components/Navs';
import Offershome from './../../components/Offershome'
import Footer from './../../components/Footer'
import About from './../../components/About'
import Services from './../../components/Services'

function Home() {
  return (
    <div className="Home">
      <Navs />
    <Offershome />
    <About />
    <Services />
    <Footer />
    </div>
  );
}

export default Home;
