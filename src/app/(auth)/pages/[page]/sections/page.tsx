import AllSectionsPageTemplate from "@/app/templates/pages/all-sections/template"

interface AllSectionsPageProps {
  params: { page: string; section: string }
}

const AllSectionsPage: React.FC<AllSectionsPageProps> = ({ params }) => {
  return <AllSectionsPageTemplate params={params} />
}

export default AllSectionsPage
