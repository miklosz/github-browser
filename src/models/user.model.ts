export interface IUser {
    login: string
    id: number,
    avatar_url: string,
    url: string,
    html_url: string
    name?: string
}

export const defaultValue: Readonly<IUser> = {
    login: '',
    id: 0,
    avatar_url: '',
    url: '',
    html_url: ''
};