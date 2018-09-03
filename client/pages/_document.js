import Document, { Head, Main, NextScript } from 'next/document';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { ServerStyleSheet } from 'styled-components';

const faCss = dom.css();

export default class MyCustomDocument extends Document {
    static getInitialProps ({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render () {
        return (
            <html>
                <Head>
                    <title>Skyda</title>
                    <meta name="viewport" content="initial-scale=1, width=device-width, maximum-scale=1" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
                    <style>{faCss}</style>
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
