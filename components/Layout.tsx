import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="og:image" content="/social.png" />
      <link
        rel="shortcut icon"
        href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/apple/271/woman_medium-light-skin-tone_1f469-1f3fc_1f3fc.png"
      />
    </Head>
    <div className="container flex flex-col items-center max-w-4xl mx-auto mt-20">
      <div className="p-20 border-4 border-gray-400 bg-gray-50">{children}</div>
      <footer className="mt-20 mb-8 text-gray-600">
        <span className="italic">
          made with ⚡️ by <a href="https://benji.ar">benji.ar</a>
        </span>
      </footer>
    </div>
  </div>
);

export default Layout;
