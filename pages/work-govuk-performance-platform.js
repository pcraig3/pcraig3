import Post from '../components/post'

const WorkPP = () => (
  <Post
    h1={
      <span>
        GOV.UK
        <br />
        Performance Platform
      </span>
    }
    subheading="Performing accountability"
    title="GOV.UK Performance Platform — paul craig"
    imgSrc={require('../img/pp.png')}
    imgAlt="Screenshot of the Performance Platform"
    linkText="The Performance Platform"
    href="https://www.gov.uk/performance"
  >
    <p>
      In the summer of 2017, I joined the GOV.UK Performance team responsible for the{' '}
      <a href="https://www.gov.uk/performance" target="_blank">
        Performance Platform
      </a>
      : the centralized publisher of metrics for all UK government services. With much of the team
      focused on designing a new service, the Performance Platform itself (
      <a
        href="https://www.gov.uk/performance/site-activity-performance-platform/traffic-to-site"
        target="_blank"
      >
        which serves thousands of people a day
      </a>
      ) was in need of some love.
    </p>
    <p>
      Originally built as an avant-garde isomorphic{' '}
      <a href="http://backbonejs.org/" target="_blank">
        Backbone
      </a>{' '}
      app, I took the opportunity to sharpen my frontend skillz on some cutting-edge JavaScript.
      Despite a healthy amount of grief along the way, I finally fixed the damn thing:
    </p>
    <ul>
      <li>I updated the node engine by several major versions</li>
      <li>
        <a href="https://github.com/alphagov/spotlight/pull/1072" target="_blank">
          I refactored hundreds of unit tests
        </a>
      </li>
      <li>I patched all the legitimate vulnerabilities</li>
      <li>
        <a href="https://github.com/alphagov/spotlight/pull/1084" target="_blank">
          I wrote for future developers the docs I wished I had had
        </a>
      </li>
    </ul>
    <p>
      As the lead frontend developer on the Performance team, I worked alongside some great people,
      I overcame some fairly unique challenges, and — ultimately — I renewed one of the Government
      Digital Service’s flagship products.
    </p>
  </Post>
)

export default WorkPP
