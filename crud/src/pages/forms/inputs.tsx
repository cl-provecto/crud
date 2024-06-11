import { useState } from "react"
import Topo from "@/components/Topo"

export default function Inputs() {
    const [nome, setNome] = useState<string>("")
    const [curso, setCurso] = useState<string>("")

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
                    <option value=""></option>
                    <option value="HTML">HTML</option>
                    <option value="React">React</option>
                    <option value="C++">C++</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Arduino">Arduino</option>
                    <option value="CSS">CSS</option>
                    <option value="Next.js">Next.js</option>
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