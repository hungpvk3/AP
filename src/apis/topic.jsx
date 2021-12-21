import axiosClient from "../helpers/axiosClient";
import { PATH_TOPIC } from "../contants/PATH";

class Topic {
    getTopics() {
        const uri = `${PATH_TOPIC.GUD_TOPICS}`;
        return axiosClient.get(uri);
    }
    createTopic(topicData) {
        const uri = `${PATH_TOPIC.GUD_TOPICS}/store`;
        return axiosClient.post(uri, topicData);
    }
    updateTopic(id, topicData) {
        const uri = `${PATH_TOPIC}/${id}`;
        return axiosClient.put(uri, topicData);
    }
    deleteTopic(id) {
        return axiosClient.delete(`${PATH_TOPIC.GUD_TOPICS}/${id}`);
    }
}

export default new Topic();
