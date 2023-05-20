interface PageOverviewPageProps {
  params: { page: string; section: string }
}

// export function generateStaticParams() {
//   return [
//     { page: "a", section: "1" },
//     { page: "b", section: "2" },
//     { page: "c", section: "3" },
//   ]
// }

const PageOverviewPage: React.FC<PageOverviewPageProps> = () => {
  return <h1>Page Overview</h1>
}

export default PageOverviewPage
