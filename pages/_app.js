import Layout from "../components/Layout"
import Head from "next/head"
import Image from "next/image"
import vigboImg from "../public/vigbo.jpg"
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
    <Image
      src={vigboImg}
      width={960}
      height={540}
      alt="vigbo"
      placeholder="blur"
    />
  </Layout>
)

// start = npm run dev -- -p 3005

export default MyApp
