import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <>
    <Header></Header>
    {children}
    <Footer></Footer>
  </>
)

export default Layout
