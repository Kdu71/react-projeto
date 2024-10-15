import { useState } from "react"

export default function useFormularioUsuario(){
    const[nome, alterarNome] = useState('')
    const[email, alterarEmail] = useState('')
    const[senha, alterarSenha] = useState('')

    function Salvar(){
        console.log('Nome:', nome)
        console.log('Email:', email)
        console.log('Senha:', senha)
    }
    return{
        nome,
        alterarNome,
        email,
        alterarEmail,
        senha,
        alterarSenha,
        Salvar
    }
}