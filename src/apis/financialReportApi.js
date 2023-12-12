import axiosClient from "./axiosClient";

const financialReportApi = {
    async listFinancialReport() {
        const url = 'financialReport/list';
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async createFinancialReport(data) {
        const url = 'financialReport/create';
        try {
            const response = await axiosClient.post(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async updateFinancialReport(data, id) {
        const url = 'financialReport/update/' + id;
        try {
            const response = await axiosClient.put(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async searchFinancialReport(year) {
        const url = 'financialReport/search/'+year.target.value;
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async deleteFinancialReport(id) {
        const url = 'financialReport/delete/' + id;
        try {
            const response = await axiosClient.delete(url);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async getDetailFinancialReport(id) {
        const url = 'financialReport/'+id;
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },  
}

export default financialReportApi;
