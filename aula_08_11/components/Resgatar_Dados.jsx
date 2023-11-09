import {useState, useEffect} from "react"

const url = "http://localhost:3000/alunos"

const Resgatar_Dados = () => {
    const [alunos, setAlunos] = useState ([])
    useEffect (() => {

        async function fetchData (){
            const response = await fetch(url);

            const data = response.json();

            setAlunos(data);
        }
        fetchData()

    }, [])
    return (
        <div>
            <h1>Lista de Alunos</h1>
            <table>
                <thead>
                    <tr>
                        <th>
                            Nome:
                        </th>
                        <th>
                            Email:
                        </th>
                        <th>
                            Curso:
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        alunos.map((aluno) => ()
                        )
                    }
                </tbody>
            </table>
        </div>
    );

}

export default Resgatar_Dados;




