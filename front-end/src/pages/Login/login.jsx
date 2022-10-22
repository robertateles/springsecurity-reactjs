import React from "react";
import "./style.css";
import Logo from "../../assets/img/login.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//axios

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const cadastrar = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8082/api/usuario", {
        email: email,
        senha: senha,
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
      .get("http://localhost:8082/api/usuario", {
        email: email,
      })
      .then((result) => {
        alert("Usuário já cadastrado!");
      })
      .catch((erro) => {
        alert(erro);
      });
  };

  if (cadastrar === existe) {
    alert("Usuário já cadastrado.");
  }

  return (
    <div className="main-login ">
      <div className="left-login">
        <img src={Logo} alt="animação" className="left-image" />
      </div>
      <div className="right-login">
        <div className="card-login">
          <h1>Entrar</h1>
          <div className="textfield">
            <h3>Email:</h3>
            <input
              value={email}
              type="email"
              name="email"
              id=""
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="textfield">
            <h3>Senha</h3>
            <input
              value={senha}
              type="password"
              name="senha"
              id=""
              placeholder="Senha"
              required
              onChange={(e) => setSenha(e.target.value)}
            />
            <div>
              <Link className="signbutton" to={"/login"}><br/> Não tem cadastro? Criar agora.</Link>
            </div>
          </div>
          <button className="btn-login" onClick={cadastrar}>
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;