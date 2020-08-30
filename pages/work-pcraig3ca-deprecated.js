import Post from '../components/post'

const WorkPCRAIG3 = () => (
  <Post
    h1="pcraig3.ca"
    subheading="Building a well-padded trophy case"
    title="pcraig3.ca (deprecated) — paul craig"
    imgSrc={require('../img/p2.png')}
    imgAlt="Screenshot of the former pcraig3.ca"
  >
    <p>
      In late 2014, I put together a website to showcase other websites I’d
      worked on as well as to demonstrate that I could build meta-websites.
    </p>
    <p>
      A self-appointed tyrannical Creative Director, it was a fun sandbox in
      which to break some conventions. Inspired by{' '}
      <a href="https://en-ca.wordpress.org/themes/zweig/" target="_blank">
        Simon Vandereecken
      </a>
      ,{' '}
      <a href="http://greaterthanorequalto.net" target="_blank">
        Alan Trotter
      </a>
      , and{' '}
      <a href={require('../img/snowstorm-aftermath-london-on.jpg')}>
        London, Ontario
      </a>
      , the idea was to see how much I could remove without confounding my (
      <em>very</em> occasional) visitors. Although it never made it to the
      WordPress Theme Directory proper, you can always download a .zip from{' '}
      <a href="https://github.com/pcraig3/zweig-child" target="_blank">
        the GitHub repo
      </a>{' '}
      if you really want it. (as if.)
    </p>
    <p>
      Building my own portfolio ultimately taught me how to manage my own
      projects, how to extend Already-Existing software, and how little I
      actually need a web presence.
    </p>
    <p aria-hidden="true">😛</p>
  </Post>
)

export default WorkPCRAIG3
