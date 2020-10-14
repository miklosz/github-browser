export default async function fetchHandler (path: string) {
    // any request headers needed?
    const baseUrl = 'https://api.github.com/';
    const options = {
        headers : {
            Authorization: 'token 71f6b5e111ddbee4177eb8fcd1770bec13b96d57',
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
