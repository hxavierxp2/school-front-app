import { useForm } from '../helpers/useForm';

function Form() {
    const { handleChange, handleSubmit } = useForm();
    
    return (
        <div className="flex flex-col h-screen">
            <form className="w-full mx-auto p-6 h-screen pb-20" style={{ overflow: "scroll" }} onSubmit={(e: React.FormEvent<HTMLFormElement>) => {handleSubmit(e, "formTeacher")}}>

            <div className="w-full">
    <h2 className="w-full text-xl text-gray-900 dark:text-gray-70 mb-3 border-b-2 p-2">Cadastro de Professor</h2>

    <div className="w-full flex flex-wrap gap-3">
        <div className="w-full lg:w-1/2 mb-5">
            <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
            >
                Nome Completo*
            </label>
            <input onChange={handleChange} 
                type="text"
                id="name"
                className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Digite o nome completo"
                required
            />
        </div>

        <div className="w-full lg:w-1/2 mb-5">
            <label
                htmlFor="dob"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
            >
                Data de Nascimento*
            </label>
            <input onChange={handleChange} 
                type="date"
                id="dob"
                className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
            />
        </div>

        <div className="w-full lg:w-1/2 mb-5">
            <label
                htmlFor="cpf"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
            >
                CPF*
            </label>
            <input onChange={handleChange} 
                type="text"
                id="cpf"
                className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Digite o CPF"
                required
            />
        </div>

        <div className="w-full lg:w-1/2 mb-5">
            <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
            >
                E-mail*
            </label>
            <input onChange={handleChange} 
                type="email"
                id="email"
                className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Digite o e-mail"
                required
            />
        </div>

        <div className="w-full lg:w-1/2 mb-5">
            <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
            >
                Telefone*
            </label>
            <input onChange={handleChange} 
                type="text"
                id="phone"
                className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Digite o telefone"
                required
            />
        </div>

        <div className="w-full lg:w-1/2 mb-5">
            <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
            >
                Disciplina*
            </label>
            <input onChange={handleChange} 
                type="text"
                id="subject"
                className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Digite a disciplina"
                required
            />
        </div>

        <div className="w-full lg:w-1/2 mb-5">
            <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
            >
                Endereço Completo*
            </label>
            <input onChange={handleChange} 
                type="text"
                id="address"
                className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Digite o endereço completo"
                required
            />
        </div>

        <div className="w-full lg:w-1/2 mb-5">
            <label
                htmlFor="registration-number"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
            >
                Nº de Registro Profissional
            </label>
            <input onChange={handleChange} 
                type="text"
                id="registration-number"
                className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Digite o nº de registro profissional"
            />
        </div>

        <div className="w-full lg:w-1/2 mb-5">
            <label
                htmlFor="workload"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
            >
                Carga Horária Semanal*
            </label>
            <input onChange={handleChange} 
                type="text"
                id="workload"
                className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Digite a carga horária semanal"
                required
            />
        </div>

        <div className="w-full lg:w-1/2 mb-5">
            <label
                htmlFor="work-shift"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
            >
                Turno de Trabalho*
            </label>
            <select onChange={handleChange} 
                id="work-shift"
                className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
            >
                <option value="" disabled selected>Selecione o turno</option>
                <option value="morning">Manhã</option>
                <option value="afternoon">Tarde</option>
                <option value="night">Noite</option>
                <option value="full-time">Integral</option>
            </select>
        </div>

        <div className="w-full lg:w-1/2 mb-5">
            <label
                htmlFor="experience-years"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
            >
                Anos de Experiência*
            </label>
            <input onChange={handleChange} 
                type="number"
                id="experience-years"
                className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Digite os anos de experiência"
                required
            />
        </div>

        <div className="w-full lg:w-1/2 mb-5">
            <label
                htmlFor="previous-school"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-70"
            >
                Escola Anterior
            </label>
            <input onChange={handleChange} 
                type="text"
                id="previous-school"
                className="placeholder:text-white shadow-sm bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-gray-70 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Digite o nome da escola anterior"
            />
        </div>

    </div>
</div>


                <button
                    type="submit"
                    className="text-white bg-gray-50 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-500"
                >
                    Cadastrar Professor
                </button>
            </form>

        </div>

    );
}

export default Form;  