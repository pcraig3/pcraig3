import Layout from '../components/layout'
import ListLink, { lineListsLeft } from '../components/listLink'

export default () => (
  <Layout title="lists by" className={lineListsLeft}>
    <h1>Lists</h1>

    <ul>
      <ListLink
        h2="Things I like"
        subheading={
          <span>
            Love it <span aria-hidden="true">❤️</span>
          </span>
        }
        href="/lists-things-i-like"
      />
      <ListLink
        h2="Things I don’t like"
        subheading="omg pls no"
        href="/lists-things-i-dont-like"
      />
      <ListLink
        h2="Places I’ve lived"
        subheading="Come visit!"
        href="/lists-places-ive-lived"
      />
    </ul>
  </Layout>
)
