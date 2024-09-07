import { useForm } from '../helpers/useForm';

function Form() {
    const { handleChange, handleSubmit } = useForm();
    
    return (
        <div className="flex flex-col h-screen">
            <form className="w-full mx-auto p-6 h-screen pb-20" style={{ overflow: "scroll" }} onSubmit={(e: React.FormEvent<HTMLFormElement>) => {handleSubmit(e, "formDisciplines")}}>

                <div className="w-full">
                    <h2 className="w-full text-xl text-gray-900 dark:text-gray-70 mb-3 border-b-2 p-2">Cadastro de Disciplina</h2>

                    <div className="w-full flex flex-wrap gap-3">
                        <div className="w-full lg:w-1/2 mb-5">
                            <label
                                htmlFor="subject-name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                            >
                                Nome da Disciplina*
                            </label>
                            < input onChange={handleChange} 
                                type="text"
                                id="subject-name"
                                className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="Digite o nome da disciplina"
                                required
                            />
                        </div>

                        <div className="w-full lg:w-1/2 mb-5">
                            <label
                                htmlFor="subject-code"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                            >
                                Código da Disciplina*
                            </label>
                            < input onChange={handleChange} 
                                type="text"
                                id="subject-code"
                                className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="Digite o código da disciplina"
                                required
                            />
                        </div>

                        <div className="w-full lg:w-1/2 mb-5">
                            <label
                                htmlFor="description"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                            >
                                Descrição
                            </label>
                            <textarea onChange={handleChange} 
                                id="description"
                                className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="Digite uma breve descrição da disciplina"
                                rows={4}
                            />
                        </div>

                        <div className="w-full lg:w-1/2 mb-5">
                            <label
                                htmlFor="workload"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                            >
                                Carga Horária (em horas)*
                            </label>
                            < input onChange={handleChange} 
                                type="number"
                                id="workload"
                                className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="Digite a carga horária da disciplina"
                                required
                            />
                        </div>

                        <div className="w-full lg:w-1/2 mb-5">
                            <label
                                htmlFor="school-year"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                            >
                                Ano Escolar*
                            </label>
                            <select onChange={handleChange} 
                                id="school-year"
                                className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                required
                            >
                                <option value="" disabled selected>Selecione o ano escolar</option>
                                <option value="1">1º Ano</option>
                                <option value="2">2º Ano</option>
                                <option value="3">3º Ano</option>
                            </select>
                        </div>

                        <div className="w-full lg:w-1/2 mb-5">
                            <label
                                htmlFor="semester"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                            >
                                Semestre*
                            </label>
                            <select onChange={handleChange} 
                                id="semester"
                                className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                required
                            >
                                <option value="" disabled selected>Selecione o semestre</option>
                                <option value="1">1º Semestre</option>
                                <option value="2">2º Semestre</option>
                            </select>
                        </div>

                        <div className="w-full lg:w-1/2 mb-5">
                            <label
                                htmlFor="responsible-teacher"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                            >
                                Professor Responsável*
                            </label>
                            < input onChange={handleChange} 
                                type="text"
                                id="responsible-teacher"
                                className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                placeholder="Digite o nome do professor responsável"
                                required
                            />
                        </div>
                    </div>
                </div>



                <button
                    type="submit"
                    className="text-white bg-gray-50 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-500"
                >
                    Cadastrar Disciplina
                </button>
            </form>

        </div>

    );
}

export default Form;  