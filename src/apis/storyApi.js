import axiosClient from "./axiosClient";

const storyApi = {
    async listStories() {
        const url = 'stories';
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async createStories(data) {
        const url = 'createStory';
        try {
            const response = await axiosClient.post(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async updateStories(data, id) {
        const url = 'updateStory';
        try {
            const response = await axiosClient.put(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async searchStories(name) {
        const url = 'stories/search/' + name.target.value;
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },

    async getDetailStories(id) {
        const url = 'story/' + id;
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },

    async deleteStories(id) {
        const url = 'deleteStory/' + id;
        try {
            const response = await axiosClient.delete(url);
            return response;
        } catch (error) {
            throw error;
        }
    },
}

export default storyApi;
