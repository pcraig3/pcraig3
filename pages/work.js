import Layout from '../components/layout'
import Link from 'next/link'

export default () => (
  <Layout title="work by">
    <h1>Work</h1>
    <div>
      <Link href="/govuk-digital-marketplace">
        <a>
          <h2>GOV.UK Digital Marketplace</h2>
          <h3>Making it easier to buy better stuff</h3>
        </a>
      </Link>
    </div>

    <div>
      <h2>pcraig3.ca</h2>
      <h3>Building a well-padded trophy case</h3>
    </div>

    <div>
      <h2>westernusc.ca</h2>
      <h3>Redesigning the University Students’ Council’s website</h3>
    </div>

    <div>
      <h2>The Western USC Event Calendar</h2>
      <h3>Connecting to Facebook for a super cool event listing</h3>
    </div>

    <div>
      <h2>The Involvement Compass</h2>
      <h3>Matching Western students to Western’s clubs</h3>
    </div>
  </Layout>
)
