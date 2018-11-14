import Layout from '../components/layout'
import BackLink from '../components/backLink'

export default () => (
  <Layout title="things liked by">
    <h1>Things I like</h1>

    <p>
      Like a hot cup of tea on a rainy day.{' '}
      <span role="img" aria-label="Smiling face with smiling eyes">
        😊
      </span>
    </p>

    <ul>
      <li>falafel wrap chili sauce garlic sauce</li>
      <li>americanos</li>
      <li>
        <a href={require('../img/snowstorm-aftermath-london-on.jpg')}>
          w h i t e s p a c e
        </a>
      </li>
      <li>Feminism</li>
      <li>APIs</li>
      <li>
        <a
          href="https://www.goodreads.com/book/show/56034.The_French_Lieutenant_s_Woman"
          target="_blank"
        >
          The French Lieutenant's Woman by John Fowles
        </a>
      </li>
      <li>Version control</li>
      <li>Phở</li>
      <li>
        <a
          href="https://myanimelist.net/anime/13601/Psycho-Pass"
          target="_blank"
        >
          Psycho-Pass
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=sMXjtvMAFlI" target="_blank">
          the Batman Beyond intro
        </a>
      </li>
      <li>
        <a href={require('../img/nt.jpg')}>the National Theatre</a>
      </li>
      <li>Simian Mobile Disco</li>
      <li>A hot cup of (Earl Grey) tea on a rainy day</li>
    </ul>

    <BackLink href="/lists" />
  </Layout>
)
