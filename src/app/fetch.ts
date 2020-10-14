export default async function fetchHandler (path: string) {
    // any request headers needed?
    const baseUrl = 'https://api.github.com/';
    const response = await fetch(baseUrl + path)
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
