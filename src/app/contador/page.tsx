import Contador from "@/components/Contador";
import Pagina from "@/components/template/pagina";

export default function PaginaContador(){
    return(
        <Pagina>
            <div>
            <Contador valorInicial={1000}/>
            <Contador valorInicial={0}/>
            <Contador valorInicial={-500}/>
        </div>       
        </Pagina>
        
    ) 
}