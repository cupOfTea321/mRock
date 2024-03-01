export const fetchGetWithToken = async (url, token) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    if (response.status === 403){

    }
    if (response.status === 403 || response.status === 401){
        throw new Error('token_not_valid');
    }
    if (!response.ok) {
        throw new Error('An error occurred while fetching the data.');
    }

    const musician = await response.json();
    return musician
};
