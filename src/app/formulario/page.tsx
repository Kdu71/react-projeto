import Formulario from "@/components/formulario"
import Pagina from "@/components/template/pagina"

export default function PaginaFormulario(){
    return(
        <Pagina>
            <div>
                <h1 className="text-2xl font-bold">Formulário</h1>
                <Formulario/>
            </div>
        </Pagina>
    )
}