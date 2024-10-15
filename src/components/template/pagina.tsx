import Cabecalho from "./cabecalho"
import Menu from "./menu"
import Rodape from "./rodape"

export default function Pagina(props:any){
    return(
        <div className="flex flex-col h-screen">
            <Cabecalho/>
            <div className="flex flex-1">
                <Menu/>
                <main className="p-8">{props.children}</main>
            </div>            
            <Rodape/>
        </div>
    )
}