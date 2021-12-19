import axiosClient from "../helpers/axiosClient";
import { PATH_MAJOR } from "../contants/PATH";

class Majors {
  getMajors() {
    return axiosClient.get(PATH_MAJOR.GET_MAJORS);
  }
  postMajors(majorData) {
    return axiosClient.post(PATH_MAJOR.POST_MAJOR, majorData);
  }
  updateMajor(majorId, majorData) {
    return axiosClient.put(`${PATH_MAJOR.UPDATE_MAJOR}/${majorId}`, majorData);
  }
  deleteMajor(majorId) {
    return axiosClient.delete(`${PATH_MAJOR.DELETE_MAJOR}/${majorId}`);
  }
}

export default new Majors();
