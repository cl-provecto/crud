import { useState } from "react"
import Topo from "@/components/Topo"

const cursos = ["", "HTML", "React", "C++", "Javascript", "Arduino", "CSS", "Next.js"]

export default function Inputs() {
    const [nome, setNome] = useState<string>("")
    const [curso, setCurso] = useState<string>("")

    function fcursos() {
        return cursos.map((c:any, index:number) => {
            return <option key={index} value={c}>{c}</option>
        })
    }

    const ccursos = cursos.map((c:any, index:number) => {
        return <option key={index} value={c}>{c}</option>
    })

    return (
        <div>
            <Topo></Topo>
            <div className="campoForm">
                <label>Nome:</label>
                <input type="text" value={nome} onChange={(evt) => setNome(evt.target.value)}/>
            </div>
            <div className="campoForm">
                <label>Curso:</label>
                <select value={curso} onChange={(evt) => setCurso(evt.target.value)}>
                    {
                        // cursos.map((c:any, index:number) => {
                        //     //return <option key={index} value={c}>{`Curso de ${c}`}</option>
                        //     return <option key={index} value={c}>Curso de: {c}</option>
                        // })
                        //fcursos()
                        ccursos
                    }
                </select>
            </div>
            <div>
                Nome Digitado: {nome}
            </div>
            <div>
                Curso Escolhido: {curso}
            </div>
        </div>
    )
}