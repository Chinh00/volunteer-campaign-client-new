import axiosClient from './axiosClient';

const milestoneApi = {
    async listMilestones() {
        const url = 'milestone/list';
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async createMilestone(data) {
        const url = 'milestone/create';
        try {
            const response = await axiosClient.post(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async updateMilestone(data, id) {
        const url = 'milestone/update/' + id;
        try {
            const response = await axiosClient.put(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async searchMilestones(year) {
        const url = 'milestone/search/' + year.target.value;
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async deleteMilestone(id) {
        const url = 'milestone/delete/' + id;
        try {
            const response = await axiosClient.delete(url);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async getDetailMilestone(id) {
        const url = 'milestone/'+id;
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },  
};

export default milestoneApi;