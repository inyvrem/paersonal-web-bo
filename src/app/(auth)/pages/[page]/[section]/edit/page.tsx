import EditSectionPageTemplate from "@/components/templates/pages/edit-section/template"

interface EditSectionPageProps {
  params: { page: string; section: string }
}

const EditSectionPage: React.FC<EditSectionPageProps> = ({ params }) => {
  return <EditSectionPageTemplate params={params} />
}

export default EditSectionPage
