import Heading from "../../components/Heading"
import Head from "next/head"
// import { useState, useEffect } from "react"
import Link from "next/link"

export const getStaticProps = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/users")
	const data = await response.json()

	if (!data) {
		return {
			notFound: true,
		}
	}

	return {
		props: { contacts: data },
	}
}

const Contacts = ({ contacts }) => {
	// const [contacts, setContacts] = useState(null)

	// -> getStaticProps()
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const response = await fetch("https://jsonplaceholder.typicode.com/users")
	// 		const data = await response.json()
	// 		setContacts(data)
	// 	}
	// 	fetchData()
	// }, [])

	return (
		<>
			<Head>
				<title>Contacts</title>
			</Head>
			<Heading text="Contacts lists"></Heading>
			<ul>
				{contacts && contacts.map(({ id, name }) => (
					<li key={id}>
						<Link href={`/contacts/${id}`}>{name}</Link>
					</li>
				))}
			</ul>
		</>
	)
}

export default Contacts;
