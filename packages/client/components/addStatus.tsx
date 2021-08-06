
import React, { FunctionComponent } from "react";

import styles from "../styles/components/components.module.css";

const AddStatus: FunctionComponent = (): JSX.Element => {
    return (
        <div className={styles.statusAndAddStatusCard}>
            <img src="/status.jpg" alt="status" />
            <div className={styles.clickAddButton}>
                <div className={styles.clickAddButtonAddButton}>

                </div>
                <p>Create Story</p>
            </div>
        </div>
    )
}

export default AddStatus;