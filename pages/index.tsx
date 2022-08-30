import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/index.module.scss';
import { useEffect, useState } from 'react';
import { HiveSearchEntity, HiveUsers } from './api/users.interface';
import fetchUsers from '../services/fetch-users';
import SkeletonNoUsers from '../components/molecules/no-users';
import User from '../components/molecules/user';
import SearchBar from '../components/organisms/search-bar';

const Home: NextPage = () => {
    const [users, setUsers] = useState<HiveUsers>();
    const [filteredUsers, setFilteredUsers] = useState<Partial<HiveUsers>>();
    const [overlayOpen, setOverlayOpen] = useState<boolean>(false);

    useEffect(() => {
        fetchUsers().then((users) => {
            setUsers(users);
            // Set filtered users as well to the same result, not real world, but for ease of use.
            setFilteredUsers(users);
        });
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Hive One Search</title>
                <meta name="description" content="Hive one coding challenge" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <div className={styles.logo}></div>
                <SearchBar
                    users={users!}
                    filteredCallback={setFilteredUsers}
                    overlayCallback={setOverlayOpen}
                />
            </header>
            <main
                className={`${styles.main} ${
                    overlayOpen ? styles.mainBlurred : ''
                }`}
            >
                <div className={styles.sidebar}></div>
                <div className={styles.users}>
                    {/* Probably these lines should have been in an organism / template  */}
                    {!filteredUsers! && <SkeletonNoUsers />}
                    {filteredUsers! &&
                        Object.values(filteredUsers).map(
                            (user: HiveSearchEntity) => {
                                return <User key={user.idString} user={user} />;
                            },
                        )}
                </div>
            </main>
        </div>
    );
};

export default Home;
