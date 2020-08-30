import Post from '../components/post'

const WorkCTB = () => (
  <Post
    h1="Claim Tax Benefits"
    subheading="Simple filing for quicker benefits"
    title="Claim Tax Benefits — paul craig"
    imgSrc={require('../img/ctb.png')}
    imgAlt="Screenshot of the Claim Tax Benefits prototype"
    linkText="Simple filing for quicker benefits"
  >
    <p>
      Between November 2018 and January 2020, I was Technical Lead on a{' '}
      <a href="https://digital.canada.ca/" target="_blank">
        Canadian Digital Service (CDS)
      </a>{' '}
      project to improve the way Canadians receive benefits. Beginning with an organizational
      discovery and ending with a whimper, the service trialled expedited filing for low-confidence
      tax-filers in Ontario.
    </p>
    <p>
      As the lead technologist on the team, I was responsible for prototyping and delivering a
      resilient and accessible service to validate with Real Canadians™, for setting up longer-term
      practices (CI/CD, tests [hint: the prototype is the product]), and for integrating with the
      legacy infrastructure at the{' '}
      <a href="https://www.canada.ca/en/revenue-agency.html" target="_blank">
        Canada Revenue Agency (CRA)
      </a>
      . It was a big role, though the day-to-day depended on{' '}
      <a
        href="https://digital.canada.ca/partnerships/"
        title="The phase of the project: read about how the Canadian Digital Service works"
        target="_blank"
      >
        the phase of the project
      </a>
      .
    </p>
    <p>
      During the <strong>Discovery</strong>, my focus was on the archeology of our partner
      department: who are we working with? how do they plan their work? what systems are implicated?
      What are the constraints? The reports I wrote elaborated the context and made the case to move
      forward.
    </p>
    <p>
      In the <strong>Alpha</strong> phase, myself and the CRA Service Owner came up with the initial
      concept, which we then refined with our Service Designer. I built various initial prototypes
      using different technology stacks to find a balance between the preferences of our modern dev
      shop and CRA’s legacy environment.
    </p>
    <p>
      While working towards a live <strong>Beta</strong>, I led a small but capable team of
      inter-departmental developers as we built a snappy and accessible frontend. I regularly met
      with with CRA stakeholders about our progress and changes to our scope of work.
    </p>
    <p>
      Unfortunately, we never launched the service due to conflicting priorities between our two
      organizations. During the mothballing period, I (plus{' '}
      <a href="https://www.katedee.com/" target="_blank">
        Kate!
      </a>
      ) put together{' '}
      <a
        href="https://cds-snc.github.io/claim-tax-benefits-documentation/information-about-claim-tax-benefits/"
        target="_blank"
      >
        a nice little Jekyll static site
      </a>{' '}
      to document what we had learned as a team. It obviously would have been neat to ship, but,
      when you think about it, the real treasure was friendship all along.{' '}
      <span aria-hidden="true">🌈🤗</span>
    </p>
    <p>
      “There are fewer things in heaven and earth than are dreamt of in your 5-year IT plan,” I
      think Shakespeare once emailed. No biggie though, not everything works all of the time, and
      the CRA project involved coordination, responsibility, and areas to grow. Plus, ending the
      project freed me up to work on the{' '}
      <a href="/work-cds-covid-alert-portal">COVID Alert Portal</a>: the hippest government-provided
      cost-free solution this side of the Rideau river.
    </p>
  </Post>
)

export default WorkCTB
