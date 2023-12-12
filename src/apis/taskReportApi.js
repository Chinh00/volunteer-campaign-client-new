import axiosClient from './axiosClient';

const taskReportApi = {
    async listTaskReport() {
        const url = 'taskReports';
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async createTaskReport(data) {
        const url = 'createTaskReport';
        try {
            const response = await axiosClient.post(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async updateTaskReport(data, id) {
        const url = 'updateTaskReport';
        try {
            const response = await axiosClient.put(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async searchTaskReport(keyword) {
        const url = 'taskReports/search/' + keyword.target.value;
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async deleteTaskReport(id) {
        const url = 'deleteTaskReport' + id;
        try {
            const response = await axiosClient.delete(url);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async getDetailTaskReport(id) {
        const url = 'taskReport/' + id;
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },  
};

export default taskReportApi;
