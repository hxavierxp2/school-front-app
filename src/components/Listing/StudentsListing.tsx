import { useForm } from '../helpers/useForm';
import students from './StudentsJson.json';

function Listing() {
    const { getJson } = useForm();
    const data = getJson("formStudents", students)
    return (
        <div className="flex flex-col h-screen">
            <div className="relative overflow-x-auto shadow-md">
                <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900 p-3">

                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="table-search-users"
                            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Buscar aluno"
                        />
                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>

                            <th scope="col" className="px-6 py-3">
                                NOME
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Turma
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                EDITAR
                            </th>
                            <th scope="col" className="px-6 py-3">
                                INFORMAÇÕES
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((student: any) => (
                            <tr key={student['student-name']} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <div className="">
                                        <div className="text-base font-semibold">{student['student-name']}</div>
                                        <div className="font-normal text-gray-500">Contato do Responsável: {student['guardian-contact']}</div>
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    {student['series']} ano
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Finalizado
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar Aluno</a>
                                </td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Visualizar</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>

    );
}

export default Listing;  