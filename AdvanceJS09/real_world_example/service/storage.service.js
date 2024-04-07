class StorageService {

    static persist_user = {
        set: (v) => StorageService.setInStorage('users', v),
        get: () => StorageService.getFromStorage('users')
    }
    static token = {
        set: (v) => StorageService.setInStorage('token', v),
        get: () => StorageService.getFromStorage('token')
    }

    static getFromStorage(k) {
        try {
            const values = localStorage.getItem(k);
            return JSON.parse(values);
        } catch (error) {
            console.log(error);
        }
    }

    static setInStorage(k, v) {
        try {
            const value = JSON.stringify(v);
            localStorage.setItem(k, value);
        } catch (error) {
            console.log(error);
        }
    }
}

export default StorageService;