
import React, { FunctionComponent } from "react";

import styles from "../styles/index.module.css";

const IndexPage: FunctionComponent = (): JSX.Element => {
    return (
        <div className={styles.indexPage}>
            <div className={styles.indexPageContent}>
                <span className={styles.notations}>
                    <h1>facebook</h1>
                    <span className={styles.facebook__desc}>
                        <p>With Facebook, share and stay in touch</p>
                        <p>with those around you</p>
                    </span>
                </span>
                <div className={styles.preFormContainer}>
                    <div className={styles.formContainer}>
                        <form>
                            <input type="email" name="" id="" placeholder="Email address or phone number" />
                            <input type="password" name="" id="" placeholder="Password" />
                            <button>To log in</button>
                            <a href="#">Forgot your password ?</a>
                        </form>
                        <hr />
                        <button className={styles.planB}>Create an account</button>
                    </div>
                    <p> <b>Create a Page</b> for a celebrity, group or business.</p>
                </div>
            </div>
        </div>
    )
}

export default IndexPage;