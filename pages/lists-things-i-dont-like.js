import Layout from '../components/layout'
import BackLink from '../components/backLink'

const ListDontLike = () => (
  <Layout title="things paul craig doesn’t like">
    <h1>Things I don’t like</h1>

    <p>
      Don’t even get me <em>started</em>.
    </p>

    <ul>
      <li>Product design via moving nouns around in MS PowerPoint</li>
      <li>Dirty dishes</li>
      <li>
        “Recognizing the challenges of operationalizing enterprise capabilities” (
        <span role="img" aria-label="Face with rolling eyes">
          🙄🙄🙄
        </span>
        )
      </li>
      <li>Cheeseball anthem house DJs</li>
      <li>Tim Hortons coffee</li>
      <li>Spider mites! Hate ‘em!</li>
      <li>
        Those online forms where you have to tick the box to <strong>opt-out</strong> of marketing
        emails
      </li>
      <li>
        <a href={require('../img/kiosk.jpg')}>kiosks</a>
      </li>
      <li>Food deserts</li>
      <li>Back-to-back-to-back meetings (no time to think!)</li>
      <li>
        Plunging February weather forecasts <span aria-hidden="true">📉</span>
      </li>
      <li>
        Biting February wind <span aria-hidden="true">🌬️</span>
      </li>
    </ul>
    <BackLink href="/lists" />
  </Layout>
)

export default ListDontLike
