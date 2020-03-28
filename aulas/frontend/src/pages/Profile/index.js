import React, {useState,useEffect} from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg'

import {Link, useHistory} from 'react-router-dom';
import {FiPower} from 'react-icons/fi';
import {FiTrash2} from 'react-icons/fi';

import api from '../../services/api';

export default function Profile(){
    const [incidents, setIncidents]=useState([]);
    
    const ongNome = localStorage.getItem('ongNome');
    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    // useEffect recebe uma função a qual eu quero que seja executada
    //segundo parâmatro - quando essa função será executada (um array de dependencias), ou seja, toda vez que o dado do array mudar, a função é chamada
    useEffect(() => {
        api.get('profile',{
            headers:{
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data)
        } )
    }, [ongId]);

    async function handleDeleteIncident(id){
        try {

            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
            
        } catch (error) {
            alert('Erro ao deletar caso, tente novamente'); 
            
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');

    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda {ongNome}</span>

                <Link className = "button" to = "/incidents/new">
                    Cadastrar novo caso
                </Link>
                
                <button onClick = {handleLogout} type="button">
                    <FiPower size = {18} color = "#E02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                {incidents.map(incidents => (
                    <li key={incidents.id}>
                    <strong>CASO:</strong>
                    <p>{incidents.title}</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>{incidents.description}</p>
                    <strong>Valor</strong>
                    {/*Formata para o estilo monetário brasileiro */}
                    <p>{Intl.NumberFormat('pt-BR',{style: 'currency',currency: 'BRL'}).format(incidents.value)}</p>
                    <button onClick={()=>handleDeleteIncident(incidents.id)} type="button">
                        <FiTrash2 size = {20} color = "#a8a8b3"/>
                    </button>
                </li>
                ) )}
            </ul>

        </div>
    );
}