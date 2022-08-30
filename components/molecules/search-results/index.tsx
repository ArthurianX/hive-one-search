import { HiveSearchEntity, HiveUsers } from '../../../pages/api/data.interface';
import User from '../user';

const SearchResults = ({ users }: { users: Partial<HiveUsers> }) => {
    return (
        <>
            <div>Search results:</div>
            {users! &&
                Object.values(users).map((user: HiveSearchEntity) => {
                    return <User key={user.idString} user={user} />;
                })}
            {!users && <small>No results</small>}
        </>
    );
};

export default SearchResults;
