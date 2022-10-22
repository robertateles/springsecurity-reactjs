import React from "react";
import "./style.css";
import Foto from "../../assets/img/home.svg";
import Cliente1 from "../../assets/img/6.png";
import Cliente2 from "../../assets/img/5.png";
import Cliente3 from "../../assets/img/4.png";
import Rio from "../../assets/img/rio-de-janeiro.jpg";
import SP from "../../assets/img/sao-paulo.jpeg";
import Pernambuco from "../../assets/img/pernambuco.jpg";

function Home() {
  return (
    <div>
      <section className="home" id="home">
        <div className="image">
          <img src={Foto} alt="" />
        </div>
        <div className="content1">
          <h3>Viagens de ônibus e avião mais baratas</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            nostrum ut molestiae adipisci incidunt deleniti quisquam amet itaque
            nisi! Quos delectus aliquam incidunt esse vero tempora, sint impedit
            exercitationem molestias!
          </p>
          <a href="/" className="btn">
            conheça mais
          </a>
        </div>
      </section>

      <section className="form-container">
        <form action="">
          <div className="inputbox">
            <span>Saindo de:</span>
            <input type="text" placeholder="Digite uma cidade" />
          </div>
          <div className="inputbox">
            <span>Indo para:</span>
            <input type="text" placeholder="Digite uma cidade" />
          </div>
          <div className="inputbox">
            <span>Data de ida:</span>
            <input type="date" placeholder="Digite uma cidade" />
          </div>
          <input type="submit" value="Compra agora" className="btn" />
        </form>
      </section>

      <h1 className="avaliacoes"> Top destinos mais buscados hoje no Brasil</h1>
      <div
        id="carouselExampleIndicators"
        class="carousel slide w-50 p-3 mx-auto text-center"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={SP} alt="Primeiro Slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={Pernambuco} alt="Segundo Slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={Rio} alt="Terceiro Slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Rio de Janeiro</h5>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Anterior</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Próximo</span>
        </a>
      </div>
      <section>
        <h1 className="avaliacoes">Avaliações</h1>
        <div className="row1">
          <div className="card">
            <img src={Cliente1} className="avaliacao" alt="" />
            <h1 className="cabecalho">Clara Silva</h1>
            <h3 className="text">
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              voluptatum, ab ex nisi aliquid consequuntur saepe."
            </h3>
          </div>

          <div className="card">
            <img src={Cliente2} className="avaliacao" alt="" />
            <h1 className="cabecalho">Luiz Fernandes</h1>
            <h3 className="text">
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              voluptatum, ab ex nisi aliquid consequuntur saepe."
            </h3>
          </div>

          <div className="card">
            <img src={Cliente3} className="avaliacao" alt="" />
            <h1 className="cabecalho">Nina Ferreira</h1>
            <h3 className="text">
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              voluptatum, ab ex nisi aliquid consequuntur saepe."
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
