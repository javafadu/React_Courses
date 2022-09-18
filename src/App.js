import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Header from "./components/00-home/header/header";
import Menu from "./components/00-home/menu/menu";
import HelloWorld from "./components/01-hello-world/01-hello-world";
import Comp from "./components/02-comp/02-comp";
import JsxPractise from "./components/03-jsx/jsx-practice";
import Jsx1 from "./components/03-jsx/jsx1";
import Jsx2 from "./components/03-jsx/jsx2";
import Jsx3 from "./components/03-jsx/jsx3";
import Jsx4 from "./components/03-jsx/jsx4";
import Jsx5 from "./components/03-jsx/jsx5";
import Style1 from "./components/04-styles/style1";
import Style2 from "./components/04-styles/style2";
import Style3 from "./components/04-styles/style3";
import Clock1 from "./components/05-clock-digital/clock1";
import Greetings from "./components/06-props/greetings";
import Clock2 from "./components/07-clock2/clock2";
import ImageGallery from "./components/08-images/image-gallery";
import Image1 from "./components/08-images/image1";
import ProfileCard from "./components/09-profile-card/profile-card";
import BSDynamic from "./components/10-bootstrap/bootstrap-dynamic";
import BSClassic from "./components/10-bootstrap/bootstrap-classic";
import ReactIcon from "./components/11-icons/react-icon";
import Shop from "./components/12-shop/shop";
import State from "./components/13-state/state";
import Stateless from "./components/13-state/stateless";
import Counter from "./components/14-counter/counter";
import Birthday from "./components/15-birthday/birthday";
import UseEffect from "./components/16-useeffect/use-effect";
import Clock3 from "./components/17-clock3-working/clock3";
import Useeffect from "./components/18-useEffect/useeffect";
import RandomImages from "./components/19-randomImage/randomImage";
import Useref from "./components/20-useref/useref";
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
import Exchange from "./components/26-exchange-api/exchange";
import StoreContext from "./store";
import JsxPractice from "./components/03-jsx/jsx-practice";

function App() {
  const [currencies, setCurrencies] = useState({});
  const [color, setColor] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const loadData = async () => {
    try {
      const resp = await axios.get(
        "https://api.frankfurter.app/latest?from=TRY"
      );
      setCurrencies(resp.data.rates);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <StoreContext.Provider value={{ currencies, color, darkMode, setDarkMode }}>
      {/* Merkezi state ile tüm uygulama sarmallandı. */}
      {/* value içine tüm componentlerden erişmek istediğimiz datalar yerleştirildi */}
      <div className={`app ${darkMode && "dark-mode"}`}>
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
                  <Route path="/comp" element={<Comp />} />
                  <Route path="/jsx1" element={<Jsx1 />} />
                  <Route path="/jsx2" element={<Jsx2 />} />
                  <Route path="/jsx3" element={<Jsx3 />} />
                  <Route path="/jsx4" element={<Jsx4 />} />
                  <Route path="/jsx5" element={<Jsx5 />} />
                  <Route path="/jsx-practise" element={<JsxPractice />} />
                  <Route path="/style1" element={<Style1 />} />
                  <Route path="/style2" element={<Style2 />} />
                  <Route path="/style3" element={<Style3 />} />
                  <Route path="/exchange" element={<Exchange />} />
                </Routes>
              </Col>
            </Row>
          </Container>

          {/* 
      
     
      <Clock1/>
      <Greetings/>
      <Clock2 textColor="white" bgColor="red"/>
      <Image1/>
      <ImageGallery/>
      <ProfileCard name="Ayşe Gel" location="Istanbul, Turkiye" shot="1" followers="2" following="10" avatar="profile.jpg"/>
      <BSClassic/>
      <BSDynamic/>
      <ReactIcon />
      <Shop/>
      <Stateless/>
      <State/>
      <Counter/>
      <Birthday/>
      <UseEffect/>
      <Clock3/>
      <Useeffect/>
      <RandomImages/>
      <Useref/>
      <ClassTypeTest message="Hello World"/>
      <UserCards/>
      <Countries />           
      <AxiosCrud/>
      <Form1/>
      <Form2/>
      <Form3/>
      <Form4/>
      <Form5/>
      <Form6 />
      */}
        </BrowserRouter>
      </div>
    </StoreContext.Provider>
  );
}

export default App;