import Navbar from "@/app/organisms/navbars/auth/nav-bar"
import Footer from "@/app/organisms/footers/auth/footer"
import Sidebar from "@/app/organisms/navbars/auth/side-bar"

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main className="relative h-full max-h-screen transition-all duration-200 ease-soft-in-out xl:ml-68 rounded-xl">
        {/* <main className="relative h-full max-h-screen transition-all duration-200 ease-soft-in-out rounded-xl"> */}
        <Navbar />
        <div className="w-full p-6 mx-auto">
          {children}
          <Footer />
        </div>
      </main>
    </>
  )
}

export default AuthLayout
