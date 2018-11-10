import Layout from '../components/layout'
import { withRouter } from 'next/router'

export default () => (
  <Layout title="about paul craig" h1="About">
    <p>
      My name is Paul Craig and{' '}
      <a href="https://youtu.be/gDwfQjxbFBM?t=98">I like websites</a>.
    </p>
  </Layout>
)
