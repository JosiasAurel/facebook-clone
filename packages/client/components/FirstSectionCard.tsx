
import React, { FunctionComponent } from "react";

import styles from "../styles/components/components.module.css";

interface FirstSectionCardProps {
    image: string
    text: string
    notif?: number
    over?: boolean
}

const FirstSectionCard: FunctionComponent<FirstSectionCardProps> = ({ image, text, notif, over }): JSX.Element => {

    if (notif) {
        return (
            <div className={styles.firstSectionCardCn}>
                <div className={styles.firstSectionCard}>
                    <img style={{ position: "relative", top: "-6px" }} src={image} alt={image.split(".")[0]} />
                    {over ?
                        <div style={{ position: "relative", left: "-50%" }} className={styles.notfP}>
                            <p> {text} </p>
                            <span className={styles.info}>
                                <div className={styles.notifCircle}>
                                </div>
                                <p> {notif} new</p>
                            </span>
                        </div>
                        : <div className={styles.notfP}>
                            <p> {text} </p>
                            <span className={styles.info}>
                                <div className={styles.notifCircle}>
                                </div>
                                <p> {notif} new</p>
                            </span>
                        </div>}
                </div>
            </div>
        )
    }
    return (
        <div className={styles.firstSectionCard}>
            <img src={image} alt={image.split(".")[0]} />
            {over ? <p style={{ position: "relative", left: "-50%" }}> {text} </p> : <p> {text} </p>}
        </div>
    )
}

export default FirstSectionCard;