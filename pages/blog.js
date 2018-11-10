import { css } from 'react-emotion'
import Post from '../components/post'

export default () => (
  <Post
    h1={
      <span>
        GOV.UK<br />Digital Marketplace
      </span>
    }
    h2="Making it easier to buy better stuff"
    imgSrc={require('../img/dm.png')}
  >
    <p>
      Between 2015 and 2017, I was part of the high-performing multidisciplinary
      team building out the <a href="#">Digital Marketplace</a> for the{' '}
      <a href="#">Government Digital Service</a>. The Marketplace is an
      interface between public sector buyers and private sector suppliers —
      buyers can buy off-the-shelf cloud commodity products (like AWS services
      or whatever else), as well as put out work proposals for suppliers to bid
      on. It’s run as a handful of chatty Flask apps, it’s indexed by
      elasticsearch, it’s hosted on AWS, it’s refined with constant feedback,
      and it’s driven by user needs.
    </p>
    <p>
      Working on the Digital Marketplace meant making lots of friends on a
      wicked-cool team, learning loads about modern web development, and doing
      my bit to push forward an exciting organisational change.
    </p>
  </Post>
)
