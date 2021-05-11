import Link from 'next/link'
import Post from '../components/post'

const WorkCVT = () => (
  <Post
    h1="canada-vaccine-tracker.ca"
    subheading="Graphing vaccines over time"
    title="canada-vaccine-tracker.ca — paul craig"
    imgSrc={require('../img/vacs.png')}
    imgAlt="Screenshot of canada-vaccine-tracker.ca"
    linkText="Percentage of Canadians who have received vaccines"
    href="https://canada-vaccine-tracker.ca"
  >
    <p>
      In January 2021, I designed, built, and shipped{' '}
      <a href="https://canada-vaccine-tracker.ca" target="_blank">
        canada-vaccine-tracker.ca
      </a>
      , an auto-updating progress tracker that gives you the headline figure and then gets out of
      the way.
    </p>
    <p>
      During January’s provincial lockdown, vaccines were a hot news item but still scarce in
      Canada, meanwhile the government was predicting{' '}
      <a
        href="https://www.ctvnews.ca/health/coronavirus/14-5m-canadians-to-be-immunized-by-june-updated-vaccination-timeline-shows-1.5314048"
        target="_blank"
      >
        15-25 million people vaccinated in a few months
      </a>{' '}
      (effectively, half of Canadians halfway through the year).{' '}
      <a href="https://canada-vaccine-tracker.ca/methodology" target="_blank">
        The core idea here
      </a>{' '}
      was to compare the progress of vaccines vs. the progress of the year.
    </p>
    <p>
      The site is built in{' '}
      <a href="https://nextjs.org" target="_blank">
        Next.js
      </a>
      , and pulls its data from the{' '}
      <a href="https://api.covid19tracker.ca/docs/1.0/overview" target="_blank">
        COVID19Tracker.ca API
      </a>
      . It was my first time using graphs extensively since{' '}
      <Link href="/work-govuk-performance-platform">
        <a>the Performance Platform</a>
      </Link>
      , and it was fun thinking through how to build them with accessibility in mind. It was also
      fun to get away from the{' '}
      <a href="https://www.canada.ca/en/government/about/design-system.html" target="_blank">
        Canada.ca Design System
      </a>{' '}
      and{' '}
      <a href="https://fonts.google.com/specimen/Gothic+A1" target="_blank">
        the pcraig3.ca design language
      </a>{' '}
      for a few weeks (although arguably it’s a dialect).
    </p>
    <p>
      The good outcome here was building an app that works pretty well and shipping it in under a
      week. Sometimes government technology groups want to spend 12 months deciding that 10-year old
      tech is too cutting-edge to use just yet, so it’s nice to just{' '}
      <a href="https://github.com/pcraig3/vacs" target="_blank">
        push some code
      </a>
      , share it with friends, and get some minor plaudits on Twitter. Sometimes the real treasure
      is{' '}
      <a href="https://twitter.com/sboots/status/1389266340620513280?s=20" target="_blank">
        the 6 likes
      </a>{' '}
      we made along the way. <span aria-hidden="true">✌️❤️</span>
    </p>
  </Post>
)

export default WorkCVT
