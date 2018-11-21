import Layout from '../components/layout'
import { subheadStyles } from '../components/post'

export default () => (
  <Layout title="CV of paul craig">
    <h1>Paul Craig</h1>
    <p className={subheadStyles}>Codes loads in node</p>

    <h2>work</h2>

    <p>
      <strong>Tech Lead</strong>
      <br />
      Canadian Digital Service — Ottawa<br />2018
    </p>
    <ul>
      <li>Builds user-centric web services in isomorphic JavaScript</li>
      <li>Defines and organizes tech work for a small agile dev team</li>
      <li>Scopes out future work in project discoveries</li>
      <li>Eager to help CDS succeed in its mission</li>
    </ul>
    <br />

    <p>
      <strong>Developer</strong>
      <br />
      Government Digital Service — London, UK<br />2015-18
    </p>
    <ul>
      <li>Fixed public-sector procurement without trailing semicolons</li>
      <li>Took the lead on frontend dev work</li>
      <li>Submitted public, well-tested PRs; Reviewed others’ code</li>
      <li>Effective member of a focused, collaborative team</li>
    </ul>
    <br />

    <p>
      <strong>Developer</strong>
      <br />
      Western University Students’ Council (USC) — London, ON<br />2013-14
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
      Western University<br />2014
    </p>

    <h2>misc.</h2>
    <p>I mean, I like websites and writing fake twitter bios.</p>
    <p>Also I enjoy books but who doesn’t?</p>
  </Layout>
)
