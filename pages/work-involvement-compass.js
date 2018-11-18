import Post from '../components/post'

export default () => (
  <Post
    h1="The Involvement Compass"
    subheading="Matching Western students to Western’s clubs"
    title="The Involvement Compass — paul craig"
    imgSrc={require('../img/ic.png')}
    imgAlt="Screenshot of the former Involvement Compass"
  >
    <p>
      In the summer of 2013, I wrote a small app to match Western students with
      on-campus clubs. After completing a quiz, students’ answers were compared
      to the answers given by club administrators, and a list of{' '}
      <em>sympatico</em> clubs was presented back to them. It was built using
      the{' '}
      <a href="https://symfony.com/" target="_blank">
        Symfony
      </a>{' '}
      PHP framework with some{' '}
      <a
        href="https://github.com/inuitcss"
        target="_blank"
        aria-label="Inuit CSS framework"
      >
        InuitCSS
      </a>{' '}
      thrown in for good measure.
    </p>
    <p>
      It’s since been retired, which is fair enough given the relatively
      carefree approach to security patches over the years.
    </p>
    <p>
      But, while it existed, the Involvement Compass was a success. It looked
      pretty good, it worked well enough, and it was a useful intro to the many
      campus clubs available to incoming students.
    </p>
  </Post>
)
