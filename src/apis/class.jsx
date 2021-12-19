import axiosClient from "../helpers/axiosClient";
import { PATH_CLASS } from "../contants/PATH";

class Class {
    getClasses(page, limit) {
        return axiosClient.get(
            `${PATH_CLASS.GET_CLASSES}?page=${page}&limit=${limit}`
        );
    }

    getClassCourse(idCourse) {
        return axiosClient.get(`${PATH_CLASS.GET_CLASS_COURSE}/${idCourse}`);
    }

    getClassUser() {
        return axiosClient.get(`${PATH_CLASS.GET_CLASS_USER}`);
    }

    getUsersClass(classId) {
        return axiosClient.get(`${PATH_CLASS.GET_USER_CLASS}/${classId}`);
    }

    postClass(classData) {
        return axiosClient.post(`${PATH_CLASS.POST_CLASS}`, classData);
    }

    updateClass(idClass, classData) {
        return axiosClient.put(
            `${PATH_CLASS.UPDATE_CLASS}/${idClass}`,
            classData
        );
    }

    deleteClass(idClass) {
        const uri = `${PATH_CLASS.DELETE_CLASS}/${idClass}`;
        return axiosClient.delete(uri);
    }

    addStudent(idClass, students) {
        const uri = `${PATH_CLASS.ADD_STUDENT}/${idClass}`;
        return axiosClient.patch(uri, students);
    }

    removeStudent(idClass, students) {
        const uri = `${PATH_CLASS.REMOVE_STUDENT}/${idClass}`;
        return axiosClient.patch(uri, students);
    }
}

export default new Class();
