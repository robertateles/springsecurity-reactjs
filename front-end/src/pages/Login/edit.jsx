import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import Foto from '../../assets/img/edit.svg';
import axios from "axios";

function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const editar = async (e) => {
    e.preventDefault();
    await axios
      .get(`http://localhost:8081/user/${id}`, {
        name: name,
        username: username,
        password: password,
      })
      .then((result) => {
        alert("Usuário atualizado.");
        navigate("/tabela");
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(() => {
    carregarUsuario();
  }, []);

  const carregarUsuario = async () => {
    const result = await axios.get(`http://localhost:8081/user/${id}`);
    setName(result.data.name);
    setPassword(result.data.password);
    setUsername(result.data.username);
  };

  return (
    <div>
      <section className="home" id="home">
        
        <div className="content">
          <h3>Editar usuário</h3>
        </div>
        <div className="image">
          <img src={Foto} alt="" />
        </div>
      </section>
      <section className="form-container">
        <form>
          <div className="inputbox">
            <span>Nome:</span>
            <input
              value={name}
              type="text"
              placeholder="Digite seu nome"
              name="nome"
              onChange={(e) => setName(e.target.value)}
            />
            <span>Email:</span>
            <input
              value={username}
              type="email"
              placeholder="Digite seu email"
              name="email"
              onChange={(e) => setUsername(e.target.value)}
            />
            <span>Senha:</span>
            <textarea
              value={password}
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
            ></textarea>
            <input type="submit" value="Enviar" class="btn" onClick={editar} />
          </div>
        </form>
      </section>
    </div>
  );
}

export default Edit;
