import Post from '../components/post'

const WorkEC = () => (
  <Post
    h1="The Western USC Event Calendar"
    subheading="Building the best calendar in the country"
    title="The Western USC Event Calendar — paul craig"
    imgSrc={require('../img/ec.png')}
    imgAlt="Screenshot of the former westernusc.ca event calendar"
  >
    <p>
      In early 2014, I built out a super cool event calendar for the Western University Students’
      Council (USC) by extending the{' '}
      <a href="https://wp-event-organiser.com/" target="_blank">
        Event Organiser plugin
      </a>{' '}
      to display public Facebook events hosted by student clubs.
    </p>
    <p>
      By hooking into the Facebook API, I filled the formerly empty calendar with an always-current
      list of student-organised events on campus. It was centralized and up-to-date, it worked on
      all screen sizes, and it{' '}
      <a
        href="https://web.archive.org/web/20150402063725/http://westernusc.ca/clubs/listing-events-calendar/"
        target="_blank"
        aria-label="archive.org link to event calendar instructions for clubs circa 2014"
      >
        asked very little of the clubs themselves
      </a>
      . The end result was, for a time, the most sophisticated event calendar on any Canadian
      campus.
    </p>
    <p>This API-driven calendar:</p>
    <ul>
      <li>
        helped <strong>student clubs</strong> by raising awareness of their events
      </li>
      <li>
        informed <strong>students</strong> in real-time about inclusive campus events
      </li>
      <li>
        freed up time for <strong>USC administrators</strong> by automating event creation
      </li>
    </ul>
  </Post>
)

export default WorkEC
