import Post from '../components/post'

export default () => (
  <Post
    h1="westernusc.ca"
    subheading="Renewing the University Students’ Council website"
    title="westernusc.ca — paul craig"
    imgSrc={require('../img/sg.png')}
    imgAlt="Screenshot of the former westernusc.ca"
  >
    <p>
      As a team of two, my partner{' '}
      <a
        href="http://www.tylerbenning.com/portfolio/university-students-council/"
        target="_blank"
        title="He's great!"
      >
        Tyler
      </a>{' '}
      and I lead a complete visual and architectural redesign of the web
      presence for Western’s student government, the{' '}
      <a href="https://westernusc.ca/" target="_blank">
        University Students’ Council
      </a>{' '}
      (USC).
    </p>
    <p>
      Guided by user research, we prioritized features most likely to benefit
      the greatest number of students, making use of both third-party solutions
      and{' '}
      <a
        href="https://github.com/pcraig3?utf8=%E2%9C%93&tab=repositories&q=usc&type=&language="
        target="_blank"
        aria-label="Open-sourced code for custom plugins used on the former westernusc.ca"
      >
        some open-sourced custom stuff
      </a>. In building the site, we extended the{' '}
      <a href="https://www.elegantthemes.com/gallery/divi/" target="_blank">
        Divi
      </a>{' '}
      WordPress theme, contributed to a{' '}
      <a
        href="https://wordpress.org/plugins/event-organiser/"
        target="_blank"
        aria-label="The Event Organiser plugin"
      >
        couple
      </a>{' '}
      <a
        href="https://wordpress.org/plugins/admin-page-framework/"
        target="_blank"
        aria-label="The Admin Page Framework plugin"
      >
        plugins
      </a>
      , and connected to some{' '}
      <a
        href="https://engagesupport.campuslabs.com/hc/en-us/articles/204033994-Documentation-for-Web-Services-API-Version-2-0-"
        target="_blank"
        aria-label="The CampusLabs API"
      >
        external
      </a>{' '}
      <a
        href="https://developers.facebook.com/docs/graph-api/"
        target="_blank"
        aria-label="The Facebook Graph API"
      >
        APIs
      </a>.
    </p>
    <p>Overhauling the website ultimately helped:</p>
    <ul>
      <li>
        <strong>students</strong> by highlighting information they were looking
        for
      </li>
      <li>
        <strong>administrators</strong> by simplifying the upkeep of the site
      </li>
    </ul>
    <p>—</p>
    <p>
      While the site has since been re-redesigned (<span
        role="img"
        aria-label="Face with rolling eyes"
      >
        🙄
      </span>), the fervently curious can still check out{' '}
      <a
        href="https://web.archive.org/web/20141121063027/http://westernusc.ca:80/"
        target="_blank"
        aria-label="archive.org: westernusc.ca circa november 2014"
      >
        the archived version
      </a>, and{' '}
      <a
        href="http://www.tylerbenning.com/wp-content/uploads/2015/02/usc-document.pdf"
        target="_blank"
        aria-label="Western USC Web Redesign Report"
      >
        the slick PDF report (12 MB)
      </a>{' '}
      that Tyler whipped up for us.
    </p>
  </Post>
)
