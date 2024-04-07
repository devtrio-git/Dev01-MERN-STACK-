class User {
    name;
    image;
    first_name;
    last_name;
    id;
    email;

    constructor(data) {
        this.name = this.getFullName(data.first_name, data.last_name);
        this.email = data.email;
        this.image = data.avatar;
        this.id = data.id;
        this.first_name = data.first_name;
        this.last_name = data.last_name;
    }


    getFullName(fn, ln) {
        return `${fn} ${ln}`;
    }
}

export default User;