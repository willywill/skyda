import React from 'react';
import App, { Container } from 'next/app';
import '../utils';

class SkydaApp extends App {
    render () {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        );
    }
}

export default SkydaApp;
