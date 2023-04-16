import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>

    {/* for all routes navbar */}
      <Navbar />
      {children}
    </>
  )
}

export default Layout
