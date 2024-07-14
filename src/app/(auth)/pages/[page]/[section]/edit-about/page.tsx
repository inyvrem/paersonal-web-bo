import EditAboutSectionPageTemplate from "@/components/templates/pages/edit-about-section/template";

interface EditAboutSectionPageProps {
  params: { page: string; section: string }
}

const EditAboutSectionPage: React.FC<EditAboutSectionPageProps> = ({ params }) => {
  return <EditAboutSectionPageTemplate params={params} />
}

export default EditAboutSectionPage
