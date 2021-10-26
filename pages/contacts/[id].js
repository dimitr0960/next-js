import Heading from "../../components/Heading"
import Head from "next/head"
import ContactInfo from "../../components/ContactInfo"

const Contact = ({ contact }) => (
	<>
		<Head>
			<title>Contact</title>
		</Head>
		<ContactInfo contact={contact}></ContactInfo>
	</>
)

export default Contact
