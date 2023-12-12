import axiosClient from "./axiosClient";

const issueApi = {
    async listIssue() {
        const url = 'issues';
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async createIssue(data) {
        const url = 'createIssue';
        try {
            const response = await axiosClient.post(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async updateIssue(data) {
        const url = 'updateIssue';
        try {
            const response = await axiosClient.put(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async searchIssue(name) {
        const url = 'searchIssue/' + name.target.value;
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },

    async getDetailIssue(id) {
        const url = 'issue/' + id;
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },

    async deleteIssue(id) {
        const url = 'deleteIssue/' + id;
        try {
            const response = await axiosClient.delete(url);
            return response;
        } catch (error) {
            throw error;
        }
    },
}

export default issueApi;
