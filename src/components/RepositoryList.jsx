import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState([]);

    //toda vez que repositories mudar a funcao do userEffect será executada por causa do [repositories]
    //Com o array de dependencias vazio [], ele somente será chamada uma única vez
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);


    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
               <RepositoryItem repository={repository}/>
               <RepositoryItem repository={repository}/>
               <RepositoryItem repository={repository}/>
               <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}