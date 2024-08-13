import Hero from "../components/Hero"
import Banner from "../components/Banner"
import BannerReverse from "../components/BannerReverse"
import Newsletter from "../components/NewsLetter"
import Footer from "../components/Footer"
import Banner1 from "../img/bannerright.jpg"
import Banner2 from "../img/bannerright.jpg";
import ProudOf from "../components/ProudOf"
import Trending from "../components/Trending"


const Home = () => {
    return(
        <>
        <Hero />
        <ProudOf />
      <Banner
        title="Creative harmonious living"
        text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        img={Banner1}
      />
      <Trending />
      <BannerReverse
        title="Comfortable & Elegante Living"
        text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        img={Banner2}
      />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home