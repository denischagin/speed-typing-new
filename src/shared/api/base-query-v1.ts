import {TokenService} from "@entities/token";
import {ViewerService} from "@entities/viewer";
import axios, {AxiosRequestConfig} from "axios";

export const baseQueryV1Instance = axios.create({
    baseURL: "http://localhost:8443/api/v1",
    withCredentials: true,
})

// add access token to every request
baseQueryV1Instance.interceptors.request.use((config) => {
    const token = TokenService.getAccessToken()

    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`
    } else {
        TokenService.deleteAccessToken()
    }


    return config;
})

// refresh access token if it expires
baseQueryV1Instance.interceptors.response.use((response) => {
    return response
}, async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
            const response = await ViewerService.refresh();

            if (response) TokenService.setAccessToken(response.access);
            else {
                TokenService.deleteAccessToken();
            }
        } catch (e) {
            TokenService.deleteAccessToken();
        }

        return baseQueryV1Instance(originalRequest);
    }
    return Promise.reject(error);
});

export const baseQueryV1 = <R>(config: AxiosRequestConfig | string) => {
    if (typeof config === "string")
        return baseQueryV1Instance<R>({
            url: config
        });
    return baseQueryV1Instance<R>(config);
}
