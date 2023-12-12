import axiosClient from "./axiosClient";

const requestVolunteerApi = {
    async listRequestVolunteer() {
        const url = 'RequestVolunteer/list';
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async createRequestVolunteer(data) {
        const url = 'RequestVolunteer/create';
        try {
            const response = await axiosClient.post(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async updateRequestVolunteer(data, id) {
        const url = 'RequestVolunteer/updateVolunteerStatus/' + id;
        try {
            const response = await axiosClient.put(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async searchRequestVolunteer(year) {
        const url = 'RequestVolunteer/searchRequestVolunteer/' + year.target.value;
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async deleteRequestVolunteer(id) {
        const url = 'RequestVolunteer/delete/' + id;
        try {
            const response = await axiosClient.delete(url);
            return response;
        } catch (error) {
            throw error;
        }
    },
    async getDetailRequestVolunteer(id) {
        const url = 'RequestVolunteer/'+id;
        try {
            const response = await axiosClient.get(url);
            return response;
        } catch (error) {
            throw error;
        }
    },  
}

export default requestVolunteerApi;
