import axios, {AxiosResponse} from "axios";

export const doProjects = (params?: any) => {
    return axios.get<any, AxiosResponse<RESResponse.Response<RESProject.Projects[]>>>(`${process.env.REQUEST_URL}/api/client/web/projects`, {params})
}

export const doProject = (id?: string) => {
    return axios.get<any, AxiosResponse<RESResponse.Response<RESProject.Project>>>(`${process.env.REQUEST_URL}/api/client/web/projects/${id}`)
}

export const doProjectByRelated = (classification?: string) => {
    return axios.get<any, AxiosResponse<RESResponse.Response<RESProject.Related[]>>>(`${process.env.REQUEST_URL}/api/client/web/project/related`, {params: {classification}})
}