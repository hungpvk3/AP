import axiosClient from "../helpers/axiosClient";
import { PATH_SCHEDULE } from "../contants/PATH";

class Schedule {
    getSchedeulClass(classId) {
        return axiosClient.get(
            `${PATH_SCHEDULE.GET_SCHEDULE_CLASS}/classCode/${classId}`
        );
    }
}

export default new Schedule();
