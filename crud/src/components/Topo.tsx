import Link from "next/link"

export default function Topo() {
    return (
        <div className="flex justify-between items-center bg-gray-800 text-rose-200 h-[100px]">
            <div>LOGO</div>
            <div className="flex flex-col justify-center items-center">
                <div className="text-2xl">Projeto ZeuS</div>
                <div className="subtitulo">UB - U Bom</div>
            </div>
            <nav className="flex flex-col">
                <Link href={"/"}>Index</Link>
                <Link href={
                    {
                        pathname: "/produtos/produtos",
                        query: {
                            nome: "Adriano Moreira",
                            curso: "React Next"
                        }
                    }
                }>Produtos</Link>
                <Link href={"/teste"}>Teste</Link>
                <Link href={"/hooks/usestate"}>State</Link>
            </nav>
        </div>
    )
}