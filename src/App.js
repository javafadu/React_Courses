import HelloWorld from "./components/01-hello-world/01-hello-world";
import JsxPractice from "./components/03-jsx/jsx-practice";
import Jsx1 from "./components/03-jsx/jsx1";
import Jsx2 from "./components/03-jsx/jsx2";
import Jsx3 from "./components/03-jsx/jsx3";
import Jsx4 from "./components/03-jsx/jsx4";
import Jsx5 from "./components/03-jsx/jsx5";
import Style1 from "./components/04-styles/style1";
import Sstyle2 from "./components/04-styles/style2";
import Style3 from "./components/04-styles/style3";
import Clock1 from "./components/05-clock-digital/clock1";
import Greetings from "./components/06-props/greetings";
import Clock2 from "./components/07-clock2/clock2";
import ImageGallery from "./components/08-images/image-gallery";
import Image1 from "./components/08-images/image1";
import ProfileCard from "./components/09-profile-card/profile-card";
import BsClassic from "./components/10-bootstrap/bootstrap-classic";
import BsDynamic from "./components/10-bootstrap/bootstrap-dynamic";
import ReactIcon from "./components/11-icons/react-icon";
import Shop from "./components/12-shop/shop";
import State from "./components/13-state/state";
import Stateless from "./components/13-state/stateless";
import FunCounter from "./components/14-counter/counter-function";
import Birthday from "./components/15-birthday/birthday";
import UseEffect from "./components/16-useeffect/use-effect";
import Clock3 from "./components/17-clock3-working/clock3";

function App() {
  return (
    <div className="App">
      {/*<HelloWorld/>
      <Jsx1></Jsx1>
      <Jsx2></Jsx2>
      <Jsx3></Jsx3>
      <Jsx4></Jsx4>
      <Jsx5></Jsx5> 
      <JsxPractice></JsxPractice>
      <Style1></Style1>
      <Sstyle2></Sstyle2>
      <Style3></Style3>
      <Clock1></Clock1>
      <Greetings></Greetings>
      <Clock2 textColor="white" bgColor="brown"></Clock2>
      <Image1></Image1>

       <ProfileCard name="Ayse Can" location="Istanbul, Turkey" shot="1" followers="2" following="10" avatar="profile.jpg"   />
        <BsClassic/>
      <BsDynamic/>
         <ReactIcon/>
            <Shop/>
             <Stateless/>
              <State></State>
                 <Counter/>

                <FunCounter/>
                 <Birthday/>
                 <Birthday />
                 <UseEffect />
      */}

      <Clock3 />
    </div>
  );
}

export default App;
