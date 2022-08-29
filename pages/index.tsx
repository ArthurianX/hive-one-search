import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/index.module.scss';
import { useEffect, useState } from 'react';
import { HiveSearchEntity, HiveUsers } from './api/users.interface';
import fetchUsers from '../services/fetch-users';
import SkeletonNoUsers from '../components/molecules/no-users';

const Home: NextPage = () => {
    const [users, setUsers] = useState<HiveUsers>();

    useEffect(() => {
        fetchUsers().then((users) => setUsers(users));
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
            </header>
            <main className={styles.main}>
                <div className={styles.sidebar}></div>
                <div className={styles.users}>
                    {/* Probably these lines should have been in a organism / template  */}
                    {!users! && <SkeletonNoUsers />}

                    {users! &&
                        Object.values(users).map((user: HiveSearchEntity) => {
                            return (
                                <div key={user.idString}>
                                    <h2>{user.name}</h2>
                                    <hr />
                                </div>
                            );
                        })}
                </div>
            </main>
        </div>
    );
};

export default Home;
