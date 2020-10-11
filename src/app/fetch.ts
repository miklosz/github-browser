export const fetchHandler = async (url: string) => {
    // will handle fetch and return data

    // List users: https://api.github.com/users
    // Single user: https://api.github.com/user/{login}

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
