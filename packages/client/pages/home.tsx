
import React, { FunctionComponent } from "react";

import Header from "../components/Header";
import FirstSectionCard from "../components/FirstSectionCard";
import AddStatus from "../components/addStatus";
import Status from "../components/Status";

import styles from "../styles/home.module.css";

const HomeDashboard: FunctionComponent = (): JSX.Element => {
    return (
        <div>
            <Header />
            <div className={styles.homePageContent}>

                <div className={styles.firstSectionContaienrCn}>
                    <div className={styles.user___}>
                        <img src="/josias.png" alt="josias" />
                        <p>Josias Aurel</p>
                    </div>
                    <div className={styles.firstSection}>
                        <div className={styles.over__}>

                        </div>
                        <FirstSectionCard image="covid.png" text="COVID-19 Information Centre" />
                        <FirstSectionCard image="friends.png" text="Friends" over={true} />
                        <FirstSectionCard image="groups.png" text="Groups" notif={5} over={true} />
                        <FirstSectionCard image="watch.png" text="Watch" notif={9} over={true} />
                        <FirstSectionCard image="events.png" text="Events" notif={9} over={true} />
                        <FirstSectionCard image="memories.png" text="Memories" over={true} />
                        <FirstSectionCard image="save.png" text="Saved" over={true} />
                        <FirstSectionCard image="pages.png" text="Pages" over={true} />
                        <FirstSectionCard image="jobs.png" text="Jobs" over={true} />
                        <div className={styles.seeMore}>
                            <img src="avatar.svg" alt="avatar" />
                            <p>See More</p>
                        </div>
                    </div>
                </div>

                <div className={styles.secondPageContent}>
                    <div className={styles.statusContainer}>
                        <AddStatus />
                        <Status />
                        <Status />
                        <Status />
                        <Status />
                    </div>

                    <div className={styles.feedContainerCn}>
                        <div className={styles.feedContainer}>

                            {/* the input action on mind */}
                            <div className={styles.centerIt}>
                                <div className={styles.onMindForPost}>
                                    <div className={styles.onMindPostInputs}>
                                        <img src="/josias.png" alt="josias" />
                                        <input type="text" placeholder="What's on your mind, Josias ?" />
                                    </div>
                                    <hr />
                                    <div className={styles.onMindPostOptions}>
                                        <div className={styles.onMindPostOption}>
                                            <img src="live.png" alt="live" />
                                            <p>Live video</p>
                                        </div>
                                        <div className={styles.onMindPostOption}>
                                            <img src="photo.png" alt="photo-video" />
                                            <p>Photo/Video</p>
                                        </div>
                                        <div className={styles.onMindPostOption}>
                                            <img src="feeling.png" alt="feeling-activity" />
                                            <p>Feeling/Activity</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* The room action and activities */}
                            <div className={styles.centerIt}>
                                <div className={styles.createRoomAndActives}>
                                    <div className={styles.createRoomAction}>
                                        <img src="live2.png" alt="create-room" />
                                        <p>Create Room</p>
                                    </div>
                                    <div className={styles.activeActiveUsers}>
                                        <div className={styles.activeActiveUser}>
                                            <img src="/josias.png" alt="josias" />
                                            <div>

                                            </div>
                                        </div>
                                        <div className={styles.activeActiveUser}>
                                            <img src="/josias.png" alt="josias" />
                                            <div>

                                            </div>
                                        </div>
                                        <div className={styles.activeActiveUser}>
                                            <img src="/josias.png" alt="josias" />
                                            <div>

                                            </div>
                                        </div>
                                        <div className={styles.activeActiveUser}>
                                            <img src="/josias.png" alt="josias" />
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* a sample post */}
                            <div className={styles.centerIt}>
                                <div className={styles.feedPosts}>
                                    <div className={styles.feedPostPost}>
                                        <div className={styles.feedPostHeader}>

                                            {/* user profile and post context */}
                                            <div className={styles.feedPostHeaderCh__}>
                                                <img src="/josias.png" alt="josias" />
                                                <span>
                                                    <p className={styles.postOwnerName}> Josias Aurel </p>
                                                    <p className={styles.postLabel}> 16h . OMG .  </p>
                                                </span>
                                            </div>


                                            {/* menu */}
                                            <div className={styles.feedPostPostMenu}>
                                                <div>

                                                </div>
                                                <div>

                                                </div>
                                                <div>

                                                </div>
                                            </div>
                                        </div>
                                        {/* feed post header */}

                                        {/* Feed post body */}
                                        <div className={styles.feetPostBody}>
                                            <img src="/space.jpg" alt="space" />
                                        </div>
                                        {/* feed post body end */}

                                        <div className={styles.feedPostStats}>
                                            <span>
                                                <h3>????</h3>
                                                <p>Mike, Daniel, Simon and 5 others</p>
                                            </span>
                                            <p>10 comments</p>
                                        </div>
                                        {/* feed post stats end */}

                                        {/* feed post actions */}
                                        <div className={styles.feesPostActionsCn}>
                                            <hr />
                                            <div className={styles.feesPostActions}>
                                                <span>
                                                    ???? Like
                                                </span>
                                                <span>
                                                    <img src="/comment.png" alt="comment" /> Comment
                                                </span>
                                            </div>
                                            <hr />
                                            <p style={{ color: "grey" }}>View 6 more comments</p>
                                        </div>
                                        {/* feed post actions end */}

                                        {/* feed post comments */}
                                        <div className={styles.feedPostComments}>
                                            <div className={styles.feedPostCommentsComment}>
                                                <img src="/josias.png" alt="josias" />
                                                <div className={styles.commentCn}>
                                                    <div className={styles.comment__}>
                                                        <p className={styles.feedPostOwnerName}>Josias Aurel</p>
                                                        <span>
                                                            <p> I mean what if we one day find life on AG149 </p>
                                                        </span>
                                                    </div>
                                                    <span className={styles.commentsAndMisc__}>
                                                        <p>Like</p>
                                                        .
                                                        <p>Reply</p>
                                                        .
                                                        5 h
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* feed post comments end */}

                                    </div>
                                </div>
                            </div>
                            <div style={{ width: "20px", height: "20px", marginBottom: "5em" }}>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeDashboard;