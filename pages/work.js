import Layout from '../components/layout'
import WorkLink from '../components/workLink'

export default () => (
  <Layout title="work by">
    <h1>Work</h1>

    <WorkLink
      h2="GOV.UK Digital Marketplace"
      subheading="Making it easier to buy better stuff"
    />
    <WorkLink h2="pcraig3.ca" subheading="Building a well-padded trophy case" />
    <WorkLink
      h2="westernusc.ca"
      subheading="Redesigning the University Students’ Council’s website"
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
