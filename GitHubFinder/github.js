class GitHub {
    constructor() {
        this.client_id = '00d4e36904eb3faaeb67';
        this.client_secret = '7d883fdc602f6d5605d84d0661356919989af3ae';
    }


    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }

    }
}