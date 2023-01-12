import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Prenavbar from './components/Prenavbar';
import Navbar from './components/Navbar';
import NavOptions from './components/NavOptions';
import Slider from './components/Slider';
import data from './data/data.json';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAcessoriesMenu from './components/HotAcessoriesMenu';
import HotAccessories from './components/HotAccessories';
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
     <Prenavbar />
     <Navbar />
     <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />
     <Slider start={data.banner.start}/>
     <Offers offer={data.offer}/>
     <Heading text="STAR PRODUCTS"/>
     <StarProduct starProduct={data.starProduct} />
     <Heading text="HOT ACCESSORIES" />
     <HotAcessoriesMenu />
     <Routes>
     <Route path='/music' element={<HotAccessories  music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}></Route>
      <Route path='/smartdevices' element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}>
     </Route>
     <Route path='/home' element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}></Route>
     <Route path='/lifestyles' element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>}></Route>
     <Route path='/mobileaccessories' element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}></Route>
     </Routes>
     <Heading text={"PRODUCT REVIEWS"} />
     <ProductReviews productReviews={data.productReviews} />
     <Heading text={"VIDEOS"} />
     <Videos videos={data.videos}/>
     <Heading text={"IN THE PRESS"} />
     <Banner banner={data.banner}/>
     <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
