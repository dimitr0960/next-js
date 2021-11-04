import { FC, ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"

type layoutProps = {
  children: ReactNode
}

const Layout: FC<layoutProps> = ({ children }) => (
  <>
    <Header></Header>
    {children}
    <Footer></Footer>
  </>
)

export default Layout
