
import React, { FunctionComponent } from "react";

import styles from "../styles/components/components.module.css";

interface FirstSectionCardProps {
    image: string
    text: string
    notif?: number
}

const FirstSectionCard: FunctionComponent<FirstSectionCardProps> = ({ image, text, notif }): JSX.Element => {

    if (notif) {
        return (
            <div className={styles.firstSectionCard}>
                <img style={{ position: "relative", top: "-6px" }} src={image} alt={image.split(".")[0]} />
                <div>
                    <p> {text} </p>
                    <span className={styles.info}>
                        <div className={styles.notifCircle}>
                        </div>
                        <p> {notif} new</p>
                    </span>
                </div>
            </div>
        )
    }
    return (
        <div className={styles.firstSectionCard}>
            <img src={image} alt={image.split(".")[0]} />
            <p> {text} </p>
        </div>
    )
}

export default FirstSectionCard;