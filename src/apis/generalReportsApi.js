import axiosClient from "./axiosClient";

const generalReportsApi = {
    async listGeneralReport() {
        const url = 'generalReports';
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async createGeneralReport(data) {
        const url = 'createGeneralReport';
        try {
            const response = await axiosClient.post(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async updateGeneralReport(data, id) {
        const url = 'updateGeneralReport';
        try {
            const response = await axiosClient.put(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async searchGeneralReport(name) {
        const url = 'searchGeneralReports/' + name.target.value;
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },

    async getDetailGeneralReport(id) {
        const url = 'generalReport/' + id;
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },

    async deleteGeneralReport(id) {
        const url = 'deleteStory/' + id;
        try {
            const response = await axiosClient.delete(url);
            return response;
        } catch (error) {
            throw error;
        }
    },
}

export default generalReportsApi;
