const generateParamsForRequest = <T extends Record<keyof T, string>>(
    url: string,
    filterObject: T
) => {
    let params = Object.keys(filterObject).reduce((acc: string, k: string, i: number) => {
        const value = filterObject[k as keyof T];
        if (value !== '') {
            acc += `${i === 0 ? '' : '&'}${String(k)}=${encodeURIComponent(value)}`;
        }
        return acc;
    }, '');

    return params !== '' ? `${url}?${params}` : url;
};

export default generateParamsForRequest;