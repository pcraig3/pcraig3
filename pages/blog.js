import Layout from '../components/layout'

export default () => (
  <Layout h1="blog post">
    <h1>Digital Marketplace . GOV.UK</h1>
    <h2>Making it easier to buy better stuff</h2>
    <p>
      Since March 2015, I’ve been part of a multidisciplinary team building out
      the <a href="#">Digital Marketplace</a> for the{' '}
      <a href="#">Government Digital Service</a>. The marketplace is an
      interface between public sector buyers and private sector suppliers —
      buyers can buy off-the-shelf cloud commodity products (like AWS services
      or whatever else), as well as put out work proposals for suppliers to bid
      on. It’s run as a handful of chatty Flask apps, it’s stored in Postgres,
      it’s indexed by elasticsearch, it’s hosted on AWS, it’s refined through
      user research, and it’s driven by user needs.
    </p>

    <p>
      It’s hard to take much credit for any particular thing, but, for me,
      working on the Digital Marketplace has meant fitting into an already
      wicked-cool team, learning loads about modern web development, and doing
      my bit to push forward an exciting organisational change.
    </p>
  </Layout>
)
