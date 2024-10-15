import Botao from "@/components/Botao";
import Pagina from "@/components/template/pagina";

export default function PrimeiraPagina() {
  return(
    <Pagina>
         <div className="flex gap-2">
      {/* new Botao(), ou seja, instancia a função botão do componente Botao.ts e passar o props pedido no componente botao */}
        <Botao label="Salvar" /> 
        <Botao label="Cancelar" /> 
    </div>
    </Pagina>
   
  ) 
}