import axiosClient from "./axiosClient";

const donorApi = {
    async listDonor() {
        const url = 'donor/list';
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async createDonor(data) {
        const url = 'donor/create';
        try {
            const response = await axiosClient.post(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async updateDonor(data, id) {
        const url = 'donor/update/' + id;
        try {
            const response = await axiosClient.put(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async searchDonor(year) {
        const url = 'donor/search/' + year.target.value;
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async deleteDonor(id) {
        const url = 'donor/delete/' + id;
        try {
            const response = await axiosClient.delete(url);
            return response;
        } catch (error) {
            throw error;
        }
    },

    async getDetailDonor(id) {
        const url = 'donor/'+id;
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },   
}

export default donorApi;
