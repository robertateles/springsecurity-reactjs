import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import Edit from "./edit";
import Login from "./";

export default function Tabela() {
  const [users, setUsers] = useState([]);

  const listarUsuarios = async () => {
    try {
      await axios.get("http://localhost:8081/user/").then((response) => {
        setUsers(response.data);
      });
    } catch (erro) {
      alert(erro.message);
    }
  };

  useEffect(() => {
    listarUsuarios();
  }, []);

  const { id } = useParams();
  const deleteUsuario = async (id) => {
    try {
      await axios
        .delete(`http://localhost:8081/user/${id}`)
        .then((response) => {
          alert("Usuário excluído!");
          listarUsuarios();
        });
    } catch (erro) {
      alert(erro.message);
    }
  };

  return (
    <div className="container home">
      <div className="w-100 p-4">
        <table className="table table-striped table-hover border shadow">
          <caption>Lista de usuários</caption>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th scope="col" className="">
                <Link to={"/signup"} className="texto text-info w-75 p-3">
                  Adicionar
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <tr>
                <th scope="row" key={key}>
                  {key + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  <Link
                    to={`/view/${user.id}`}
                    className="btn btn-outline-success mx-2"
                  >
                    Ver
                  </Link>
                  <Link
                    to={`/edit/${user.id}`}
                    className="btn btn-warn>ing mx-2"
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUsuario(user.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
