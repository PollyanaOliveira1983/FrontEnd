import "./styles.css";
import Card from "../../components/Card";
import CardComment from "../../components/CardComment";
import Footer from "../../components/Footer";
import Header from "../../components/Header";


export default function Catalog() {
  
    return (
      <>
        <Header />
        <main className="dr-main">
          <section id="dr-car-section" className="dr-container">
            <div className="dr-car-container">
              <h1>Venha nos visitar</h1>
              <Card />
              <Card />
            </div>
          </section>
          <section id="dr-comment-section" className="dr-container">
            <div className="dr-comment-container">
              <h1>O que estão dizendo</h1>
              <CardComment />
              <CardComment />
              <CardComment />
              <CardComment />
              <CardComment />
              <CardComment />
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }