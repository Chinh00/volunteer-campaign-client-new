import axiosClient from "./axiosClient";

const userApi = {
    login(email, password) {
        const url = '/Login';
        return axiosClient
            .post(url, {
                email,
                password,
            })
            .then(response => {
                console.log(response);
                if (response.role) {
                    localStorage.setItem("token", response.accessToken);
                    localStorage.setItem("user", JSON.stringify(response));
                }
                return response;
            });
    },
    logout() {
        const url = '/user/logout';
        return axiosClient.get(url);
    },
    listUserByAdmin() {
        const url = '/accounts';
        return axiosClient.get(url);
    },
    banAccount(data) {
        const url = data.email + '/disable';
        return axiosClient.put(url, data);
    },
    unBanAccount(data) {
        const url = data.email + '/enable';
        return axiosClient.put(url, data);
    },
    updateProfile(data, id) {
        const url = '/account/'+id;
        return axiosClient.put(url, data);
    },
    getProfile(id) {
        const url = '/account/' + id;
        return axiosClient.get(url);
    },
    searchUser(email) {
        const url = '/account/searchAccount/' + email.target.value;
        return axiosClient.get(url);
    },
}

export default userApi;