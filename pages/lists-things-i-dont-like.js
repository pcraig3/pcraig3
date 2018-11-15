import Layout from '../components/layout'
import BackLink from '../components/backLink'

export default () => (
  <Layout title="things not at all liked by">
    <h1>Things I don’t like</h1>

    <p>
      Don’t even get me <em>started</em>.
    </p>

    <ul>
      <li>Power abuses</li>
      <li>Dirty dishes</li>
      <li>
        “Recognizing the challenges of operationalizing enterprise
        capabilities,”
      </li>
      <li>Cheeseball anthem house DJs</li>
      <li>Tim Horton’s coffee</li>
      <li>
        Those online forms where you have to tick the box to opt-out of
        marketing emails even though that’s not really the implication
      </li>
      <li>
        <a href={require('../img/kiosk.jpg')}>kiosks</a>
      </li>
      <li>Food deserts</li>
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
