import EditPortfolioSectionPageTemplate from "@/components/templates/pages/edit-portfolio-section/template";

interface EditPortfolioSectionPageProps {
  params: { page: string; section: string }
}

const EditPortfolioSectionPage: React.FC<EditPortfolioSectionPageProps> = ({ params }) => {
  return <EditPortfolioSectionPageTemplate params={params} />
}

export default EditPortfolioSectionPage
