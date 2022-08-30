import React from 'react';

//style
import styles from './Coin.module.css';

const Coin = ({name , image , symbol , price , marketcap , pricechange}) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt={name} />
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUpperCase()}</span>
            <span className={styles.currentPrice}>$ {price.toLocaleString()}</span>
            <span className={pricechange > 0 ? styles.greenPriceChange : styles.redPriceChange}>% {pricechange.toFixed(2)}</span>
            <span className={styles.marketCap}>$ {marketcap.toLocaleString()}</span>
        </div>
    );
};

export default Coin;