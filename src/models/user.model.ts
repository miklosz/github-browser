export interface IUser {
    login: string
    id: number,
    avatar_url: string,
    url: string,
    html_url: string
    name?: string,
    location? : string,
    followers?: number,
    following?: number,
    public_repos: number,
    repos_url: string

}

export const defaultValue: Readonly<IUser> = {
    login: '',
    id: 0,
    avatar_url: '',
    url: '',
    html_url: '',
    repos_url: '',
    public_repos: 0
};

export default IUser