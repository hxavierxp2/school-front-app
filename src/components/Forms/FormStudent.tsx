import { useForm } from '../helpers/useForm';

function Form() {
    const { handleChange, handleSubmit } = useForm();

    return (
        <div className="flex flex-col h-screen">
            <form className="w-full mx-auto p-6 h-screen pb-20" style={{ overflow: "scroll" }} onSubmit={(e: React.FormEvent<HTMLFormElement>) => {handleSubmit(e, 'formStudents')}}>
                <div className="w-full">
                    <h2 className="w-full text-xl text-gray-900 dark:text-gray-70 mb-3 border-b-2 p-2">Dados gerais</h2>

                    <div className="w-full flex gap-3">
                        <div className="grid grid-cols-3 grid-rows-5 gap-x-2.5 gap-y-2.5 items-center w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="student-name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Nome do Aluno*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="student-name"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o nome do aluno"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="registration-number"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Número de Matrícula
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="registration-number"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o número de matrícula"
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="series"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Série*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="series"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite a série"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="class"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Turma*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="class"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite a turma"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="shift"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Turno*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="shift"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o turno"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="contact"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Contato*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="contact"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o contato"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Email
                                </label>
                                < input onChange={handleChange} 
                                    type="email"
                                    id="email"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o email"
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="birthdate"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Data de Nascimento*
                                </label>
                                < input onChange={handleChange} 
                                    type="date"
                                    id="birthdate"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="main-provider"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Operadora Predominante
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="main-provider"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite a operadora predominante"
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="age"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Idade*
                                </label>
                                < input onChange={handleChange} 
                                    type="number"
                                    id="age"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite a idade"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="birthplace"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Naturalidade*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="birthplace"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite a naturalidade"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="state"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Estado*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="state"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o estado"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="self-declared-race"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Cor/ Raça Autodeclarada*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="self-declared-race"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite a cor/raça autodeclarada"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="gender"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Gênero*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="gender"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o gênero"
                                    
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="age"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Idade*
                                </label>
                                < input onChange={handleChange} 
                                    type="number"
                                    id="age"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite a idade"
                                    
                                />
                            </div>

                        </div>
                        <div className="grid grid-cols-3 grid-rows-5 gap-x-2.5 gap-y-2.5 items-center w-1/2">

                            <div className="mb-5">
                                <label
                                    htmlFor="birthplace"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Naturalidade*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="birthplace"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite a naturalidade"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="state"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Estado*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="state"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o estado"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="self-declared-race"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Cor/ Raça Autodeclarada*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="self-declared-race"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite a cor/raça autodeclarada"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="gender"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Gênero*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="gender"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o gênero"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="marital-status"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Estado Civil*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="marital-status"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o estado civil"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="religious-option"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Opção Religiosa*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="religious-option"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite a opção religiosa"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="resides-with"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Reside com*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="resides-with"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite com quem reside"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="guardian-contact"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Contato do Responsável*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="guardian-contact"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o contato do responsável"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="marital-status"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Estado Civil*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="marital-status"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o estado civil"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="religious-option"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Opção Religiosa*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="religious-option"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite a opção religiosa"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="resides-with"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Reside com*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="resides-with"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite com quem reside"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="guardian-contact"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Contato do Responsável*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="guardian-contact"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o contato do responsável"
                                    
                                />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <h2 className="w-full text-xl text-gray-900 dark:text-gray-70 mb-3 border-b-2 p-2">Endereço</h2>

                    <div className="w-full flex gap-3">
                        <div className="flex w-full gap-3">
                            <div className="mb-5">
                                <label
                                    htmlFor="street"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Rua*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="street"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite a rua"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="number"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Nº*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="number"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o número"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="neighborhood"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Bairro*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="neighborhood"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o bairro"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="reference-point"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Ponto de Referência*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="reference-point"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o ponto de referência"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="postal-code"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    CEP
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="postal-code"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o CEP"
                                />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <h2 className="w-full text-xl text-gray-900 dark:text-gray-70 mb-3 border-b-2 p-2">Docmentação</h2>

                    <div className="w-full flex gap-3">
                        <div className="grid grid-cols-3 grid-rows-3 gap-x-2.5 gap-y-2.5 items-center w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="term-number"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Nº do Termo da Certidão de nascimento*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="term-number"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o nº do termo"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="book"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Livro da Certidão de nascimento*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="book"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o livro"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="sheet"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Folha da Certidão de nascimento*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="sheet"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite a folha"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="rg-number"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Número RG
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="rg-number"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o número do RG"
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="rg-issue-date"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Data de Expedição
                                </label>
                                < input onChange={handleChange} 
                                    type="date"
                                    id="rg-issue-date"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="issuing-agency"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Órgão Expeditor
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="issuing-agency"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o órgão expeditor"
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="cpf-number"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Número de CPF
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="cpf-number"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o número do CPF"
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="nis"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    NIS
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="nis"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o NIS"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <h2 className="w-full text-xl text-gray-900 dark:text-gray-70 mb-3 border-b-2 p-2">Dados escolares</h2>

                    <div className="w-full flex gap-3">
                        <div className="flex w-full items-center gap-6">
                            <div className="mb-5">
                                <label
                                    htmlFor="student-status"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Situação do Aluno*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="student-status"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite a situação do aluno"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="studied-last-year"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Estudou nesta escola no ano anterior?*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="studied-last-year"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite se estudou na escola no ano anterior"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="previous-school"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Qual escola concluiu o ensino fundamental?*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="previous-school"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite a escola onde concluiu o ensino fundamental"
                                    
                                />
                            </div>


                        </div>

                    </div>
                </div>

                <div className="w-full">
                    <h2 className="w-full text-xl text-gray-900 dark:text-gray-70 mb-3 border-b-2 p-2">Dados de saúde</h2>

                    <div className="w-full flex gap-3">
                        <div className="flex w-full items-center gap-6">
                            <div className="mb-5">
                                <label
                                    htmlFor="sus-card"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Cartão do SUS*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="sus-card"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o número do cartão do SUS"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="vaccine-card"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Cartão de Vacina Padrão*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="vaccine-card"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o número do cartão de vacina padrão"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="first-dose-date"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Data da 1ª Dose
                                </label>
                                < input onChange={handleChange} 
                                    type="date"
                                    id="first-dose-date"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="second-dose-date"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Data da 2ª Dose
                                </label>
                                < input onChange={handleChange} 
                                    type="date"
                                    id="second-dose-date"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="third-dose-date"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Data da 3ª Dose
                                </label>
                                < input onChange={handleChange} 
                                    type="date"
                                    id="third-dose-date"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                />
                            </div>


                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <h2 className="w-full text-xl text-gray-900 dark:text-gray-70 mb-3 border-b-2 p-2">Dados dos pais/ responsáveis</h2>

                    <div className="w-full flex flex-col gap-3">
                        <div className="grid grid-cols-3 grid-rows-2 gap-x-2.5 gap-y-2.5 items-center w-full">
                            <div className="mb-5">
                                <label
                                    htmlFor="father-name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Pai*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="father-name"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o nome do pai"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="father-birthdate"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Data de Nascimento
                                </label>
                                < input onChange={handleChange} 
                                    type="date"
                                    id="father-birthdate"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="father-profession"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Profissão*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="father-profession"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite a profissão"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="father-contact"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Contato*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="father-contact"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o contato"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="father-education"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Escolaridade*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="father-education"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite a escolaridade"
                                    
                                />
                            </div>


                        </div>
                        <div className="grid grid-cols-3 grid-rows-2 gap-x-2.5 gap-y-2.5 items-center full">
                            <div className="mb-5">
                                <label
                                    htmlFor="mother-name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Mãe*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="mother-name"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o nome da mãe"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="mother-birthdate"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Data de Nascimento
                                </label>
                                < input onChange={handleChange} 
                                    type="date"
                                    id="mother-birthdate"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="mother-profession"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Profissão*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="mother-profession"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite a profissão"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="mother-contact"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Contato*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="mother-contact"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o contato"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="mother-education"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Escolaridade*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="mother-education"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite a escolaridade"
                                    
                                />
                            </div>

                        </div>
                        <div className="grid grid-cols-3 grid-rows-2 gap-x-2.5 gap-y-2.5 items-center full">

                            <div className="mb-5">
                                <label
                                    htmlFor="guardian-name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Responsável*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="guardian-name"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o nome do responsável"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="guardian-birthdate"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Data de Nascimento
                                </label>
                                < input onChange={handleChange} 
                                    type="date"
                                    id="guardian-birthdate"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="guardian-profession"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Profissão*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="guardian-profession"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite a profissão"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="guardian-contact"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Contato*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="guardian-contact"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o contato"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="guardian-education"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Escolaridade*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="guardian-education"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite a escolaridade"
                                    
                                />
                            </div>

                        </div>

                    </div>
                </div>

                <div className="w-full">
                    <h2 className="w-full text-xl text-gray-900 dark:text-gray-70 mb-3 border-b-2 p-2">Dados socioeconômicos/saúde</h2>

                    <div className="w-full flex gap-3">
                        <div className="grid grid-cols-3 grid-rows-4     gap-x-2.5 gap-y-2.5 items-center w-full">
                            <div className="mb-5">
                                <label
                                    htmlFor="residence"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Moradia*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="residence"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite a moradia"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="gov-benefit"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Recebe benefício do governo?*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="gov-benefit"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite se recebe benefício do governo"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="school-transport"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Usuário de Transporte Escolar?*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="school-transport"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite se é usuário de transporte escolar"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="medication-use"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Faz uso de alguma medicação?*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="medication-use"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite se faz uso de alguma medicação"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="frequent-illness"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Tem doenças frequentemente?*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="frequent-illness"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite se tem doenças frequentemente"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="allergy"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Tem algum tipo de alergia?*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="allergy"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite se tem algum tipo de alergia"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="food-restriction"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Tem alguma restrição alimentar?*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="food-restriction"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite se tem alguma restrição alimentar"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="blood-type"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Qual o Tipo Sanguíneo?*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="blood-type"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite o tipo sanguíneo"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="difficulty"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    Tem alguma dificuldade?*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="difficulty"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite se tem alguma dificuldade"
                                    
                                />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="nis"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
                                >
                                    NIS responsável:*
                                </label>
                                < input onChange={handleChange} 
                                    type="text"
                                    id="nis"
                                    className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Digite Nis do responsável"
                                    
                                />
                            </div>


                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="text-white bg-gray-50 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-500"
                >
                    Cadastrar Aluno
                </button>
            </form>

        </div>

    );
}

export default Form;  