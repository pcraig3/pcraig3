import Layout from '../components/layout'
import { subheadStyles } from '../components/post'

const CV = () => (
  <Layout title="CV of paul craig">
    <h1>Paul Craig</h1>
    <p className={subheadStyles}>Codes loads in node</p>

    <h2>work</h2>

    <p>
      <strong>Tech Lead</strong>
      <br />
      Canadian Digital Service — Ottawa
      <br />
      2018
    </p>
    <ul>
      <li>Leads a team of devlopers building a user-centric digital service</li>
      <li>
        Defines, organizes, implements, and reviews dev work for a small agile
        dev team
      </li>
      <li>
        Collaborates across departmental silos and disciplines to keep moving
        forward
      </li>
      <li>
        Scopes out organisational barriers during project discoveries and
        proposes solutions
      </li>
      <li>Presents work and explains decisions to stakeholders</li>
      <li>Codes lots of ES6, React, CSS, HTML, and sometimes Java</li>
      <li>
        Pretty good experience setting up{' '}
        <abbr title="Continuous integration">CI</abbr>/
        <abbr title="Continuous deployment">CD</abbr> pipelines and cloud
        infrastructure
      </li>
      <li>Also I know tons about building accessible interfaces</li>
    </ul>
    <br />

    <p>
      <strong>Developer</strong>
      <br />
      Government Digital Service — London, UK
      <br />
      2015-18
    </p>
    <ul>
      <li>Built out a platform for public-sector procurement in Python 3</li>
      <li>Took the lead on frontend dev work</li>
      <li>
        Submitted all work as public, well-tested PRs; Reviewed others’ code
      </li>
      <li>Effective member of a focused, collaborative agile team</li>
    </ul>
    <br />

    <p>
      <strong>Developer</strong>
      <br />
      Western University Students’ Council (USC) — London, ON
      <br />
      2013-14
    </p>
    <ul>
      <li>Redesigned the flagship site of the students’ council</li>
      <li>Prioritized work using a design-led, user-centred process</li>
      <li>Open-sourced everything</li>
    </ul>
    <br />

    <h2>school</h2>

    <p>
      <strong>BA in Media Studies & Computer Science</strong>
      <br />
      Western University
      <br />
      2014
    </p>
    <br />

    <h2>tech</h2>
    <p>
      <strong>(Near) Expert</strong>
    </p>
    <ul>
      <li>
        JavaScript (ES6), Node.JS, React, HTML (templating), CSS, SCSS, Python,
        REST APIs, git, GitHub, accessible & responsive UIs, markdown (it
        counts), written communication / documentation / meeting notes /
        reports, collaborating across disciplines, empathizing with users
      </li>
    </ul>
    <br />

    <p>
      <strong>Pretty good at</strong>
    </p>
    <ul>
      <li>
        Docker, wireframing, CI/CD pipelines (YML), Azure, Heroku, GraphQL, PHP,
        WordPress, Java, SQL, MongoDB
      </li>
    </ul>
    <br />

    <p>
      <strong>I’ve seen it</strong>
    </p>
    <ul>
      <li>
        Angular, AWS, Kubernetes, Terraform, ElasticSearch, bash, Ruby, Go,
        .NET, C++
      </li>
    </ul>
    <br />

    <h2>misc.</h2>
    <p>
      I mean, I like big text designs, writing Bunz ads, and my yellow Nintendo
      Switch Lite. I don’t want to come off as brash or anything, but I can
      probably beat u in{' '}
      <a
        href="https://www.nintendo.com/games/detail/wargroove-switch/"
        target="_blank"
      >
        Wargroove
      </a>
      .
    </p>
    <p>Also I enjoy books but who doesn’t?</p>
  </Layout>
)

export default CV;