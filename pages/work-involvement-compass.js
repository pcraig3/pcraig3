import Post from '../components/post'

const WorkIC = () => (
  <Post
    h1="The Involvement Compass"
    subheading="Matching Western students to Western’s clubs"
    title="The Involvement Compass — paul craig"
    imgSrc={require('../img/ic.png')}
    imgAlt="Screenshot of the former Involvement Compass"
  >
    <p>
      <strong>Update</strong>: the one I built is gone but there’s a new{' '}
      <a href="http://findyourmatch.club/" target="_blank">
        clubs quiz
      </a>
      !
    </p>
    <p>
      In the summer of 2013, I built the Involvement Compass: a small app to match Western students
      with on-campus clubs. After completing a quiz, students’ answers were compared to the answers
      given by club administrators, and a list of <em>sympatico</em> clubs was presented back to
      them. It was built using the{' '}
      <a href="https://symfony.com/" target="_blank">
        Symfony
      </a>{' '}
      PHP framework with some{' '}
      <a href="https://github.com/inuitcss" target="_blank" aria-label="Inuit CSS framework">
        InuitCSS
      </a>{' '}
      thrown in for good measure <span aria-hidden="true">📏</span>.
    </p>
    <p>
      It was retired in ~2016, but in fall of 2020 the{' '}
      <a href="http://findyourmatch.club/" target="_blank">
        Clubs Quiz
      </a>{' '}
      was relaunched to enormous fanfare. The technology stack and UI are totally redone but the
      questions themselves are verbatim those which I wrote initially.
    </p>
    <p>
      The quiz formerly known as the Involvement Compass was a success. It looked good, it worked
      pretty well, and it was a useful intro to the many campus clubs available to incoming
      students. The re-launched quiz simplifies the journey but preserves the core experience,
      ultimately meeting the same need of helping new students orient themselves on their new
      campus.
    </p>
  </Post>
)

export default WorkIC
