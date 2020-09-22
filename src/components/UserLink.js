import React from 'react';
import { withRouter } from 'react-router';

const UserLink = ({ history }) => (
    <button onClick={() => history.push('/customer')}>Show all users</button>
);

export default withRouter(UserLink);
