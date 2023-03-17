const fetchWithAuth = (url: string, method: 'post' | "get") : 1 | -1 => {
    return 1;
}

fetchWithAuth('url', 'get');

let method = 'get';

fetchWithAuth('url', method as 'get');

const postMethod = 'post';

fetchWithAuth('url', postMethod);

