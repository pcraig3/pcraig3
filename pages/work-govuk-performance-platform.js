import Post from '../components/post'

export default () => (
  <Post
    h1={
      <span>
        GOV.UK<br />Performance Platform
      </span>
    }
    subheading="Performing accountability"
    title="GOV.UK Performance Platform —"
    imgSrc={require('../img/pp.png')}
    imgAlt="Screenshot of the Performance Platform"
    linkText="The Performance Platform"
    href={'https://www.gov.uk/performance'}
  >
    <p>
      In the summer of 2017, I joined the GOV.UK Performance team responsible
      for the{' '}
      <a href="https://www.gov.uk/performance" target="_blank">
        Performance Platform
      </a>: intended to be a centralized publisher of metrics for all UK
      government services.
    </p>
    <p>
      With much of the team focusing on a service redesign, the Performance
      Platform itself was in dire need of attention. An avant-garde isomorphic{' '}
      <a href="http://backbonejs.org/" target="_blank">
        Backbone
      </a>{' '}
      app, I had the opportunity to sharpen my web dev skillz on some truly
      cutting-edge JavaScript. Despite a fair amount of grief along the way, I
      finally fixed the damn thing:
    </p>
    <ul>
      <li>I updated the node engine by several major versions</li>
      <li>
        <a
          href="https://github.com/alphagov/spotlight/pull/1072"
          target="_blank"
        >
          I refactored hundreds of unit tests
        </a>
      </li>
      <li>I patched all the legitimate vulnerabilities</li>
      <li>
        <a
          href="https://github.com/alphagov/spotlight/pull/1084"
          target="_blank"
        >
          I wrote for future developers the docs I wish I had had
        </a>
      </li>
    </ul>
    <p>
      As the lead frontend developer on the Performance team, I worked alongside
      some great people, I overcame some fairly unique challenges, and —
      ultimately — I replatformed one of the Government Digital Service’s
      flagship products.
    </p>
  </Post>
)
