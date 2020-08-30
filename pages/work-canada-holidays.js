import Post from '../components/post'

const WorkCH = () => (
  <Post
    h1="canada-holidays.ca"
    subheading="Statutory holidays for Canadians"
    title="canada-holidays.ca — paul craig"
    imgSrc={require('../img/hols.png')}
    imgAlt="Screenshot of canada-holidays.ca"
    linkText="Canadian statutory holidays in 2020"
    href="https://canada-holidays.ca/"
  >
    <p>
      Since September 2019, I’ve been the cleanest-designed authority on
      Canada’s stat holidays: helping working-class canucks sleep in, return
      stuff to the mall, drive to Peterborough, or whatever else you might do on
      a 3-day weekend.
    </p>
    <p>
      Inspired by{' '}
      <a href="/work-govuk-digital-marketplace">
        my time at the Government Digital Service
      </a>{' '}
      (ie, a demonstrated user need for{' '}
      <a
        href="https://www.gov.uk/bank-holidays"
        target="_blank"
        title="UK bank holidays - GOV.UK"
      >
        holidays
      </a>
      ), I built a little demo app as part of a technical exploration for{' '}
      <a href="work-claim-tax-benefits">
        a project with the Canada Revenue Agency
      </a>
      .
    </p>
    <p>
      Initially a Java + React containerized microservice-y thing (
      <a
        href="https://next-holidays.azurewebsites.net/"
        title="When is your next holiday?"
        target="_blank"
      >
        still up!
      </a>
      ), I later decided to re-tool and release it for real. Microservices are a
      great solution to problems I didn’t encounter, so I combined the API and
      UI together into{' '}
      <a href="https://github.com/pcraig3/hols/" target="_blank">
        a zippy little Node app
      </a>{' '}
      that serves JSON && HTML with minimal faff and major SEO (on some search
      engines <span aria-hidden="true">🦆</span>).
    </p>
    <p>
      <a href="https://canada-holidays.ca/" target="_blank">
        Canada-holidays.ca
      </a>{' '}
      is a small but instructive example of a soup-to-nuts modern web app. It
      was quick to build, fast to release, it auto-deploys on merge, it’s hella
      accessible, it’s iterated based on user feedback, and it doesn’t solve
      problems it doesn’t have. Currently it’s{' '}
      <a
        href="https://www.bing.com/search?q=canada+holidays&qs=n&form=QBRE&sp=-1&pq=canada+holidays+2020&sc=8-20&sk=&cvid=E814AF7AD640473499B967E91A68CE52"
        target="_blank"
        title="search terms 'canada holidays' on bing"
      >
        #4 on Bing dot com
      </a>{' '}
      (sometimes #3), so it might be coming soon to an Edge browser near you.
    </p>
    <p>
      If you have issues with the font rhythm, take it up with{' '}
      <a href="http://tylerbenning.com/" target="_blank">
        Tyler Benning
      </a>
      .
    </p>
  </Post>
)

export default WorkCH
