import type { NextPage } from 'next';
import Head from 'next/head';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import styles from '../styles/index.module.scss';
import { useEffect, useState } from 'react';
import { HiveUsers } from './api/users.interface';
import fetchUsers from '../services/fetch-users';
import NoUsers from '../components/no-users';

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
                    <NoUsers />
                </div>
            </main>
        </div>
    );
};

export default Home;
