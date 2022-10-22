export default class HttpClientService {

    private static fetchOptions: RequestInit = {
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    };

    public static sendGet<T>(endpoint: string): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            fetch(endpoint, {
                ...HttpClientService.fetchOptions,
                method: 'GET'
            }).then((response) => {
                response.json().then(resolve).catch(reject);
            }).catch((e) => {
                reject(e);
            });
        });
    }

    public static sendPost() {
        //ToDo Add Post Method
    }
}
