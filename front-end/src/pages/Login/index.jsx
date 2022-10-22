import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../../assets/img/login.svg";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//axios

function Cadastro() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8081/user/create", {
        name: name,
        username: username,
        password: password,
      })
      .then((result) => {
        alert("Usuário cadastrado.");
        navigate("/tabela");
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const existe = async (e) => {
    e.preventDefault();

    await axios
      .get("http://localhost:8081/user", {
        username: username,
      })
      .then((result) => {
        alert("Usuário já cadastrado!");
      })
      .catch((erro) => {
        alert(erro);
      });
  };

  if (signUp === existe) {
    alert("Usuário já cadastrado.");
  }

  return (
    <div className="main-login ">
      <div className="left-login">
        <h1>
          Cadastre-se
          <br /> E faça parte da TravelAirlines.{" "}
        </h1>
        <img src={Logo} alt="animação" className="left-image" />
      </div>
      <div className="right-login">
        <div className="card-login">
          <h1>Cadastrar</h1>
          <div className="textfield">
            <h3>Nome:</h3>
            <input
              value={name}
              type="text"
              name="name"
              id=""
              placeholder="Nome"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="textfield">
            <h3>Email:</h3>
            <input
              value={username}
              type="email"
              name="email"
              id=""
              placeholder="Email"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="textfield">
            <h3>Senha</h3>
            <input
              value={password}
              type="password"
              name="senha"
              id=""
              placeholder="Senha"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <a>
              <Link className="signbutton" to={"/login"}>
                <br /> Já tem cadastro? Entre agora.
              </Link>
            </a>
          </div>
          <button className="btn-login" onClick={signUp}>
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
