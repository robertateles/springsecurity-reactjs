import React from "react";
import "./style.css";
import Rio from "../../assets/img/rio-de-janeiro.jpg";
import SP from "../../assets/img/sao-paulo.jpeg";
import Minas from "../../assets/img/minas-gerais.jpg";
import Fortaleza from "../../assets/img/fortaleza.jpg";
import Pernambuco from "../../assets/img/pernambuco.jpg";
import Salvador from "../../assets/img/salvador.jpg";
import Promcao from "../../assets/img/promocao.svg";
import Card from "../../components/Card";

function Promocao() {
  return (
    <main>
      <section className="home" id="home">
        <div className="content1">
          <h3>Promoções</h3>
          <p>
            Volte a sonhar com a sua próxima viagem. Encontre reservas flexíveis
            e os melhores preços para voos e pacotes.
          </p>
        </div>
        <div className="image">
          <img src={Promcao} alt="" />
        </div>
      </section>
      <section className="promocao" id="promocao">
        <div className="container1">
          <div className="box1">
            <Card
              imagem={Salvador}
              title="Salvador"
              oldPrice="119,99"
              price="89,99"
            />
          </div>
          <div className="box1">
            <Card
              imagem={Pernambuco}
              title="Pernambuco"
              oldPrice="129,99"
              price="99,99"
            />
          </div>
          <div className="box1">
            <Card
              imagem={Fortaleza}
              title="Fortaleza"
              oldPrice="139,99"
              price="99,99"
            />
          </div>
          <div className="container1">
            <div className="box1">
              <Card
                imagem={SP}
                title="São Paulo"
                oldPrice="149,99"
                price="89,99"
              />
            </div>
            <div className="box1">
              <Card
                imagem={Minas}
                title="Minas Gerais"
                oldPrice="129,99"
                price="79,99"
              />
            </div>
            <div className="box1">
              <Card
                imagem={Rio}
                title="Rio de Janeiro"
                oldPrice="139,99"
                price="89,99"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Promocao;
