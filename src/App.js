import "./App.css";
import { Routes, Route } from "react-router-dom";
import Aside from "./component/aside/Aside";
import Footer from "./component/footer/Footer";
import Nav from "./component/nav/Nav";
import Section from "./component/section/Section";
import Home from "./Page/home/Home";
import Category from "./Page/category/Category";
import Karaoke from "./Page/karaoke/Karaoke";
import Follow from "./Page/follow/Follow";
import Radio from "./Page/radio/Radio";
import Newmusic from "./Page/newmusic/Newmusic";
import Zingchart from "./Page/zingchart/Zingchart";
import Ratings from "./Page/ratings/Ratings";
import Mv from "./Page/mv_video/Mv";
import Individual from "./Page/individual/Individual";

function App() {
 return (
  <div className="zing_mp3">
   <div className="zing_mp3-main">
    <div className="zing_mp3-main_nav">
     <Nav />
    </div>

    <div className="zing_mp3-main_section">
     <Section />
     <Routes>
      <Route path="/ca_nhan" element={<Individual />} />
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/karaoke" element={<Karaoke />} />
      <Route path="/follow" element={<Follow />} />
      <Route path="/radio" element={<Radio />} />
      <Route path="/Nhacmoi" element={<Newmusic />} />
      <Route path="/Zingchart" element={<Zingchart />} />
      <Route path="/Xephang" element={<Ratings />} />
      <Route path="/MV" element={<Mv />} />
     </Routes>
    </div>
    <div className="zing_mp3-main_aside">
     <Aside />
    </div>
   </div>
   <div className="zing_mp3-footer">
    <Footer />
   </div>
  </div>
 );
}

export default App;
