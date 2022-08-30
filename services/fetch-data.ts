import { HiveUsers } from '../pages/api/data.interface';

const fetchData = async (): Promise<{
    users: Partial<HiveUsers>;
    communities: HiveUsers;
}> => {
    const url = '/api/data';

    // Note: We're not handling any errors or anything really here, just fetch the data async
    return await fetch(url, {
        cache: 'force-cache',
    }).then((response) => response.json());
};

export default fetchData;
