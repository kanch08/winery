import axios from 'axios';
import Users from './Users';
jest.mock('axios');
it("testing mock api", () => {
    const users = [{name: 'Bob'}];
    const resp = {data: users};
    axios.get.mockResolvedValue(resp);
    return Users.getUsers().then(data => expect(data).toEqual(users));
})
