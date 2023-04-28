import './App.css';
import GrowBusiness from './Component/growBusiness';
import Footer from './Component/footer';
import Support from './Component/support'
import Testimonial from './Component/testimonials';
import FreeTrial from './Component/freeTrial';
import BusinessOperation from './Component/businessOperation';
import CommerceCommunity from './Component/commerceCommunity';
import OnlineStore from './Component/onlineStore';
import SalesChannel from './Component/salesChannel';

function App() {
  return (
    <>
      <CommerceCommunity />
      <OnlineStore />
      <SalesChannel/>
      <BusinessOperation />
      <FreeTrial />
      <Testimonial />
      <Support />
      <GrowBusiness />
      <Footer />
    </>
  );
}

export default App;
