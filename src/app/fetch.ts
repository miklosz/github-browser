export default async function fetchHandler (url: string) {
    const response = await fetch(url)
    let data

    if (response.ok) {
        data = await response.json()
    } else {
        data = {
            error: {
                status: response.status,
                message: response.statusText
            }
        }
    }

    return data
}
