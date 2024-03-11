import React from 'react';
import './Register.css'
import { useEffect, useState } from 'react';

const Register = () => {

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        setError("")
        setSuccess("")

        const user = {
            displayName,
            email,
            password
        }

        if(password === confirmPassword){
            setSuccess("Sua conta foi criada com sucesso");
            setError("")
            console.log(user)
        } else {
            setError("Senha inválida, as senhas devem ser iguais e possuir 6 ou mais caracteres.")
            setSuccess("")
        }
    }


  return (
    <div className='register-page'>
      <h1>Criar Conta</h1>
      <p>
        Crie sua conta para navegar pelo site, criar posts e compartilhar seus pensamentos.
      </p>

      <form onSubmit={handleSubmit}>
            <label> 
                <span>Nome</span>
                <input
                type='text'
                name='name'
                required
                placeholder='Nome'
                onChange={({target}) => setDisplayName(target.value)}
                ></input>
            </label>
            <label> 
                <span>E-mail</span>
                <input
                type='email'
                name='email'
                required
                placeholder='E-mail'
                onChange={({target}) => setEmail(target.value)}
                ></input>
            </label>
            <label> 
                <span>Senha</span>
                <input
                type='password'
                name='password'
                required
                placeholder='Senha'
                minLength={6}
                onChange={({target}) => setPassword(target.value)}
                ></input>
            </label>
            <label> 
                <span>Confime sua senha</span>
                <input
                type='password'
                name='confirm-password'
                required
                placeholder='senha'
                minLength={6}
                onChange={({target}) => setConfirmPassword(target.value)}
                ></input>
            </label>
            {success && <p className='success-message'>{success}</p>}
            {error && <p className='error-message'>{error}</p>}
            
            <button className='btn-register btn-primary'>Criar conta</button>
            
      </form>
    </div>
  );
};

export default Register;