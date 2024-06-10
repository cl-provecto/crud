import Topo from "@/components/Topo"
import Card from "@/components/Card"

import Router, { useRouter } from "next/router"

const produtos = [
    {
        produto: 'Mouse',
        valor: 49.90,
        desconto: 10,
        disponivel: false
    },
    {
        produto: 'Teclado',
        valor: 69.90,
        desconto: 5,
        disponivel: true
    },
    {
        produto: 'Monitor',
        valor: 549.90,
        desconto: 0,
        disponivel: false
    },
    {
        produto: 'Processador',
        valor: 879.90,
        desconto: 50,
        disponivel: true
    },
    {
        produto: 'Microfone',
        valor: 75,
        desconto: 3.5,
        disponivel: true
    },
    {
        produto: 'Fone de Ouvido',
        valor: 30,
        desconto: 0,
        disponivel: true
    }
]
  
function calcDesc(v: number, d: number) {
    return v - d
}
  
function calcDesc2(v: number, d: number) {
    return v - (d / 2)
}


export default function ProdutosPagina() {
    const router = useRouter()
    // const parametros = router.query
    // const nome = router.query.nome
    // const curso = router.query.curso
    const {nome, curso} = router.query

    return (
        <div>
            <Topo/>
            <div className="flex justify-center gap-3">
            {
            produtos.map((e:any, index:number) => {
                if (e.disponivel) {
                    return (
                        <Card key={index} produto={e.produto} valor={e.valor} desconto={e.desconto} funcao={calcDesc}>
                            <div><br/>Produtos de Qualidade</div>
                            <div><br/>PROMOÇÃO!!!</div>
                        </Card>
                    )
                }
            })
            }
            </div>
        </div>
    )
}