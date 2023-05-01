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
import ReliableCheckout from './Component/reliableCheckout';
import PointSale from './Component/pointSale';
import MarketingTools from './Component/marketingTools';
import GloveSection from './Component/glovSection';
import GlobalCommerce from './Component/globalCommerce';

function App() {
  return (
    <>
    <GlobalCommerce/>
      <GloveSection />
      <CommerceCommunity />
      <OnlineStore />
      <SalesChannel />
      <ReliableCheckout />
      <PointSale />
      <MarketingTools />
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
