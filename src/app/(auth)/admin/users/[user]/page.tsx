import DetailUserPageTemplate from "@/components/templates/admin/users/detail-user/template"

interface DetailUsePageProps {
  params: { user: string }
}

const DetailUsePage: React.FC<DetailUsePageProps> = ({ params }) => {
  return <DetailUserPageTemplate params={params} />
}

export default DetailUsePage
