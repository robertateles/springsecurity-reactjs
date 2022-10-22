import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import '../Promocao/style.css';

export default function View() {

    const { id } = useParams();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        carregarUsuario();

    }, [])

    const carregarUsuario = async () => {
        const result = await axios.get(`http://localhost:8081/user/${id}`)
        setName(result.data.name)
        setPassword(result.data.password)
        setUsername(result.data.username)
    }

    return (
        <div className="container1 home d-flex justify-content-center"> 
            <div className="box1">
                <div className="content1">
                </div>
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">ID: {id}</h5>
                        <p className="card-title"><b>Nome</b> {name} </p>
                        <p className="card-title"><b>Senha</b> {password} </p>
                        <p className="card-title"><b>Email</b> {username} </p>
                        <Link to="/Tabela" type="button" className="btn btn-outline-success">Voltar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}