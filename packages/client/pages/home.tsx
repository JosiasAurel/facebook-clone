
import React, { FunctionComponent } from "react";

import Header from "../components/Header";
import FirstSectionCard from "../components/FirstSectionCard";

import styles from "../styles/home.module.css";

const HomeDashboard: FunctionComponent = (): JSX.Element => {
    return (
        <div>
            <Header />
            <div className={styles.homePageContent}>
                <div className={styles.firstSection}>
                    <FirstSectionCard image="covid.png" text="COVID-19 Information Centre" />
                    <FirstSectionCard image="friends.png" text="Friends" />
                    <FirstSectionCard image="groups.png" text="Groups" notif={5} />
                    <FirstSectionCard image="watch.png" text="Watch" notif={9} />
                    <FirstSectionCard image="events.png" text="Events" notif={9} />
                    <FirstSectionCard image="memories.png" text="Memories" />
                    <FirstSectionCard image="save.png" text="Saved" />
                    <FirstSectionCard image="pages.png" text="Pages" />
                    <FirstSectionCard image="jobs.png" text="Jobs" />
                </div>
            </div>
        </div>
    )
}

export default HomeDashboard;