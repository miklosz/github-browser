export interface IRepo {
    name: string,
    description: string,
    html_url : string,
    language? : string
    updated: Date
}

export default IRepo