import Post from '../components/post'

const WorkDM = () => (
  <Post
    h1={
      <span>
        GOV.UK
        <br />
        Digital Marketplace
      </span>
    }
    subheading="Making it easier to buy better stuff"
    title="GOV.UK Digital Marketplace — paul craig"
    imgSrc={require('../img/dm.png')}
    imgAlt="Screenshot of the Digital Marketplace"
    linkText="The Digital Marketplace"
    href="https://www.digitalmarketplace.service.gov.uk/"
  >
    <p>
      Between 2015 and 2017, I was part of the high-performing multidisciplinary team building out
      the{' '}
      <a href="https://www.digitalmarketplace.service.gov.uk/" target="_blank">
        Digital Marketplace
      </a>{' '}
      for the{' '}
      <a href="https://gds.blog.gov.uk/about/" target="_blank">
        Government Digital Service
      </a>
      . The Marketplace is an interface between public-sector buyers and private-sector suppliers.
      Buyers can get off-the-shelf cloud commodity products (like{' '}
      <a
        href="https://www.digitalmarketplace.service.gov.uk/g-cloud/search?q=amazon+web+services+cloud+hosting"
        target="_blank"
      >
        AWS services
      </a>{' '}
      or{' '}
      <a
        href="https://www.digitalmarketplace.service.gov.uk/g-cloud/search?q=cyber+digital+cloud"
        target="_blank"
      >
        whatever
      </a>
      ), as well as put out{' '}
      <a
        href="https://www.digitalmarketplace.service.gov.uk/digital-outcomes-and-specialists/opportunities"
        target="_blank"
      >
        work proposals
      </a>{' '}
      for suppliers to bid on.
    </p>
    <p>
      It’s run as a handful of chatty Flask apps, it’s indexed by elasticsearch, it’s refined
      through constant feedback, and it’s driven by user needs.
    </p>
    <p>
      Working on the Digital Marketplace meant making lots of friends on a wicked-cool team,
      learning loads about building kickass digital services, and doing my bit to push forward an
      exciting organisational change.
    </p>
  </Post>
)

export default WorkDM
