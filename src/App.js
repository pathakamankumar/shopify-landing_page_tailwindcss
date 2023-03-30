import './App.css';
import GrowBusiness from './Component/growBusiness';
import Footer from './Component/footer';
import Support from './Component/support'
import Testimonial from './Component/testimonials';
import FreeTrial from './Component/freeTrial';

function App() {
  return (
    <>
      <FreeTrial />
      <Testimonial />
      <Support />
      <GrowBusiness />
      <Footer />
    </>
  );
}

export default App;
