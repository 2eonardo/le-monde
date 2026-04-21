import './App.css'
import Header from "./components/Header/Header.jsx";
import LiveNews from "./components/LiveNews.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MainBody from "./components/body/MainBody.jsx";

function App() {

  return (
    <>
        <Header />
        <LiveNews />
        <MainBody />
        <Footer />
    </>
  )
}

export default App
