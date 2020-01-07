import Post from '../components/post'

export default () => (
  <Post
    h1="Claim Tax Benefits [alpha]"
    subheading="Simple filing for quicker benefits"
    title="Claim Tax Benefits — paul craig"
    imgSrc={require('../img/ctb.png')}
    imgAlt="Screenshot of the Claim Tax Benefits prototype"
    linkText="Simple filing for quicker benefits"
    href="https://claim-tax-benefits.azurewebsites.net/start"
  >
    <p>
      Since November 2018, I’ve been the Technical Lead on a{' '}
      <a href="https://digital.canada.ca/" target="_blank">
        Canadian Digital Service
      </a>{' '}
      project to improve the way Canadians receive benefits. Beginning with an
      organizational discovery and currently planning for an initial release,
      the Claim Tax Benefits service will trial expedited tax filing for
      low-confidence users in Ontario to reduce the barrier to receiving their
      benefits.
    </p>
    <p>
      As the lead technologist on the team, I am ultimately responsible for
      delivering a resilient and accessible service that integrates with the
      legacy infrastructure at the{' '}
      <a href="https://www.canada.ca/en/revenue-agency.html" target="_blank">
        Canada Revenue Agency (CRA)
      </a>
      . It’s a fairly big role, and the day-to-day is different depending on{' '}
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
      During the <strong>Discovery</strong>, my focus was on the archeology of
      our partner department: who are we working with? how do they plan their
      work? what systems are implicated? What are the constraints? The reports I
      wrote elaborated the context and made the case to move forward.
    </p>
    <p>
      In the <strong>Alpha</strong> phase, myself and the CRA Service Owner came
      up with the initial concept, and we then refined it with our Service
      Designer. In addition, I built various prototypes using different
      technology stacks to find a balance between the preferences of our modern
      dev shop and the legacy environment we are reliant on.
    </p>
    <p>
      Now working towards a live <strong>Beta</strong>, I am leading a small but
      capable team of developers from both departments as we build a secure and
      accessible frontend. At the same time, I am continuing to meet with and
      coordinate with various stakeholders at our partner department about our
      needs and changes to our scope of work.
    </p>
    <p>My responsibilities include:</p>
    <ul>
      <li>Evaluating the landscape (and documenting it)</li>
      <li>Picking the initial technology stack</li>
      <li>Developing the product</li>
      <li>Planning development work for upcoming sprints</li>
      <li>Managing the development team</li>
      <li>Doing code reviews</li>
      <li>Building and maintaining our CI pipeline</li>
      <li>
        Meeting and corresponding with our CRA IT partners to gather information
        or inform them of what we need
      </li>
      <li>
        Working with the Product Manager to estimate timelines and raise
        blockers
      </li>
      <li>
        Working very closely with our CRA IT manager to keep things on track
      </li>
      <li>
        Working with the Service Designer on product direction and estimating
        the feasibility of new designs
      </li>
      <li>Building proposed new features for usability testing sessions</li>
      <li>Attending / facilitating user research sessions</li>
      <li>Presenting work to stakeholders from both departments</li>
      <li>Writing documentation / rationales of all sorts</li>
    </ul>
    <p>
      All in all, it’s a big job with many folks involved, lots of
      responsibility, and potentially a very big impact. It’s fun the more real
      it gets, but I’m often wanting a beer at the end of a day. If you are
      curious about anything specific, please reach out and let’s get in{' '}
      <a href="/contact">/contact</a>.
    </p>
  </Post>
)
