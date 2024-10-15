'use client'

import useFormularioUsuario from "@/hooks/useFormularioUsuario"

export default function Formulario(){
    const{nome, alterarNome, email, alterarEmail, senha, alterarSenha, Salvar} = useFormularioUsuario()
   
    return(
        <div className="flex flex-col gap-3">
            <input 
                type="text" 
                placeholder="Informe o Nome" 
                size={80} 
                value={nome}
                onChange={(e) => alterarNome(e.target.value)}
                className="bg-zinc-800 p-2 rounded-md outline-none" 
            />
            <input 
                type="email" 
                placeholder="Informe o Email" 
                size={80} 
                value={email}
                onChange={(e) => alterarEmail(e.target.value)}
                className="bg-zinc-800 p-2 rounded-md outline-none" 
            />
            <input 
                type="password" 
                placeholder="Informe a Senha" 
                size={80} 
                value={senha}
                onChange={(e) => alterarSenha(e.target.value)}
                className="bg-zinc-800 p-2 rounded-md outline-none" 
            />

            <button onClick={Salvar} className="bg-green-500 p-2 rounded-md">Salvar</button>

            <div className="flex flex-col gap-5">
                <span>{nome}</span>
                <span>{email}</span>
                <span>{senha}</span>
            </div>
        </div>  
    )
}