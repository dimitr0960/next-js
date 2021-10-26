import { useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"
import Heading from "../components/Heading"
import styles from "../styles/404.module.scss"

const Error = () => {
	const router = useRouter()

	useEffect(() => {
		setTimeout(() => {
			router.push("/")
		}, 3000)
	}, [router])

	return (
		<div className={styles.wrapper}>
			<Head>
				<title>404</title>
			</Head>
			<div>
				<Heading text="404"></Heading>
				<Heading tag="h2" text="Something is going wrong"></Heading>
			</div>
		</div>
	)
}

export default Error
