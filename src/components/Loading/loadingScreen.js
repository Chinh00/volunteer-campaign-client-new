import React from 'react';
import styles from "../Loading/loadingScreen.css";

function LoadingScreen() {
    return (
        <div id={styles.container}>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.box}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.box}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.box}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen;