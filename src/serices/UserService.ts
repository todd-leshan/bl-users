export class UserService {
    static async getUsers() {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'GET',
            });

            return res.json();
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}
