import { FC } from "react"
import { headingType } from "../types"

type headingProps = {
  tag?: headingType["tag"]
  text: headingType["text"]
}

const Heading: FC<headingProps> = ({ tag, text }) => {
  const Tag = tag || "h1"
  return <Tag>{text}</Tag>
}
export default Heading
