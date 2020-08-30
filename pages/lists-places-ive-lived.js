import { css } from 'react-emotion'
import Layout from '../components/layout'
import BackLink from '../components/backLink'

const censorshipStyles = css`
  ul li p span {
    background-color: black;
  }
`

const ListPlaces = () => (
  <Layout
    title="places paul craig lives or has lived"
    className={censorshipStyles}
  >
    <h1>Places I’ve lived</h1>

    <p>Currently in Ottawa.</p>

    <ul>
      <li>
        <p>
          <span aria-hidden="true">000</span> Lisgar Street<br />
          Ottawa<br />Canada<br />
          K2P <span aria-hidden="true">000</span>
        </p>
      </li>

      <li>
        <p>
          1134 Falaise Road<br />
          Ottawa<br />Canada<br />
          K2E 5H7
        </p>
      </li>

      <li>
        <p>
          Flat 2, Enver House<br />
          2-4 Tottenham Road<br />
          London<br />
          United Kingdom<br />
          N1 4BZ
        </p>
      </li>

      <li>
        <p>
          39 Hawarden Road<br />
          London<br />United Kingdom<br />
          E17 6NS
        </p>
      </li>

      <li>
        <p>
          Flat 1, Eccles Court<br />
          260 Kennington Lane<br />
          London<br />United Kingdom<br />
          SE11 5RG
        </p>
      </li>

      <li>
        <p>
          6995 Rue Saint-Denis<br />
          Montreal<br />Canada<br />H2S 2S5
        </p>
      </li>

      <li>
        <p>
          1057 Richmond Street<br />
          London<br />Canada<br />N6A 3J7
        </p>
      </li>

      <li>
        <p>
          109 Huron Street<br />
          London<br />Canada<br />N6A 2H9
        </p>
      </li>

      <li>
        <p>
          531 Rue Saint-Germaine<br />
          Québec<br />Canada<br />
          G1K 4P5
        </p>
      </li>

      <li>
        <p>
          80 Rue du Rocher<br />
          Rivière-du-Loup<br />Canada<br />
          G5R 3A3
        </p>
      </li>

      <li>
        <p>
          2-1363L, Hall 14, Block 66<br />
          34 Nanyang Crescent<br />Nanyang Technological University<br />Singapore<br />
          637634
        </p>
      </li>

      <li>
        <p>
          789 Waterloo Street<br />
          London<br />Canada<br />N6A 3W4
        </p>
      </li>

      <li>
        <p>
          Room 118, Alumni House<br />
          1151 Richmond Street<br />
          London<br />Canada<br />N6A 5B7
        </p>
      </li>

      <li>
        <p>
          29 Cranborne Road<br />
          Liverpool<br />
          United Kingdom<br />
          L15 2HX
        </p>
      </li>

      <li>
        <p>
          <span aria-hidden="true">0000 Secret Court</span>
          <br />Mississauga<br />Canada<br />L5K{' '}
          <span aria-hidden="true">000</span>
        </p>
      </li>
    </ul>

    <BackLink href="/lists" />
  </Layout>
)

export default ListPlaces;
