import Link from 'next/link'
import Post from '../components/post'

const WorkCTB = () => (
  <Post
    h1="Claim Tax Benefits"
    subheading="Simple filing for quicker benefits"
    title="Claim Tax Benefits — paul craig"
    imgSrc={require('../img/ctb.png')}
    imgAlt="Screenshot of the Claim Tax Benefits prototype"
    linkText="Simple filing for quicker benefits"
    href="https://claim-tax-benefits.herokuapp.com/start"
  >
    <p>
      Between November 2018 and January 2020, I was Technical Lead on a{' '}
      <a href="https://digital.canada.ca/" target="_blank">
        Canadian Digital Service (CDS)
      </a>{' '}
      project to improve the way Canadians file tax returns. Moving from an organizational discovery
      to prototyping to testing with citizens, the service trialled expedited filing for
      low-confidence tax-filers in Ontario.
    </p>
    <p>
      As the lead technologist on the team, I was responsible for delivering a resilient and
      accessible service to test with Real Canadians™, for setting up longer-term practices (CI/CD,
      our sweet suite of tests), and for integrating with the legacy infrastructure at the{' '}
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
      inter-departmental developers as we built a snappy and accessible Node app that was
      continuously tested and deployed inside of CRA’s Azure cloud lab.
    </p>
    <p>
      The technological challenge was to define a stack whose citizen-facing side could accommodate
      quick changes on top of a mainframe system that absolutely could not. To resolve this tension,
      I designed a quick-to-iterate containerized JS frontend and a Java API backend that could
      translate our data into the format expected by CRA — an architecture that remained intact
      despite many other changes to the project.
    </p>
    <p>
      Unfortunately, the service was not launched due to conflicting priorities between our two
      organizations. At CDS, we wanted to quickly roll out the service on a small scale, whereas CRA
      preferred to pause the work until such time as Canada's Governor General would ask them to
      prioritize it in her{' '}
      <a
        href="https://www.canada.ca/en/privy-council/campaigns/speech-throne/2020/stronger-resilient-canada.html"
        target="_blank"
      >
        Speech from the Thone
      </a>
      , using almost literally the tagline of our project:
    </p>
    <blockquote cite="https://www.canada.ca/en/privy-council/campaigns/speech-throne/2020/stronger-resilient-canada.html">
      <p>
        “The Government will also work to introduce free, automatic tax filing for simple returns to
        ensure citizens receive the benefits they need.”
      </p>
      <footer>
        —<cite>Julie Payette, Governor General of Canada</cite>
      </footer>
    </blockquote>
    <p>
      Claim Tax Benefits was an ambitious project aiming to redefine how an important government
      service could be built and delivered: quickly and incrementally, using real citizens to guide
      the process. While it didn’t achieve its ends in the short term, much of the work we did is
      publicly-available — including our{' '}
      <a
        href="https://cds-snc.github.io/claim-tax-benefits-documentation/information-about-claim-tax-benefits/"
        target="_blank"
      >
        documentation
      </a>{' '}
      and our{' '}
      <a href="https://claim-tax-benefits.herokuapp.com" target="_blank">
        click-through protoype
      </a>{' '}
      — laying an important foundation for whatever comes next.
    </p>

    <p>
      No biggie though, not everything works all of the time, and the CRA project involved
      coordination, responsibility, and areas to grow. Plus, ending the project freed me up to work
      on the{' '}
      <Link href="/work-cds-covid-alert-portal">
        <a>COVID Alert Portal</a>
      </Link>
      : the hippest government-provided cost-free solution this side of the Rideau river.
    </p>
  </Post>
)

export default WorkCTB
