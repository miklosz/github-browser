export default async function fetchHandler (path: string) {
    // any request headers needed?
    const baseUrl = 'https://api.github.com/';
    const options = {
        headers : {
            Authorization: `${process.env.REACT_APP_GH_TOKEN}`,
            accept: 'application/vnd.github.v3+json'
        }
    }
    const response = await fetch(baseUrl + path, options)
    let data

    if (response.ok) {
        data = await response.json()
    } else {
        data = {
            error: {
                title: 'Failed to fetch data from GitHub API',
                status: response.status,
                message: response.statusText
            }
        }
    }

    return data
}
