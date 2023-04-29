class Userrr {
    _login: string;

    get login() {
        return this._login;
    }

    set login(log: string) {
        this._login = `my-login-${log}`
    }
}

const userrrr = new Userrr();
userrrr.login = 'muLogin'
userrrr._login = 'alex';
console.log(userrrr.login);
