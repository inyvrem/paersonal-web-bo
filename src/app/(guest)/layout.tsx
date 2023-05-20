import GuestFooter from "@/app/organisms/footers/guest/footer"

interface GuestLayoutProps {
  children: React.ReactNode
}

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
  return (
    <>
      {/* <GuestNavbar /> */}
      <main className="mt-0 transition-all duration-200 ease-soft-in-out">
        <section>
          <div className="relative flex items-center min-h-screen p-0 overflow-hidden bg-center bg-cover">
            <div className="container z-1">
              <div className="flex flex-wrap -mx-3 mt-8 md:mt-0">
                {children}
              </div>
            </div>
          </div>
        </section>
      </main>
      <GuestFooter />
    </>
  )
}

export default GuestLayout
