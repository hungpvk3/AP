import axiosClient from "../helpers/axiosClient";
import { PATH_COURSE } from "../contants/PATH";

class Course {
    getCourses() {
        return axiosClient.get(PATH_COURSE.GET_COURSES);
    }

    getCoursesPagination(limit, page) {
        return axiosClient.get(
            `${PATH_COURSE.GET_COURSES}?limit=${limit}&page=${page}`
        );
    }

    getCoursesMajor(id) {
        return axiosClient.get(`${PATH_COURSE.GET_COURSE_MAJOR}/${id}`);
    }

    postCourse(courseData) {
        const uri = `${PATH_COURSE.POST_COURSE}`;
        return axiosClient.post(uri, courseData);
    }

    updateCourse(id, courseData) {
        return axiosClient.put(
            `${PATH_COURSE.UPDATE_COURSE}/${id}`,
            courseData
        );
    }

    deleteCourse(id) {
        const uri = `${PATH_COURSE.DELETE_COURSE}/${id}`;
        return axiosClient.delete(uri);
    }

    searchCourse(key) {
        const uri = `${PATH_COURSE.COURSE_SEARCH}?keySearch=${key}`;
        return axiosClient.get(uri);
    }
}

export default new Course();
