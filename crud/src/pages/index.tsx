//import Image from "next/image";
//import { Inter } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });

import Topo from "@/components/Topo";
import Card from "@/components/Card";

const nome = 'Adriano Moreira'
let canal = 'CFB Cursos'

function retornar_nome(){
  return nome
}

export default function Home() {
  return (
    <main>
      {Topo()} {/* Ou assim <Topo/> */}
      <div style={teste}>
        <div>{ retornar_nome() }</div>
        <div>{ canal }</div>
      </div>
      <div>Curso de React NEXT</div>
      <div style={{color: '#f00', backgroundColor: '#bbb'}}>Typescript</div>
      <div className="flex justify-center gap-3">
        {/* <Card produto={'Mouse'} valor={49.90} desconto={10} funcao={calcDesc}/>
        <Card produto={'Teclado'} valor={69.90} desconto={2} funcao={calcDesc}/>
        <Card produto={'Monitor'} valor={549.90} desconto={0} funcao={calcDesc2}/>
        <Card produto={'Processador'} valor={879.90} desconto={50} funcao={calcDesc2}/> */}
      </div>
      
    </main>
  );
}

const teste={
  display: 'flex',
  justifyContent: 'center',
  alignItens: 'center',
  color: '#00f',
  backgroundColor: '#eee',
  fontSize: '20px'
}
