import { ReactDOM } from 'react'
import React from 'react'
import { useState,useEffect } from 'react'
import comment from './comment/comment'
import logo from './logo.svg'
import './App.css'
import api from './paginas/paginas'
import axios from 'axios'
import Lista from './lista/lista'
import main from './main/main'
import pages from './pages/pages'


function App() {
  
  const [count, setCount] = useState(0)
  const [alunos, setAlunos] = useState('')
  const [funcionarios, setFuncionarios]= useState('')
  const [bairro, setBairro]= useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    api
      .get("/funcionarios")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
      
  }, []);
  
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <h1>Project</h1>
        
        <p>My pretty</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus explicabo sint quisquam, deserunt architecto est, quam maxime nostrum sed eos dicta at? Odit aut reprehenderit culpa asperiores vitae neque quae.</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}> {count}</button>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium laboriosam dolore alias, ipsam beatae repellat quos sunt ducimus delectus, aspernatur est ipsa qui eaque magnam voluptatibus recusandae perferendis voluptatem consequuntur?</p>
          <button type='name' onClick={() => setAlunos(alunos)}>Pequisar</button>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit distinctio delectus nisi! Dolorem modi, amet explicabo tempora et similique autem soluta ratione? Architecto distinctio, nobis placeat soluta nulla facere velit.</p>
          <button onClick={(setAlunos) => handleclick}>Editar</button>
        </p>
        <p>Isso é <code>DAS AUTO</code> making blues and pretty shows</p>
        <p>
          <a className="App-link"  href="https://projeto-m4.herokuapp.com/funcionarios"
            target="_blank" >Auto</a>
          {' | '}
          
          <a className="App-link" href="./index.html"  target="_blank"> Auto</a><br></br><br></br>
          <button>Cadastre aqui</button>
            <h1>Conheça nossa Auto!</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas velit dolorem nulla, culpa aliquam id dicta sunt soluta molestias totam! Quia animi magni voluptas voluptatum maxime laudantium cupiditate quas? Vitae.</p>
            <form>
              <p>Entre em contato conosco!</p>
              <button onClick="alunos">Pesquise aqui</button><br></br>
              <input type="name" id='name' placeholder='escreva seu nome'></input>
              <input type="email" id='email' placeholder='escreva seu melhor email'></input>
              <input type="number" id='telefone' placeholder='escreva seu celular'></input>
              <input type="text" id='bairro' placeholder='escreva o bairro onde mora'></input>
              <input type="number" id='habilitação' placeholder='escreva sua habilitação'></input>
              <input type="datetime" id='admissão' placeholder='escreva o periodo da sua admissão'></input>
            </form>
            <h1>Contato na Auto para 2º semestre/2022</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officia quia accusantium incidunt, repudiandae ducimus eum magnam voluptates harum commodi est molestias rem consequuntur assumenda animi qui eos omnis hic.</p>
            <button>Saiba mais</button>
        </p>
        
      </header>
    </div>
  )
}

export default App;
