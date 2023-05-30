interface DetailUserPageTemplateProps {
  params: { user: string }
}

const DetailUserPageTemplate: React.FC<DetailUserPageTemplateProps> = ({
  params,
}) => {
  const { user } = params
  return <h1>Detail User Page for {user}</h1>
}

export default DetailUserPageTemplate
