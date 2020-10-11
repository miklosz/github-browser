export const fetchHandler = async (url: string) => {
    // will handle fetch and return data

    // List users: https://api.github.com/users
    // Single user: https://api.github.com/user/{login}
    
    const response = await fetch(url)

    if (response.ok) {
        return await response.json()
    } else {
        return ({
            error: {
                status: response.status,
                message: response.statusText
            }
        })
    }

}