import { FC } from "react"
import { socialsType } from "../types"
import Head from "next/head"
import Heading from "../components/Heading"
import Socials from "../components/Socials"
import styles from "../styles/Home.module.scss"

type homeProps = {
  socials: socialsType
}

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/socials/`)
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { socials: data },
  }
}

const Home: FC<homeProps> = ({ socials }) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading text="Hello world"></Heading>
    <Socials socials={socials}></Socials> {/*socials.socials*/}
  </div>
)

export default Home
