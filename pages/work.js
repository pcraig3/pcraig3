import Layout from '../components/layout'
import ListLink, { lineListsLeft } from '../components/listLink'

const Work = () => (
  <Layout title="work by paul craig" className={lineListsLeft}>
    <h1>Work</h1>

    <ul>
      <ListLink
        h2="Claim Tax Benefits [alpha]"
        subheading="Simple filing for quicker benefits"
        href="/work-claim-tax-benefits"
      />
      <ListLink
        h2="canada-holidays.ca"
        subheading="Statutory holidays for Canadians"
        href="/work-canada-holidays"
      />
      <ListLink
        h2="Reschedule a citizenship test"
        subheading="Helping future Canadians (yesterday)"
        href="/work-cds-rescheduler"
      />
      <ListLink
        h2="GOV.UK Performance Platform"
        subheading="Performing accountability"
        href="/work-govuk-performance-platform"
      />
      <ListLink
        h2="GOV.UK Digital Marketplace"
        subheading="Making it easier to buy better stuff"
        href="/work-govuk-digital-marketplace"
      />

      <ListLink
        h2="westernusc.ca"
        subheading="Renewing the University Students’ Council website"
        href="/work-westernuscca"
      />
      <ListLink
        h2="The Western USC Event Calendar"
        subheading="Building the best calendar in the country"
        href="/work-westernuscca-event-calendar"
      />
      <ListLink
        h2="The Involvement Compass"
        subheading="Matching Western students to Western’s clubs"
        href="/work-involvement-compass"
      />
    </ul>
  </Layout>
)

export default Work
