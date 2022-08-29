import { HiveUsers } from '../pages/api/users.interface';

const fetchUsers = async (): Promise<HiveUsers> => {
    const url = '/api/users';

    // Note: We're not handling any errors or anything really here, just fetch the data async
    return await fetch(url, {
        cache: 'force-cache',
    }).then((response) => response.json());
};

export default fetchUsers;
