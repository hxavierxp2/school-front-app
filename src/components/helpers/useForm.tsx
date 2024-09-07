import { useState } from 'react';
import disciplines from '../Listing/DisciplinesJson.json';
import students from '../Listing/StudentsJson.json';
import teachers from '../Listing/TeachersJson.json';

type Discipline = any

type FormData = Discipline;

export const useForm = () => {
    const [formData, setFormData] = useState<FormData>({} as FormData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prevState: any) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const getStorage = (name: string) => {
        const storageItem = localStorage.getItem(name);

        switch (name) {
            case "formDisciplines":
                if (storageItem) {
                    try {
                        return [...Object.values(JSON.parse(storageItem)), formData]
                    } catch (e) {
                        console.error(e);
                        return disciplines
                    }
                } else {
                    try {
                        return [...Object.values(disciplines), formData]
                    } catch (e) {
                        console.error(e);
                        return disciplines
                    }
                }
            case "formStudents":
                if (storageItem) {
                    try {
                        return [...Object.values(JSON.parse(storageItem)), formData]
                    } catch (e) {
                        console.error(e);
                        return students
                    }
                } else {
                    try {
                        return [...Object.values(students), formData]
                    } catch (e) {
                        console.error(e);
                        return students
                    }
                }
            case "formTeacher":
                if (storageItem) {
                    try {
                        return [...Object.values(JSON.parse(storageItem)), formData]
                    } catch (e) {
                        console.error(e);
                        return teachers
                    }
                } else {
                    try {
                        return [...Object.values(teachers), formData]
                    } catch (e) {
                        console.error(e);
                        return teachers
                    }
                }
            default:                
                return
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, listName: string) => {
        e.preventDefault();

        switch (listName) {
            case "formDisciplines":
                localStorage.setItem(listName, JSON.stringify(getStorage(listName)));
                return
            case "formStudents":
                localStorage.setItem(listName, JSON.stringify(getStorage(listName)));
                return
            case "formTeacher":
                localStorage.setItem(listName, JSON.stringify(getStorage(listName)));
                return
            default:
                return
        }
    };

    const getJson = (name: string, data: any) => {
        const storedDisciplines = localStorage.getItem(name);
        if (storedDisciplines) {
            return JSON.parse(storedDisciplines)
        } else {
            return data
        }
    };

    return { handleChange, handleSubmit, getJson };
};
