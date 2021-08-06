import React, { FunctionComponent } from "react";

import styles from "../styles/components/components.module.css";

const Status: FunctionComponent = (): JSX.Element => {
    return (
        <div className={styles.statusAndAddStatusCard}>
            <img className={styles.statusImage} src="/status.jpg" alt="" />
            <img className={styles.statusOwnerProfileImage} src="/josias.png" alt="" />
            <p className={styles.statusOwnerName}>Josias Aurel</p>
        </div>
    )
}

export default Status;