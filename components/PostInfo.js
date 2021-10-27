import Heading from "./Heading"

const PostInfo = ({ post }) => {
  const { title, body } = post || {}

  if (!post) {
    return <Heading tag="h3" text="Empty post"></Heading>
  }

  return (
    <>
      <Heading tag="h3" text={title}></Heading>
      <div>
        {body}
      </div>
    </>
  )
}

export default PostInfo
