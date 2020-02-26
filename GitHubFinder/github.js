class GitHub {
    constructor() {
        this.client_id = '00d4e36904eb3faaeb67';
        this.client_secret = '7d883fdc602f6d5605d84d0661356919989af3ae';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }


    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();


        return {
            profile,
            repos
        }

    }
}