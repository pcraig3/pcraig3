import Layout from '../components/layout'
import WorkLink from '../components/workLink'

export default () => (
  <Layout title="work by">
    <h1>Work</h1>

    <WorkLink
      h2="GOV.UK Digital Marketplace"
      subheading="Making it easier to buy better stuff"
      href="/work-govuk-digital-marketplace"
    />
    <WorkLink
      h2="pcraig3.ca (deprecated)"
      subheading="Building a well-padded trophy case"
      href="/work-pcraig3ca-deprecated"
    />
    <WorkLink
      h2="westernusc.ca"
      subheading="Renewing the University Students’ Council website"
      href="/work-westernuscca"
    />
    <WorkLink
      h2="The Western USC Event Calendar"
      subheading="Connecting to Facebook for a super cool event listing"
    />
    <WorkLink
      h2="The Involvement Compass"
      subheading="Matching Western students to Western’s clubs"
    />
  </Layout>
)
