import axios from 'axios';
import Users from './Users';

jest.mock('axios');



// or you could use the following depending on your use case:
// axios.get.mockImplementation(() => Promise.resolve(resp))

it("testing mock api", () => {
    const users = [{name: 'Bob'}];
    const resp = {data: users};
    axios.get.mockResolvedValue(resp);
    return Users.all().then(data => expect(data).toEqual(users));
})
