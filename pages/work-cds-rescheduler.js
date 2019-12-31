import Post from '../components/post'

export default () => (
  <Post
    h1="Reschedule a citizenship test"
    subheading="Helping future Canadians (yesterday)"
    title="CDS Citizenship Rescheduler — paul craig"
    imgSrc={require('../img/ircc.png')}
    imgAlt="Screenshot of the Citizenship Rescheduler"
  >
    <p>
      From April to October 2018, I led the development of the{' '}
      <a href="https://vancouver.rescheduler-dev.cds-snc.ca/" target="_blank">
        Reschedule a citizenship test
      </a>{' '}
      service at the{' '}
      <a href="https://digital.canada.ca/" target="_blank">
        Canadian Digital Service
      </a>
      . The Rescheduler allowed future Canadians with prior obligations to
      rebook their citizenship language tests, replacing an anxiety-riven
      informal process with a far more straightforward interaction. It was
      better for end users, and it was better for immigration officers.
    </p>
    <p>
      It was written as a{' '}
      <a
        href="https://medium.freecodecamp.org/demystifying-reacts-server-side-render-de335d408fe4"
        target="_blank"
      >
        server-rendered React
      </a>{' '}
      app, it logged errors in production,{' '}
      <a
        href="https://digital.canada.ca/2018/08/08/supporting-users-gracefully-degrading-react/"
        target="_blank"
      >
        it supported a no-JS user flow
      </a>
      , and it was exceptionally well tested (thanks largely to{' '}
      <a
        href="https://twitter.com/timarney"
        target="_blank"
        title="He’s a genius"
      >
        Tim Arney
      </a>
      ). Even when it broke, it worked.
    </p>
    <p>
      The Rescheduler was the first{' '}
      <a
        href="https://www.tpsgc-pwgsc.gc.ca/esc-src/protection-safeguarding/niveaux-levels-eng.html"
        target="_blank"
      >
        Protected A (eh?)
      </a>{' '}
      cloud service in the Canadian government, it was delivered on time by{' '}
      <a href="https://digital.canada.ca/our-team/" target="_blank">
        a world-class team
      </a>
      , and for nearly a year it helped <strong>real people</strong> get on with
      their lives.
    </p>
  </Post>
)
