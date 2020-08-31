import Layout from '../components/layout'
import BackLink from '../components/backLink'

const FourOhFour = () => (
  <Layout title="404 not found - paul craig">
    <h1>
      No. <span aria-hidden="true">🙅</span>
    </h1>
    <p>Sorry but this is wrong.</p>
    <BackLink href="/" />
  </Layout>
)

export default FourOhFour
