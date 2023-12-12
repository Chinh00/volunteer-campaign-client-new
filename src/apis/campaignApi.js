import axiosClient from "./axiosClient";

const campaignApi = {
    async listCampaign() {
        const url = 'campaigns';
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async createCampaign(data) {
        const url = 'createCampaign';
        try {
            const response = await axiosClient.post(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async updateCampaign(data, id) {
        const url = 'updateCampaign';
        try {
            const response = await axiosClient.put(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async updateCampaignStatus(data) {
        const url = 'campaign/updateCampaignStatus';
        try {
            const response = await axiosClient.put(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    },
    
    async searchCampaign(address) {
        const url = 'campaign/searchCampaign/'+address.target.value;
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },

    async getDetailCampaign(id) {
        const url = 'campaign/'+id;
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },   
}

export default campaignApi;
