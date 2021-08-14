import Head from "next/head";

export default function Heads() {
  return (
    <Head>
      <link rel="manifest" href="/site.webmanifest" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
    </Head>
  );
}
