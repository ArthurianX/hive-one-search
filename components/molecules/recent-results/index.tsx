import { getRecentSearchResults } from '../../../services/recent-search-results';
import { useEffect, useState } from 'react';
import { HiveSearchEntity, HiveUsers } from '../../../pages/api/data.interface';
import User from '../user';

const RecentResults = () => {
    const [recents, setRecents] = useState<Partial<HiveUsers>>();
    useEffect(() => {
        setRecents(getRecentSearchResults());
    }, []);

    return (
        <>
            <div>Recent Searches:</div>
            {recents! &&
                Object.values(recents).map((user: HiveSearchEntity) => {
                    return <User key={user.idString} user={user} />;
                })}
            {!recents && <small>No recent searches</small>}
        </>
    );
};

export default RecentResults;
