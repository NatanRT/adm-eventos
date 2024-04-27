import { collection, addDoc } from "firebase/firestore";
import { useState } from 'react';
import { db } from '../../database/firebaseConfig';


const CadastroUsuario = () => {

  const [formulario, setFormulario] = useState(
    {
      nome: '',
      email: '',
      senha: '',
      confSenha: ''
    }//OBJETO
  )


  const alteraFormulario = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };


  const meuSubmit = async (evento) => {
    evento.preventDefault() // EVITA O COMPORTAMENTO PADRÃO DO FORM
    console.log(formulario) // FORMULARIO É UM OBJETO DE UMA STATE (ESTADO)

    const docRef = await addDoc(collection(db, "usuarios"),formulario)
  }


  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={meuSubmit}>
        <label htmlFor='nome' >Nome</label>
        <input type='text' id="nome" name="nome"
          value={formulario.nome}
          onChange={alteraFormulario} />

        <label htmlFor='email' >Email</label>
        <input type='text' id="email" name="email"
          value={formulario.email}
          onChange={alteraFormulario} />

        <label htmlFor='senha' >Senha</label>
        <input type='text' id="senha" name="senha"
          value={formulario.senha}
          onChange={alteraFormulario} />

        <label htmlFor='confSenha' >Confirmar Senha</label>
        <input type='text' id="confSenha" name="confSenha"
          value={formulario.confSenha}
          onChange={alteraFormulario} />

        <button type='submit'>Salvar</button>
      </form>

    </div>
  );
};

export default CadastroUsuario;
