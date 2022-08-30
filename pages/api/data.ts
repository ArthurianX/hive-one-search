import type { NextApiRequest, NextApiResponse } from 'next';
import { HiveUsers } from './data.interface';
import { getRandomInt } from '../../utils/random-interval';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ users: Partial<HiveUsers>; communities: HiveUsers }>,
) {
    const users = {};
    usersArray.map((user) => {
        // @ts-ignore
        users[user.idString] = user;
    });
    setTimeout(() => {
        res.status(200).json({ users, communities });
    }, getRandomInt(500, 1000));
}

const communities = {
    dogecoin: {
        idString: 'dogecoin',
        name: 'Dogecoin',
        seedPhrase: '',
        symbol: 'DOG',
        visible: true,
        communityStatus: 'published',
        themeColor: {
            hex: '#BA9F33',
        },
        category: [
            {
                id: '49451634',
                name: 'Cryptocurrencies',
                emoji: '💰',
            },
        ],
    },
    crypto: {
        idString: 'crypto',
        name: 'Crypto',
        seedPhrase: '#crypto',
        symbol: 'CRP',
        visible: true,
        communityStatus: 'published',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    nft: {
        idString: 'nft',
        name: 'NFT',
        seedPhrase: '#nft',
        symbol: 'NFT',
        visible: true,
        communityStatus: 'published',
        themeColor: {
            hex: '#5640FF',
        },
        category: [
            {
                id: '49451634',
                name: 'Cryptocurrencies',
                emoji: '💰',
            },
        ],
    },
    tesla: {
        idString: 'tesla',
        name: 'Tesla',
        seedPhrase: '#tesla',
        symbol: 'TSL',
        visible: true,
        communityStatus: 'published',
        themeColor: {
            hex: '#CC0000',
        },
        category: [
            {
                id: '49489748',
                name: 'Automotive',
                emoji: '🏎',
            },
        ],
    },
    polkadot: {
        idString: 'polkadot',
        name: 'Polkadot',
        seedPhrase: '',
        symbol: 'DOT',
        visible: true,
        communityStatus: 'published',
        themeColor: {
            hex: '#E6007A',
        },
        category: [
            {
                id: '49451634',
                name: 'Cryptocurrencies',
                emoji: '💰',
            },
        ],
    },
    python: {
        idString: 'python',
        name: 'Python',
        seedPhrase: '#python',
        symbol: 'PYT',
        visible: true,
        communityStatus: 'published',
        themeColor: {
            hex: '#5A9FD4',
        },
        category: [
            {
                id: '53037643',
                name: 'Programming',
                emoji: '',
            },
        ],
    },
    poker: {
        idString: 'poker',
        name: 'Poker',
        seedPhrase: '#Poker, #WSOP',
        symbol: 'PKR',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    shopify: {
        idString: 'shopify',
        name: 'Shopify',
        seedPhrase: 'Shopify, @Shopify',
        symbol: 'SPF',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#95BF46',
        },
        category: [],
    },
    yc: {
        idString: 'yc',
        name: 'YC',
        seedPhrase: '#ycombinator',
        symbol: 'YCO',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#FB651E',
        },
        category: [
            {
                id: '53037855',
                name: 'Venture Capital',
                emoji: '',
            },
        ],
    },
    react: {
        idString: 'react',
        name: 'React',
        seedPhrase: '',
        symbol: 'REA',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#61DAFB',
        },
        category: [
            {
                id: '53037643',
                name: 'Programming',
                emoji: '',
            },
        ],
    },
    'bored-ape-yacht-club-bayc': {
        idString: 'bored-ape-yacht-club-bayc',
        name: 'Bored Ape Yacht Club (BAYC)',
        seedPhrase: '#bayc #boredapeyachtclub',
        symbol: 'BAC',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    'crypto-punks': {
        idString: 'crypto-punks',
        name: 'Crypto Punks',
        seedPhrase: '#cryptopunks',
        symbol: 'CRP',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    'cool-cats': {
        idString: 'cool-cats',
        name: 'Cool Cats',
        seedPhrase: '#coolcats',
        symbol: 'COC',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    'lazy-lions': {
        idString: 'lazy-lions',
        name: 'Lazy Lions',
        seedPhrase: '#lazylions',
        symbol: 'LZL',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    'axie-infinity': {
        idString: 'axie-infinity',
        name: 'Axie Infinity',
        seedPhrase: '#axieinfinity',
        symbol: 'AXI',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    'world-of-women': {
        idString: 'world-of-women',
        name: 'World of Women',
        seedPhrase: '#worldofwomen',
        symbol: 'WOW',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    'pudgy-penguins': {
        idString: 'pudgy-penguins',
        name: 'Pudgy Penguins',
        seedPhrase: '#pudgypenguins',
        symbol: 'PDG',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    psychedelics: {
        idString: 'psychedelics',
        name: 'Psychedelics',
        seedPhrase: '#psychedelics',
        symbol: 'PSY',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    monero: {
        idString: 'monero',
        name: 'Monero',
        seedPhrase: '#monero',
        symbol: 'XMR',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [
            {
                id: '49451634',
                name: 'Cryptocurrencies',
                emoji: '💰',
            },
        ],
    },
    nba: {
        idString: 'nba',
        name: 'NBA',
        seedPhrase: '#nba',
        symbol: 'NBA',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    longevity: {
        idString: 'longevity',
        name: 'Longevity',
        seedPhrase: '#longevity',
        symbol: 'LGV',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    fintwit: {
        idString: 'fintwit',
        name: 'FinTwit',
        seedPhrase: '#fintwit',
        symbol: 'FTW',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    'star-trek': {
        idString: 'star-trek',
        name: 'Star Trek',
        seedPhrase: '#startrek',
        symbol: 'STR',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    'star-wars': {
        idString: 'star-wars',
        name: 'Star Wars',
        seedPhrase: '',
        symbol: 'STW',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    genomics: {
        idString: 'genomics',
        name: 'Genomics',
        seedPhrase: '#genomics',
        symbol: 'GNO',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    'build-in-public': {
        idString: 'build-in-public',
        name: 'Build in Public',
        seedPhrase: '#buildinpublic',
        symbol: 'BIP',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    sneakerheads: {
        idString: 'sneakerheads',
        name: 'Sneakerheads',
        seedPhrase: '#sneakerheads',
        symbol: 'SNK',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    makers: {
        idString: 'makers',
        name: 'Makers',
        seedPhrase: '#makers',
        symbol: 'MKR',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    'league-of-legends': {
        idString: 'league-of-legends',
        name: 'League of Legends',
        seedPhrase: '#leagueoflegends',
        symbol: 'LOL',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    'smart-city': {
        idString: 'smart-city',
        name: 'Smart City',
        seedPhrase: '#smartcity',
        symbol: 'SCT',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    nhl: {
        idString: 'nhl',
        name: 'NHL',
        seedPhrase: '#nhl',
        symbol: 'nhl',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    nfl: {
        idString: 'nfl',
        name: 'NFL',
        seedPhrase: '#nfl',
        symbol: 'NFL',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    zcash: {
        idString: 'zcash',
        name: 'ZCash',
        seedPhrase: '#zcash',
        symbol: 'ZCH',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    net: {
        idString: 'net',
        name: '.NET',
        seedPhrase: '#dotnet',
        symbol: 'NET',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    avalanche: {
        idString: 'avalanche',
        name: 'Avalanche',
        seedPhrase: '#avalanche',
        symbol: 'AVC',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    pokemon: {
        idString: 'pokemon',
        name: 'Pokemon',
        seedPhrase: '#pokemon',
        symbol: 'PKM',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    xbox: {
        idString: 'xbox',
        name: 'XBox',
        seedPhrase: '#xbox',
        symbol: 'XBX',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    playstation: {
        idString: 'playstation',
        name: 'Playstation',
        seedPhrase: '#playstation',
        symbol: 'PST',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    nintendo: {
        idString: 'nintendo',
        name: 'Nintendo',
        seedPhrase: '#nintendo',
        symbol: 'NTD',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    logtech: {
        idString: 'logtech',
        name: 'LogTech',
        seedPhrase: '#logtech',
        symbol: 'LOT',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    foodtech: {
        idString: 'foodtech',
        name: 'FoodTech',
        seedPhrase: '#foodtech',
        symbol: 'FOT',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    medtech: {
        idString: 'medtech',
        name: 'MedTech',
        seedPhrase: '#MedTech',
        symbol: 'MET',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    fintech: {
        idString: 'fintech',
        name: 'FinTech',
        seedPhrase: '#fintech',
        symbol: 'FIT',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    web3: {
        idString: 'web3',
        name: 'Web3',
        seedPhrase: '#web3',
        symbol: 'WB3',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    productivity: {
        idString: 'productivity',
        name: 'Productivity',
        seedPhrase: '#productivity',
        symbol: 'PRD',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    defi: {
        idString: 'defi',
        name: 'DeFi',
        seedPhrase: '#defi',
        symbol: 'DEF',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    blockchain: {
        idString: 'blockchain',
        name: 'Blockchain',
        seedPhrase: '#blockchain',
        symbol: 'BCK',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    'data-visualization': {
        idString: 'data-visualization',
        name: 'Data Visualization',
        seedPhrase: '#datavisualization ',
        symbol: 'DTV',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    ux: {
        idString: 'ux',
        name: 'UX',
        seedPhrase: '#UX #user-experience',
        symbol: 'UEX',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    'lightning-network': {
        idString: 'lightning-network',
        name: 'Lightning Network',
        seedPhrase: '#lightningnetwork',
        symbol: 'LTN',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    litecoin: {
        idString: 'litecoin',
        name: 'Litecoin',
        seedPhrase: '#litecoin',
        symbol: 'LTC',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [
            {
                id: '49451634',
                name: 'Cryptocurrencies',
                emoji: '💰',
            },
        ],
    },
    'shiba-inu': {
        idString: 'shiba-inu',
        name: 'Shiba Inu',
        seedPhrase: '#shibainu',
        symbol: 'SHI',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [
            {
                id: '49451634',
                name: 'Cryptocurrencies',
                emoji: '💰',
            },
        ],
    },
    cardano: {
        idString: 'cardano',
        name: 'Cardano',
        seedPhrase: '#cardano',
        symbol: 'CRD',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [
            {
                id: '49451634',
                name: 'Cryptocurrencies',
                emoji: '💰',
            },
        ],
    },
    binance: {
        idString: 'binance',
        name: 'Binance',
        seedPhrase: '#binance',
        symbol: 'BNC',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [
            {
                id: '49451634',
                name: 'Cryptocurrencies',
                emoji: '💰',
            },
        ],
    },
    javascript: {
        idString: 'javascript',
        name: 'JavaScript',
        seedPhrase: '#javascript',
        symbol: 'JVS',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [
            {
                id: '53037643',
                name: 'Programming',
                emoji: '',
            },
        ],
    },
    solana: {
        idString: 'solana',
        name: 'Solana',
        seedPhrase: '#solana',
        symbol: 'SOL',
        visible: true,
        communityStatus: 'published',
        themeColor: {
            hex: '#9945FF',
        },
        category: [
            {
                id: '49451634',
                name: 'Cryptocurrencies',
                emoji: '💰',
            },
        ],
    },
    'machine-learning': {
        idString: 'machine-learning',
        name: 'Machine Learning',
        seedPhrase: '#machinelearning',
        symbol: 'MLR',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [
            {
                id: '53037643',
                name: 'Programming',
                emoji: '',
            },
        ],
    },
    physics: {
        idString: 'physics',
        name: 'Physics',
        seedPhrase: '#Physicist, #Physics',
        symbol: 'PHY',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [
            {
                id: '53037663',
                name: 'Education',
                emoji: '',
            },
        ],
    },
    chess: {
        idString: 'chess',
        name: 'Chess',
        seedPhrase: '#chess',
        symbol: 'CHS',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    climate: {
        idString: 'climate',
        name: 'Climate',
        seedPhrase: '#climate',
        symbol: 'CMT',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    mit: {
        idString: 'mit',
        name: 'MIT',
        seedPhrase: '',
        symbol: 'MIT',
        visible: false,
        communityStatus: 'pending',
        themeColor: {
            hex: '#A31F34',
        },
        category: [
            {
                id: '53037663',
                name: 'Education',
                emoji: '',
            },
        ],
    },
    'new-york-times': {
        idString: 'new-york-times',
        name: 'New York Times',
        seedPhrase: 'nyt',
        symbol: 'NYT',
        visible: false,
        communityStatus: 'pending',
        themeColor: {
            hex: '#BBBBBB',
        },
        category: [
            {
                id: '49489873',
                name: 'Media and Information',
                emoji: '📰',
            },
        ],
    },
    apple: {
        idString: 'apple',
        name: 'Apple',
        seedPhrase: '#apple',
        symbol: 'APC',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    vc: {
        idString: 'vc',
        name: 'VC',
        seedPhrase: '"Venture Capital"',
        symbol: 'VCC',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    'formula-1': {
        idString: 'formula-1',
        name: 'Formula 1',
        seedPhrase: '#f1, #formula1',
        symbol: 'FMO',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#EE0000',
        },
        category: [
            {
                id: '49489748',
                name: 'Automotive',
                emoji: '🏎',
            },
        ],
    },
    yoga: {
        idString: 'yoga',
        name: 'Yoga',
        seedPhrase: '#yoga',
        symbol: 'YOG',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    seo: {
        idString: 'seo',
        name: 'SEO',
        seedPhrase: '#seo',
        symbol: 'SEO',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    virology: {
        idString: 'virology',
        name: 'Virology',
        seedPhrase: '#virology',
        symbol: 'VRL',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    nocode: {
        idString: 'nocode',
        name: 'NoCode',
        seedPhrase: '#nocode',
        symbol: 'NCD',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [
            {
                id: '53037643',
                name: 'Programming',
                emoji: '',
            },
        ],
    },
    vegan: {
        idString: 'vegan',
        name: 'Vegan',
        seedPhrase: '#vegan',
        symbol: 'VGN',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    cannabis: {
        idString: 'cannabis',
        name: 'Cannabis',
        seedPhrase: '',
        symbol: 'CNB',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    google: {
        idString: 'google',
        name: 'Google',
        seedPhrase: '#google',
        symbol: 'GGL',
        visible: true,
        communityStatus: 'pending',
        themeColor: {
            hex: '#5640FF',
        },
        category: [],
    },
    bitcoin: {
        idString: 'bitcoin',
        name: 'Bitcoin',
        seedPhrase: '#bitcoin',
        symbol: 'BTC',
        visible: true,
        communityStatus: 'published',
        themeColor: {
            hex: '#F7931A',
        },
        category: [
            {
                id: '49451634',
                name: 'Cryptocurrencies',
                emoji: '💰',
            },
        ],
    },
    ethereum: {
        idString: 'ethereum',
        name: 'Ethereum',
        seedPhrase: '#ethereum',
        symbol: 'ETH',
        visible: true,
        communityStatus: 'published',
        themeColor: {
            hex: '#62688F',
        },
        category: [
            {
                id: '49451634',
                name: 'Cryptocurrencies',
                emoji: '💰',
            },
        ],
    },
};
const usersArray = [
    {
        idString: 'reciprocal',
        communityStatus:
            'lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed',
        name: 'Burtie Bartram',
        seedPhrase: '1DnBF5herro9Xa4QToQxcYtCkbfuSS4BTU',
        symbol: 'BTC',
        themeColor: { hex: '#5bd0a2' },
        category: [],
    },
    {
        idString: 'algorithm',
        communityStatus:
            'duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis',
        name: 'Laurena Comolli',
        seedPhrase: '1PyhNSAAExhDmDwrfQmgcaftbPQ4qsvyGF',
        symbol: 'BTC',
        themeColor: { hex: '#0c9f58' },
        category: [],
    },
    {
        idString: 'intangible',
        communityStatus:
            'ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices',
        name: 'Salli Bariball',
        seedPhrase: '121z7P7mkCLXNtLgQWCUJ3sUUh8yDzXmWE',
        symbol: 'BTC',
        themeColor: { hex: '#3f0f20' },
        category: [],
    },
    {
        idString: 'transitional',
        communityStatus:
            'donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer',
        name: 'Nada Benoit',
        seedPhrase: '1Lzw2jyCTUUE4JsLZtPHH7EFDqLVGW2BdY',
        symbol: 'BTC',
        themeColor: { hex: '#a82ee3' },
        category: [],
    },
    {
        idString: 'superstructure',
        communityStatus:
            'est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed',
        name: 'Claudio Winter',
        seedPhrase: '1FYJZ7yjLURbeXRyBa7HdjLr8ZMsqZ87XJ',
        symbol: 'BTC',
        themeColor: { hex: '#30f487' },
        category: [],
    },
    {
        idString: 'contextually-based',
        communityStatus:
            'est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam',
        name: 'Massimiliano Deering',
        seedPhrase: '1ACGgx6msSbRdHMgFPwejLLrazfwYqeB3G',
        symbol: 'BTC',
        themeColor: { hex: '#9487a4' },
        category: [],
    },
    {
        idString: 'hierarchy',
        communityStatus:
            'magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien',
        name: 'Quentin Heiss',
        seedPhrase: '1C5pvXLV4wbDUhmYk5nQGScZjcut2W2NGC',
        symbol: 'BTC',
        themeColor: { hex: '#0b4c0d' },
        category: [],
    },
    {
        idString: 'Intuitive',
        communityStatus:
            'dapibus augue vel accumsan tellus nisi eu orci mauris lacinia',
        name: 'Cazzie McClay',
        seedPhrase: '1QEohhTuume3LxtkVUFWU5UFnA3uP6fYyB',
        symbol: 'BTC',
        themeColor: { hex: '#51d3c7' },
        category: [],
    },
    {
        idString: 'Organic',
        communityStatus:
            'rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam',
        name: 'Fleurette Philippon',
        seedPhrase: '1HCDPu2MYHjyFLk82odSHqiojbsYQyQRqy',
        symbol: 'BTC',
        themeColor: { hex: '#1b3d7f' },
        category: [],
    },
    {
        idString: 'complexity',
        communityStatus:
            'etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus',
        name: 'Ardyth Etherson',
        seedPhrase: '1KgG3MVRPTAf9xaKbAwEesL9HrcCXUpLBR',
        symbol: 'BTC',
        themeColor: { hex: '#657b45' },
        category: [],
    },
    {
        idString: 'functionalities',
        communityStatus:
            'integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis',
        name: 'Noemi Blewis',
        seedPhrase: '1Jk7hjGEmfj9WDurkmL9op2ZZNYsWZAuLS',
        symbol: 'BTC',
        themeColor: { hex: '#0ba49f' },
        category: [],
    },
    {
        idString: 'Face to face',
        communityStatus:
            'tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat',
        name: 'Bartholemy Lynd',
        seedPhrase: '13rTF2JS85s8S7utHHrw1P3rSHEy31DXHr',
        symbol: 'BTC',
        themeColor: { hex: '#8248e6' },
        category: [],
    },
    {
        idString: 'holistic',
        communityStatus:
            'in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin',
        name: 'Dannie Deaville',
        seedPhrase: '13hi5AEkFK2yvfpuX5Au9vtdwsPifJa3TG',
        symbol: 'BTC',
        themeColor: { hex: '#71731b' },
        category: [],
    },
    {
        idString: 'open architecture',
        communityStatus:
            'augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis',
        name: 'Klaus Draisey',
        seedPhrase: '1Jub21DiD6cXuxZd3JHuLGvacRkKvGFhRc',
        symbol: 'BTC',
        themeColor: { hex: '#4bd30f' },
        category: [],
    },
    {
        idString: 'functionalities',
        communityStatus:
            'mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh',
        name: 'Silvano Reddan',
        seedPhrase: '18AfXzKCsv398giu48nQX3A1RV2dj5pQWu',
        symbol: 'BTC',
        themeColor: { hex: '#84459a' },
        category: [],
    },
    {
        idString: 'Self-enabling',
        communityStatus: 'eu massa donec dapibus duis at velit eu est congue',
        name: 'Jennee Dobrovolny',
        seedPhrase: '1FEgEvNGny1eRhzfznBPjXDrNdwEejNeYd',
        symbol: 'BTC',
        themeColor: { hex: '#61c011' },
        category: [],
    },
    {
        idString: 'exuding',
        communityStatus:
            'tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl',
        name: 'Ibby Rizziello',
        seedPhrase: '19ppAha32k4U28aJBoC1pEpgJHAeLmNs2C',
        symbol: 'BTC',
        themeColor: { hex: '#33858a' },
        category: [],
    },
    {
        idString: 'concept',
        communityStatus:
            'erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi',
        name: 'Ailene Grizard',
        seedPhrase: '1FsDUSgKGskjtoGa2NaL2fxq6zx6UwFRkH',
        symbol: 'BTC',
        themeColor: { hex: '#ecf199' },
        category: [],
    },
    {
        idString: 'budgetary management',
        communityStatus:
            'nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla',
        name: 'Oralee Ganing',
        seedPhrase: '1KiYC8V6j7yVqi8fuXMMydRhDrPdkSJZU8',
        symbol: 'BTC',
        themeColor: { hex: '#b7808a' },
        category: [],
    },
    {
        idString: 'time-frame',
        communityStatus:
            'dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed',
        name: 'Gasper Tomaschke',
        seedPhrase: '1GteXzyxyz5ktRvSQtZG6Yqdt56MYPXRaW',
        symbol: 'BTC',
        themeColor: { hex: '#fadd3b' },
        category: [],
    },
    {
        idString: 'fault-tolerant',
        communityStatus:
            'sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus',
        name: 'Mattias Sopper',
        seedPhrase: '15Gy9iNrMGXWjoDqs266mcs2mX2W6UsyBw',
        symbol: 'BTC',
        themeColor: { hex: '#296064' },
        category: [],
    },
    {
        idString: 'Visionary',
        communityStatus:
            'eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum',
        name: 'Connie Craggs',
        seedPhrase: '1GKi2NZAJ4KpD1BiqmZntaUReJe7R42nhC',
        symbol: 'BTC',
        themeColor: { hex: '#67de40' },
        category: [],
    },
    {
        idString: 'responsive',
        communityStatus:
            'dolor sit amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum',
        name: 'Ara Harroll',
        seedPhrase: '1JcAfGfxs6W3kBqdifFK7JQn4QLj21BRgH',
        symbol: 'BTC',
        themeColor: { hex: '#282237' },
        category: [],
    },
    {
        idString: 'client-driven',
        communityStatus:
            'nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at',
        name: 'Boycey Bengall',
        seedPhrase: '1QHStETPnLb7szDEvGNSimYFi1PbULJeiM',
        symbol: 'BTC',
        themeColor: { hex: '#e65832' },
        category: [],
    },
    {
        idString: 'attitude',
        communityStatus:
            'posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna',
        name: 'Saw Micheau',
        seedPhrase: '191EwT3zkQoZUMa14MwWLqpW85fXkQ9yr',
        symbol: 'BTC',
        themeColor: { hex: '#c007b2' },
        category: [],
    },
    {
        idString: 'hardware',
        communityStatus:
            'vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam',
        name: 'Annemarie Glassup',
        seedPhrase: '18n3ZmXG6mm7RAZyDKroCYsA6ny5AFHNnE',
        symbol: 'BTC',
        themeColor: { hex: '#dc011b' },
        category: [],
    },
    {
        idString: 'static',
        communityStatus:
            'magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
        name: 'Lindy Goble',
        seedPhrase: '1DCk565m4vp91kbLiegAup7g9kjEpDMyGf',
        symbol: 'BTC',
        themeColor: { hex: '#021d5b' },
        category: [],
    },
    {
        idString: 'pricing structure',
        communityStatus:
            'at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus',
        name: 'Evangelina Voller',
        seedPhrase: '1MsthSdQhH87A9rrARnXona6zEUg28r6g9',
        symbol: 'BTC',
        themeColor: { hex: '#cb0670' },
        category: [],
    },
    {
        idString: 'grid-enabled',
        communityStatus:
            'amet diam in magna bibendum imperdiet nullam orci pede venenatis non',
        name: 'Retha Bracey',
        seedPhrase: '1KbfNZqk2kkbx7vUdvguq8JsDSR9up1A2f',
        symbol: 'BTC',
        themeColor: { hex: '#f7b264' },
        category: [],
    },
    {
        idString: 'maximized',
        communityStatus:
            'nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec',
        name: 'Maryjane Petegrew',
        seedPhrase: '1AJDAKCTawjp6KewcJp8cVLXjkReMoJPHt',
        symbol: 'BTC',
        themeColor: { hex: '#9a1838' },
        category: [],
    },
    {
        idString: 'even-keeled',
        communityStatus:
            'in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum',
        name: 'Garfield Cahani',
        seedPhrase: '18pE267UFMCP2ganfydnGcE1c4kPoCgvAt',
        symbol: 'BTC',
        themeColor: { hex: '#92d6f0' },
        category: [],
    },
    {
        idString: 'Enhanced',
        communityStatus:
            'in felis eu sapien cursus vestibulum proin eu mi nulla ac enim',
        name: 'Renato Ebbitt',
        seedPhrase: '1o9S1BovZuaEg4TUBbSdtvSsXFHeCEPLF',
        symbol: 'BTC',
        themeColor: { hex: '#8982ee' },
        category: [],
    },
    {
        idString: 'real-time',
        communityStatus:
            'nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer',
        name: 'Rolfe Hingeley',
        seedPhrase: '12NhXogC3azYNHv8ffVqh8v76bvUnLv8CR',
        symbol: 'BTC',
        themeColor: { hex: '#0e96f0' },
        category: [],
    },
    {
        idString: 'encryption',
        communityStatus:
            'lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra',
        name: 'Josie Baylie',
        seedPhrase: '15eAGRwEvNGKuhdKxXezwedfdQB6nruawo',
        symbol: 'BTC',
        themeColor: { hex: '#a34027' },
        category: [],
    },
    {
        idString: 'client-driven',
        communityStatus:
            'non pretium quis lectus suspendisse potenti in eleifend quam a',
        name: 'Vite Tawse',
        seedPhrase: '1sZruzF7yAhNsY2sSmBxJJTQWRYUyoNmt',
        symbol: 'BTC',
        themeColor: { hex: '#ee6eb1' },
        category: [],
    },
    {
        idString: 'success',
        communityStatus:
            'at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros',
        name: 'Hughie Leggs',
        seedPhrase: '1BzTrLp1SqRosqy7kjdEW8KdrSyTRZd54h',
        symbol: 'BTC',
        themeColor: { hex: '#d71f15' },
        category: [],
    },
    {
        idString: 'real-time',
        communityStatus:
            'tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit',
        name: "Melodee O'Dyvoie",
        seedPhrase: '1MURNpUXa5DgLVkMbXBHLV34fxUjk8R4cR',
        symbol: 'BTC',
        themeColor: { hex: '#0360c5' },
        category: [],
    },
    {
        idString: 'Decentralized',
        communityStatus:
            'molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci',
        name: 'Dorothy McJury',
        seedPhrase: '1KMdKiDGLPBXDCBhmhJtomBAFerkRvjZa7',
        symbol: 'BTC',
        themeColor: { hex: '#86e641' },
        category: [],
    },
    {
        idString: 'intangible',
        communityStatus:
            'non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa',
        name: 'Haleigh Gricewood',
        seedPhrase: '1EZ3aKsDTDgRDiMwYR77dYA26vEzWmMkns',
        symbol: 'BTC',
        themeColor: { hex: '#7c66eb' },
        category: [],
    },
    {
        idString: 'architecture',
        communityStatus:
            'blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula',
        name: 'Tine Maxsted',
        seedPhrase: '143qC26CZRBivm9cJM5wg65qZ2qU13Jpqn',
        symbol: 'BTC',
        themeColor: { hex: '#8d89c1' },
        category: [],
    },
    {
        idString: 'orchestration',
        communityStatus:
            'sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue',
        name: 'Bernadette Stallan',
        seedPhrase: '1KHPkyLqrwLC94tBerm68EkEFnCdAEbbzW',
        symbol: 'BTC',
        themeColor: { hex: '#994a98' },
        category: [],
    },
    {
        idString: 'full-range',
        communityStatus:
            'curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum',
        name: 'Burton Raun',
        seedPhrase: '1etkXgiZQhW1c2jVCifX4nTL5SXTxBmTs',
        symbol: 'BTC',
        themeColor: { hex: '#5e5309' },
        category: [],
    },
    {
        idString: 'model',
        communityStatus:
            'vitae mattis nibh ligula nec sem duis aliquam convallis nunc',
        name: 'Sheri Dumingo',
        seedPhrase: '16CZov9yvPyRx4heYMfzA95xKsqxY3RY2c',
        symbol: 'BTC',
        themeColor: { hex: '#0384cb' },
        category: [],
    },
    {
        idString: 'Innovative',
        communityStatus:
            'ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula',
        name: 'Rodolfo Meritt',
        seedPhrase: '12riE8pLSNzXfp94okVxD7AtvT7av1AwAY',
        symbol: 'BTC',
        themeColor: { hex: '#c8fe87' },
        category: [],
    },
    {
        idString: 'responsive',
        communityStatus:
            'luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere',
        name: 'Joella Ashment',
        seedPhrase: '12338NYFrpgEeqpLwzS1oB9e1yVnwx8EQ8',
        symbol: 'BTC',
        themeColor: { hex: '#a02616' },
        category: [],
    },
    {
        idString: 'extranet',
        communityStatus:
            'varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar',
        name: 'Durant Bedo',
        seedPhrase: '18skWZByL7gVSiqN9C2ZTozBt28vSGzPxK',
        symbol: 'BTC',
        themeColor: { hex: '#8a6199' },
        category: [],
    },
    {
        idString: 'Horizontal',
        communityStatus:
            'varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis',
        name: 'Francisca Garrit',
        seedPhrase: '1K7Mg9hWNniTuC3zPXSfkHdR98JMmgViN8',
        symbol: 'BTC',
        themeColor: { hex: '#aded58' },
        category: [],
    },
    {
        idString: 'Graphic Interface',
        communityStatus:
            'augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum',
        name: 'Marlo Crutch',
        seedPhrase: '1L8e5NNdWxjq32ZhS13ExDCb6GtCrwFXrp',
        symbol: 'BTC',
        themeColor: { hex: '#110a57' },
        category: [],
    },
    {
        idString: 'matrices',
        communityStatus:
            'curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus',
        name: 'Iorgos Beese',
        seedPhrase: '1KBUaZBMwEMCEtH3kSGo6DVsNd8PqvSxJB',
        symbol: 'BTC',
        themeColor: { hex: '#6e17c3' },
        category: [],
    },
    {
        idString: 'Pre-emptive',
        communityStatus:
            'ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla',
        name: 'Maxwell Doull',
        seedPhrase: '198jrWTb4sE6C1uTfmCAu3YUa7fzdNphqK',
        symbol: 'BTC',
        themeColor: { hex: '#1bfd3c' },
        category: [],
    },
    {
        idString: 'Inverse',
        communityStatus:
            'turpis sed ante vivamus tortor duis mattis egestas metus aenean',
        name: 'Meridith Jewsbury',
        seedPhrase: '17g5ozj8tcqdVpPiabTSUZGk7L5HjoEPMw',
        symbol: 'BTC',
        themeColor: { hex: '#5c9213' },
        category: [],
    },
    {
        idString: 'Secured',
        communityStatus:
            'blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit',
        name: 'Marc Sacchetti',
        seedPhrase: '16iCrbqp2Kt5QpvYk5gmBx29N9po9bTes8',
        symbol: 'BTC',
        themeColor: { hex: '#aa4e1f' },
        category: [],
    },
    {
        idString: 'intranet',
        communityStatus:
            'volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus',
        name: 'Terri Bartolomieu',
        seedPhrase: '1KY2RDGDppgBA2C2nBRWpTbBupa91HDXw5',
        symbol: 'BTC',
        themeColor: { hex: '#30e6c5' },
        category: [],
    },
    {
        idString: 'human-resource',
        communityStatus:
            'rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat',
        name: 'Joan Pinchon',
        seedPhrase: '1HFWPhWY2UsSoPtFY12erUd1UUAoHbf38F',
        symbol: 'BTC',
        themeColor: { hex: '#c6a0fc' },
        category: [],
    },
    {
        idString: 'extranet',
        communityStatus:
            'dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla',
        name: 'Jacqui Alcock',
        seedPhrase: '1LuhChn9msGpBTSCpmA4pXgb43RNs8kqvp',
        symbol: 'BTC',
        themeColor: { hex: '#b176fd' },
        category: [],
    },
    {
        idString: 'bifurcated',
        communityStatus:
            'luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet',
        name: 'Jecho Fossord',
        seedPhrase: '1MSjKm4S8AQg5rpiKUPvfu7TLLfMrQ62eE',
        symbol: 'BTC',
        themeColor: { hex: '#c6a14a' },
        category: [],
    },
    {
        idString: 'Fully-configurable',
        communityStatus:
            'donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci',
        name: 'Andrei Downage',
        seedPhrase: '1CsRyBzcsnfAMg9RwQduJE4szakJ8up7dZ',
        symbol: 'BTC',
        themeColor: { hex: '#75dd7e' },
        category: [],
    },
    {
        idString: 'Quality-focused',
        communityStatus:
            'vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',
        name: 'Ollie Pooly',
        seedPhrase: '18fT3S6hgizjjbtSSo5SkQV1rdgzfsTjqW',
        symbol: 'BTC',
        themeColor: { hex: '#390db9' },
        category: [],
    },
    {
        idString: 'Up-sized',
        communityStatus:
            'morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum',
        name: 'Maurise Langland',
        seedPhrase: '1FgCMXaS3PNmuvoPkABUaiQiEFzjgncLjw',
        symbol: 'BTC',
        themeColor: { hex: '#f1b590' },
        category: [],
    },
    {
        idString: 'Right-sized',
        communityStatus:
            'curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae',
        name: 'Thom Halsall',
        seedPhrase: '1FShLHQbcz9xvAYsHHbCbX2HpNkCFVmHd6',
        symbol: 'BTC',
        themeColor: { hex: '#b6bdfe' },
        category: [],
    },
    {
        idString: 'Reactive',
        communityStatus:
            'sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo',
        name: 'Vivienne Mackelworth',
        seedPhrase: '1LRF6RBn4zMdZzqf9JaWWAAxk9uXJSeQtX',
        symbol: 'BTC',
        themeColor: { hex: '#9f133a' },
        category: [],
    },
    {
        idString: 'De-engineered',
        communityStatus:
            'nisl ut volutpat sapien arcu sed augue aliquam erat volutpat',
        name: 'Goldy Shaw',
        seedPhrase: '158Y3HMcnRL6vxwJu7748RXNeATqEb5aE2',
        symbol: 'BTC',
        themeColor: { hex: '#a30b09' },
        category: [],
    },
    {
        idString: 'Quality-focused',
        communityStatus:
            'nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet',
        name: 'Jan Igounet',
        seedPhrase: '14TYBem2SeCtM1m4vKy5X9kCEmocP9aYaH',
        symbol: 'BTC',
        themeColor: { hex: '#20bb52' },
        category: [],
    },
    {
        idString: 'Integrated',
        communityStatus:
            'aliquet maecenas leo odio condimentum id luctus nec molestie sed justo',
        name: 'Hersch Grzesiak',
        seedPhrase: '18eR4JCAAGa1J3pHHHvt5RB91qaBgRsnbh',
        symbol: 'BTC',
        themeColor: { hex: '#e5d166' },
        category: [],
    },
    {
        idString: 'Extended',
        communityStatus:
            'in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus',
        name: 'Anet Prestie',
        seedPhrase: '17scBANuYArEy337N1aZ8Cc1rJxUVXk1DL',
        symbol: 'BTC',
        themeColor: { hex: '#c41c93' },
        category: [],
    },
    {
        idString: 'real-time',
        communityStatus:
            'in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem',
        name: 'Julius Salkild',
        seedPhrase: '1ACBwdLfX5PTi8hdc1p4TFpnG1DQh9aW7A',
        symbol: 'BTC',
        themeColor: { hex: '#457bcd' },
        category: [],
    },
    {
        idString: 'mission-critical',
        communityStatus:
            'sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim',
        name: 'Bobbee Percy',
        seedPhrase: '16eWPADmXkJ2gGKfPSsNw38eMwPMLeZDbr',
        symbol: 'BTC',
        themeColor: { hex: '#2cacfb' },
        category: [],
    },
    {
        idString: 'Graphical User Interface',
        communityStatus:
            'erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla',
        name: 'Bidget Plenty',
        seedPhrase: '1FvNM9k6EWxqhUJK3ky8R3c4GtFGgtgPLs',
        symbol: 'BTC',
        themeColor: { hex: '#436b85' },
        category: [],
    },
    {
        idString: 'multi-tasking',
        communityStatus:
            'luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat',
        name: 'Ranee Dignum',
        seedPhrase: '1AXySU3rgk53nZ5ntRsRCZWRQN4ojzbwqi',
        symbol: 'BTC',
        themeColor: { hex: '#a51a71' },
        category: [],
    },
    {
        idString: 'systemic',
        communityStatus:
            'nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu',
        name: 'Courtney Falcus',
        seedPhrase: '1Eij23VVdPzugZEgQiRWRDgbiFrZTHHtSB',
        symbol: 'BTC',
        themeColor: { hex: '#b9495a' },
        category: [],
    },
    {
        idString: 'mission-critical',
        communityStatus:
            'non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus',
        name: 'Kattie Escala',
        seedPhrase: '1C5a6k1ioCVAWAfYQRLtGY2DdZWzVfX6Be',
        symbol: 'BTC',
        themeColor: { hex: '#ad7a07' },
        category: [],
    },
    {
        idString: 'conglomeration',
        communityStatus:
            'faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis',
        name: 'Emlynne Fey',
        seedPhrase: '1QKjZPiVNCSjNKANuVGgs3pNme1fMwRNrD',
        symbol: 'BTC',
        themeColor: { hex: '#0b3a49' },
        category: [],
    },
    {
        idString: 'high-level',
        communityStatus:
            'ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna',
        name: 'Alanna Morrad',
        seedPhrase: '1L6J5YobS8QAoGXuGysASW4t177gPbaMDY',
        symbol: 'BTC',
        themeColor: { hex: '#c09eca' },
        category: [],
    },
    {
        idString: 'Object-based',
        communityStatus:
            'tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi',
        name: 'Mahmoud Dawtry',
        seedPhrase: '15iWgR7WUvtrydPyokL5BNnvFdfhAdiT1m',
        symbol: 'BTC',
        themeColor: { hex: '#29d845' },
        category: [],
    },
    {
        idString: 'policy',
        communityStatus:
            'semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla',
        name: 'Wilhelm Ginty',
        seedPhrase: '13xJdFFZZbwFAxQyyBUMXd2oHwT7E6RQJn',
        symbol: 'BTC',
        themeColor: { hex: '#4562e8' },
        category: [],
    },
    {
        idString: 'emulation',
        communityStatus:
            'mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur',
        name: 'Peirce Roddy',
        seedPhrase: '1K4ULqAHkyebQTsAwrBcScRfcZKqh1MfBv',
        symbol: 'BTC',
        themeColor: { hex: '#9825e0' },
        category: [],
    },
    {
        idString: '5th generation',
        communityStatus:
            'pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus',
        name: 'Dredi Kellard',
        seedPhrase: '17qk8Akf9ZEysNeqbCXTcuwebbgH466pnU',
        symbol: 'BTC',
        themeColor: { hex: '#df08b1' },
        category: [],
    },
    {
        idString: 'superstructure',
        communityStatus:
            'et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante',
        name: 'Lian Furman',
        seedPhrase: '1KcHhWz1cZBUQgT4LGBf8Z4bwJHCTtKmpM',
        symbol: 'BTC',
        themeColor: { hex: '#2d46ab' },
        category: [],
    },
    {
        idString: 'asymmetric',
        communityStatus:
            'suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet',
        name: 'Jeannine Tupling',
        seedPhrase: '16CijUgmXBxWpyrZ4jbqc3HGheTnqCZVpf',
        symbol: 'BTC',
        themeColor: { hex: '#d1e02e' },
        category: [],
    },
    {
        idString: 'bi-directional',
        communityStatus:
            'morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam',
        name: 'Piper Madders',
        seedPhrase: '12cj8MVAPpWgXrTUwx52QEj49yStM57R7F',
        symbol: 'BTC',
        themeColor: { hex: '#e792ee' },
        category: [],
    },
    {
        idString: 'Multi-channelled',
        communityStatus:
            'ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi',
        name: 'Kelbee Doughtery',
        seedPhrase: '1JBFuPxCKcoH7tLdiAjGg2jSoYDuQHKFDb',
        symbol: 'BTC',
        themeColor: { hex: '#12ba39' },
        category: [],
    },
    {
        idString: 'Devolved',
        communityStatus:
            'venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl',
        name: 'Filbert Luetkemeyer',
        seedPhrase: '1Ls3aNYFaZ12Grei3u6aCuSk3mZdScHed6',
        symbol: 'BTC',
        themeColor: { hex: '#fec490' },
        category: [],
    },
    {
        idString: 'superstructure',
        communityStatus:
            'est risus auctor sed tristique in tempus sit amet sem',
        name: 'Flemming Reggler',
        seedPhrase: '1HB8yYms49noSnvev8mj3tkegKxpEoqoG9',
        symbol: 'BTC',
        themeColor: { hex: '#5fba3c' },
        category: [],
    },
    {
        idString: 'budgetary management',
        communityStatus:
            'justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit',
        name: 'Korney Hirthe',
        seedPhrase: '17mRdv1PhhMP7z7cdMBUgPiE6pJcZthTE',
        symbol: 'BTC',
        themeColor: { hex: '#1ca9b7' },
        category: [],
    },
    {
        idString: 'explicit',
        communityStatus:
            'penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis',
        name: 'Sandy Barratt',
        seedPhrase: '1MPHjF918pc2GJ5RRUeT4rtyFWS8PLj2GN',
        symbol: 'BTC',
        themeColor: { hex: '#5274a7' },
        category: [],
    },
    {
        idString: 'well-modulated',
        communityStatus:
            'congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero',
        name: 'Prentiss Yantsev',
        seedPhrase: '17i15NA1WQ3u2qxDSiafyU8koTDDcpQtFb',
        symbol: 'BTC',
        themeColor: { hex: '#108155' },
        category: [],
    },
    {
        idString: 'pricing structure',
        communityStatus:
            'penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis',
        name: 'Lorrie Thaxton',
        seedPhrase: '161b2YncAhSz6ef7PTj2Yqg4H789bqficY',
        symbol: 'BTC',
        themeColor: { hex: '#fc9e46' },
        category: [],
    },
    {
        idString: 'Universal',
        communityStatus:
            'enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac',
        name: 'Gennie Axtell',
        seedPhrase: '1A1hqJRuxkoYYhpP7Yhh9SrVkxy3pYXHwW',
        symbol: 'BTC',
        themeColor: { hex: '#0317f6' },
        category: [],
    },
    {
        idString: 'Profound',
        communityStatus:
            'mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel',
        name: 'Farah Vitall',
        seedPhrase: '1Lx2ghYBJp4jEbxJaQFs6UBrADnoiHB8jb',
        symbol: 'BTC',
        themeColor: { hex: '#c886a6' },
        category: [],
    },
    {
        idString: 'Vision-oriented',
        communityStatus:
            'varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at',
        name: 'Hillery Colson',
        seedPhrase: '1QJWZjBLJmxWmryod7GpFRjsyLooi2nEVj',
        symbol: 'BTC',
        themeColor: { hex: '#69eb74' },
        category: [],
    },
    {
        idString: 'Digitized',
        communityStatus:
            'nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet',
        name: 'Amelita Ancketill',
        seedPhrase: '1MHhQ8x1N3EeVUhJ4J7e3AJBwP3DiNR4Xw',
        symbol: 'BTC',
        themeColor: { hex: '#bd225f' },
        category: [],
    },
    {
        idString: 'Polarised',
        communityStatus:
            'nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi',
        name: 'Alley Krolak',
        seedPhrase: '1Nr7yQ3cvSxnsq5ak3H7912B4oRvrUawfh',
        symbol: 'BTC',
        themeColor: { hex: '#cd90a0' },
        category: [],
    },
    {
        idString: 'Decentralized',
        communityStatus:
            'mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy',
        name: 'Camel Divis',
        seedPhrase: '1Fr4W4ur3KuQ878KNhwMSuxu3cvcoCDSAn',
        symbol: 'BTC',
        themeColor: { hex: '#e8459a' },
        category: [],
    },
    {
        idString: 'data-warehouse',
        communityStatus:
            'accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel',
        name: 'Minerva Vousden',
        seedPhrase: '1982LZBEQTuoYWs34n2UyBkUPNeAjj3qtn',
        symbol: 'BTC',
        themeColor: { hex: '#baa666' },
        category: [],
    },
    {
        idString: 'support',
        communityStatus:
            'augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet',
        name: 'Zebedee Vondruska',
        seedPhrase: '1HcScYGPSEz3SfoFUf1oBM2ipajzbZEEKk',
        symbol: 'BTC',
        themeColor: { hex: '#65e275' },
        category: [],
    },
    {
        idString: 'Proactive',
        communityStatus:
            'quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat',
        name: 'Revkah Trood',
        seedPhrase: '1EZuEZoxXKpFfnTUVCVzHg5JYRhex8bsHM',
        symbol: 'BTC',
        themeColor: { hex: '#e176d2' },
        category: [],
    },
    {
        idString: 'Digitized',
        communityStatus:
            'vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac',
        name: 'Hendrick Gimson',
        seedPhrase: '13qBWqJ2vADKS5a5yzXH48nhh3SA5mrgYT',
        symbol: 'BTC',
        themeColor: { hex: '#f9f5a9' },
        category: [],
    },
    {
        idString: 'capacity',
        communityStatus:
            'sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede',
        name: 'Cherlyn Ciccarello',
        seedPhrase: '14H9We8e6DSykwxAvRnqc3np1f6TAbcgEb',
        symbol: 'BTC',
        themeColor: { hex: '#97a7a3' },
        category: [],
    },
    {
        idString: 'Vision-oriented',
        communityStatus:
            'nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec',
        name: 'Merline Alen',
        seedPhrase: '1KzLszJWadF6Rb7p81AWnTg1fXAg3RNaT8',
        symbol: 'BTC',
        themeColor: { hex: '#81d71f' },
        category: [],
    },
    {
        idString: 'multimedia',
        communityStatus:
            'sapien non mi integer ac neque duis bibendum morbi non',
        name: 'Arabel Danzey',
        seedPhrase: '1ERJmmSHcJD18tegmndcdgh4zfcnUGwMA6',
        symbol: 'BTC',
        themeColor: { hex: '#7ffaec' },
        category: [],
    },
];
