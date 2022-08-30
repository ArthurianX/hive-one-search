import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/index.module.scss';
import { useEffect, useState } from 'react';
import { HiveSearchEntity, HiveUsers } from './api/data.interface';
import fetchData from '../services/fetch-data';
import SkeletonNoUsers from '../components/molecules/no-users';
import User from '../components/molecules/user';
import SearchBar from '../components/organisms/search-bar';

const Home: NextPage = () => {
    const [users, setUsers] = useState<HiveUsers>();
    const [communities, setCommunities] = useState<HiveUsers>();
    const [filteredResults, setFilteredResults] =
        useState<Partial<HiveUsers>>();
    const [overlayOpen, setOverlayOpen] = useState<boolean>(false);

    useEffect(() => {
        fetchData().then(({ users, communities }) => {
            // @ts-ignore
            setUsers(users);
            setCommunities(communities);
            // Set filtered users as well to the same result, not real world, but for ease of use.
            setFilteredResults(users);
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
                    communities={communities!}
                    filteredCallback={setFilteredResults}
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
                    {!filteredResults! && <SkeletonNoUsers />}
                    {filteredResults! &&
                        Object.values(filteredResults).map(
                            (entity: HiveSearchEntity) => {
                                return (
                                    <User key={entity.idString} user={entity} />
                                );
                            },
                        )}
                </div>
            </main>
        </div>
    );
};

export default Home;
