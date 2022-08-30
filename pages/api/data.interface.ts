export interface HiveUsers {
    dogecoin: HiveSearchEntity;
    crypto: HiveSearchEntity;
    nft: HiveSearchEntity;
    tesla: HiveSearchEntity;
    polkadot: HiveSearchEntity;
    python: HiveSearchEntity;
    poker: HiveSearchEntity;
    shopify: HiveSearchEntity;
    yc: HiveSearchEntity;
    react: HiveSearchEntity;
    'bored-ape-yacht-club-bayc': HiveSearchEntity;
    'crypto-punks': HiveSearchEntity;
    'cool-cats': HiveSearchEntity;
    'lazy-lions': HiveSearchEntity;
    'axie-infinity': HiveSearchEntity;
    'world-of-women': HiveSearchEntity;
    'pudgy-penguins': HiveSearchEntity;
    psychedelics: HiveSearchEntity;
    monero: HiveSearchEntity;
    nba: HiveSearchEntity;
    longevity: HiveSearchEntity;
    fintwit: HiveSearchEntity;
    'star-trek': HiveSearchEntity;
    'star-wars': HiveSearchEntity;
    genomics: HiveSearchEntity;
    'build-in-public': HiveSearchEntity;
    sneakerheads: HiveSearchEntity;
    makers: HiveSearchEntity;
    'league-of-legends': HiveSearchEntity;
    'smart-city': HiveSearchEntity;
    nhl: HiveSearchEntity;
    nfl: HiveSearchEntity;
    zcash: HiveSearchEntity;
    net: HiveSearchEntity;
    avalanche: HiveSearchEntity;
    pokemon: HiveSearchEntity;
    xbox: HiveSearchEntity;
    playstation: HiveSearchEntity;
    nintendo: HiveSearchEntity;
    logtech: HiveSearchEntity;
    foodtech: HiveSearchEntity;
    medtech: HiveSearchEntity;
    fintech: HiveSearchEntity;
    web3: HiveSearchEntity;
    productivity: HiveSearchEntity;
    defi: HiveSearchEntity;
    blockchain: HiveSearchEntity;
    'data-visualization': HiveSearchEntity;
    ux: HiveSearchEntity;
    'lightning-network': HiveSearchEntity;
    litecoin: HiveSearchEntity;
    'shiba-inu': HiveSearchEntity;
    cardano: HiveSearchEntity;
    binance: HiveSearchEntity;
    javascript: HiveSearchEntity;
    solana: HiveSearchEntity;
    'machine-learning': HiveSearchEntity;
    physics: HiveSearchEntity;
    chess: HiveSearchEntity;
    climate: HiveSearchEntity;
    mit: HiveSearchEntity;
    'new-york-times': HiveSearchEntity;
    apple: HiveSearchEntity;
    vc: HiveSearchEntity;
    'formula-1': HiveSearchEntity;
    yoga: HiveSearchEntity;
    seo: HiveSearchEntity;
    virology: HiveSearchEntity;
    nocode: HiveSearchEntity;
    vegan: HiveSearchEntity;
    cannabis: HiveSearchEntity;
    google: HiveSearchEntity;
    bitcoin: HiveSearchEntity;
    ethereum: HiveSearchEntity;
}

export interface HiveSearchEntity {
    idString: string;
    name: string;
    seedPhrase: string;
    symbol: string;
    visible: boolean;
    communityStatus: string;
    themeColor: HiveThemeColor;
    category?: HiveCategoryEntity[] | null;
}
export interface HiveThemeColor {
    hex: string;
}
export interface HiveCategoryEntity {
    id: string;
    name: string;
    emoji: string;
}
