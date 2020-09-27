import Post from '../components/post'

const WorkCAP = () => (
  <Post
    h1="COVID Alert Portal"
    subheading="Curbing COVID in Canada"
    title="COVID Alert Portal — paul craig"
    imgSrc={require('../img/portal.png')}
    imgAlt="Screenshot of the COVID Alert Portal"
    linkText="Curbing COVID in Canada"
    href="https://healthcare-portal.herokuapp.com"
  >
    <p>
      Since June 2020, I’ve been lead devving the COVID Alert Portal: the hippest
      government-provided cost-free solution this side of the Rideau river. Whereas the{' '}
      <a
        href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19/covid-alert.html"
        target="_blank"
      >
        COVID Alert
      </a>{' '}
      app is generally available to conscientious canucks, the Portal allows healthcare workers to
      generate one-time keys for diagnosed patients.
    </p>
    <p>
      It’s built as a fun{' '}
      <a
        href="https://github.com/cds-snc/covid-alert-portal"
        title="open-source on GitHub"
        target="_blank"
      >
        open-source
      </a>{' '}
      Django app deployed on an AWS backend (less fun), with an automated testing and deployment
      pipeline. The Portal’s behaviour is more commodified than other parts of the system, so
      choosing the well-understood{' '}
      <a href="https://www.djangoproject.com/" target="_blank">
        Django
      </a>{' '}
      framework allowed us to get going quickly and build sustainably as we rapidly developed our
      MVP over a few hectic weeks. With the time we saved, we freed the team up to work on
      higher-level problems, like robust test cases, reusable infrastructure, and our security
      processes.
    </p>
    <p>The Portal makes up a small but important part of the holistic COVID Alert ecosystem:</p>
    <ul>
      <li>
        <a
          href="https://github.com/cds-snc/covid-alert-app"
          title="the COVID Alert app on GitHub"
          target="_blank"
        >
          the app
        </a>{' '}
        is user-facing: it keeps track of nearby devices for 14 days, and looks for matching devices
        stored on the server.
      </li>
      <li>
        <a
          href="https://github.com/cds-snc/covid-alert-server"
          title="the COVID Alert server on GitHub"
          target="_blank"
        >
          the server
        </a>{' '}
        is owned by CDS: it stores random IDs uploaded by diagnosed patients who have been given
        one-time keys.
      </li>
      <li>
        <a
          href="https://github.com/cds-snc/covid-alert-portal"
          title="the COVID Alert portal on GitHub"
          target="_blank"
        >
          the portal
        </a>{' '}
        is for healthcare workers: it generates one-time keys that diagnosed patients can use to
        upload their data.
      </li>
    </ul>
    <p>
      The Portal went into production for Ontario on August 14, 2020, and continues to onboard new
      provinces — each with their own operational differences. Its usage varies region-by-region,
      but ultimately I am responsible for delivering a service that is accessible, secure, and
      available, while remaining flexible enough to accommodate the evolving needs of our current
      and future users.
    </p>
    <p>
      The COVID Alert Portal helps the healthcare workers that are helping Canadians, it was (and
      still is) delivered quickly and on-time using agile delivery methods, and it will keep doing
      what it needs to for as long as it’s needed.
    </p>
  </Post>
)

export default WorkCAP
