
import React, { FunctionComponent } from "react";

import { AppProps } from "next/app";

import "../styles/global.css";

const FaceBookCloneApp: FunctionComponent<AppProps> = ({ Component, pageProps }): JSX.Element => {
    return (
        <Component {...pageProps} />
    )
}

export default FaceBookCloneApp;