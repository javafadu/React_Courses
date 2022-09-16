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
import ClickTimes from "./components/18-useEffect/useeffect";
import Useeffect from "./components/18-useEffect/useeffect";
import RandomImages from "./components/19-randomImage/randomImage";
import RandomImage from "./components/19-randomImage/randomImage";
import UseRef from "./components/20-useref/useref";
import ClassTypeTest from "./components/21-classtype/classtype";
import UserCards from "./components/22-fetch-user-card/user-cards";
import Countries from "./components/23-axios-countries/countires";
import AxiosCrud from "./components/24-axios-crud/axios-crud";
import Form1 from "./components/25-forms/form1";
import Form2 from "./components/25-forms/form2";
import Form3 from "./components/25-forms/form3";
import Form4 from "./components/25-forms/form4";
import Form5 from "./components/25-forms/form5-validation";
import Form6 from "./components/25-forms/form6-formik";
import Style2 from "./components/04-styles/style2";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Header from "./components/00-home/header/header";
import Menu from "./components/00-home/menu/menu";




function App() {
  return (
    <BrowserRouter>
      <Header />

      <Container fluid>
        <Row>
          <Col sm={2}>
            <Menu />
          </Col>
          <Col sm={10} className="p-5">
            <Routes>
              <Route path="/hello-world" element={<HelloWorld />} />
              <Route path="/jsx1" element={<Jsx1 />} />
              <Route path="/jsx2" element={<Jsx2 />} />
              <Route path="/jsx3" element={<Jsx3 />} />
              <Route path="/jsx4" element={<Jsx4 />} />
              <Route path="/jsx5" element={<Jsx5 />} />
              <Route path="/jsx-practise" element={<JsxPractice />} />
              <Route path="/style1" element={<Style1 />} />
              <Route path="/style2" element={<Style2 />} />
              <Route path="/style3" element={<Style3 />} />
            </Routes>
          </Col>
        </Row>
      </Container>

       
      
      </BrowserRouter>



      
        /*
      
   
    
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
                 <Clock3 />
                 <Clock3 />
        <ClickTimes></ClickTimes>
         <RandomImages/>
        <ClassTypeTest message="Hello World"></ClassTypeTest>
          <UserCards/>
            <Countries/>
             <AxiosCrud/>
             <Form1></Form1>
              <Form2/>
              <Form3/>
               <Form4/>
                <Form5/>
                     <Form6/>
                 
      */

     

     
      

      
  
  );
}

export default App;
