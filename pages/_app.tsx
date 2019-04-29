import App, { Container, NextAppContext } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme";

export default class MyApp extends App {
    static async getInitialProps(nextAppContext: NextAppContext) {
        let pageProps = {};

        const ctx = nextAppContext.ctx;
        const Component = nextAppContext.Component;

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Container>
        );
    }
}