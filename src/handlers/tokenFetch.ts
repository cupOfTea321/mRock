export const fetchGetWithToken = async (url, token) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('An error occurred while fetching the data.');
    }

    const musician = await response.json();
    console.log(musician)
    return musician
};
