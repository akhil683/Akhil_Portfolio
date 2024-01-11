import React, { lazy, Suspense } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'

const About = lazy(() => import('./routes/About'))
const Members = lazy(() => import('./routes/Members'))
const NoPage = lazy(() => import('./routes/NoPage'))
const Home = lazy(() => import('./routes/Home'))
const Projects = lazy(() => import('./routes/Projects'))
const Events = lazy(() => import('./routes/Events'));
const Details = lazy(() => import('./components/Details'));

import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  const navigate = useNavigate();
  const Data = {
    "Project": [
      {
        id: 1,
        name: "Paper from Baggase",
        url: "paper_from_baggase",
        proposedBy: "Akhil",
        Abstract: "ajdsfl asdjf lkasdn lkasd nlkvnasd k",
        Image: 'image',
      },
      {
        id: 2,
        name: "Paper from Baggase",
        url: "paper_from_baggase",
        proposedBy: "Akhil",
        Abstract: "ajdsfl asdjf lkasdn lkasd nlkvnasd k",
        Image: 'image',
      },
      {
        id: 3,
        name: "Paper from Baggase",
        url: "paper_from_baggase",
        proposedBy: "Akhil",
        Abstract: "ajdsfl asdjf lkasdn lkasd nlkvnasd k",
        Image: 'image',
      },
      {
        id: 4,
        name: "Paper from Baggase",
        url: "paper_from_baggase",
        proposedBy: "Akhil",
        Abstract: "ajdsfl asdjf lkasdn lkasd nlkvnasd k",
        Image: 'image',
      },
    ],
    "Event": [
      {
        id: 1,
        name: "asdsome fun Event",
        url: "some_fun_event",
        proposedBy: "Priyanshu",
        Abstract: "somlkasdf alnd flkasndf lkasdn lakdfj",
        Image: "something",
      },
      {
        id: 2,
        name: "sdsome fun Event",
        url: "some_fun_event",
        proposedBy: "Priyanshu",
        Abstract: "somlkasdf alnd flkasndf lkasdn lakdfj",
        Image: "something",
      },
      {
        id: 3,
        name: "some fun Event",
        url: "some_fun_event",
        proposedBy: "Priyanshu",
        Abstract: "somlkasdf alnd flkasndf lkasdn lakdfj",
        Image: "something",
      },
      {
        id: 4,
        name: "some fun Event",
        url: "some_fun_event",
        proposedBy: "Priyanshu",
        Abstract: "somlkasdf alnd flkasndf lkasdn lakdfj",
        Image: "something",
      },

    ],
    "Member": [
        {
          id: 1,
          name: "Abhinav",
          year: "Final Year",
          Position: "Something",
          Instagram: "Instagram",
          LinkedIn: "linked in",
          Image: "Something",
        },
        {
          id: 2,
          name: "Akhil",
          year: "Second Year",
          Position: "Executive Member",
          Instagram: "Instagram",
          LinkedIn: "linked in",
          Image: "Something",
        },
        {
          id: 3,
          name: "Aditya",
          year: "Thrid Year",
          Position: "Club Coordinator",
          Instagram: "Instagram",
          LinkedIn: "linked in",
          Image: "Something",
        },
        {
          id: 4,
          name: "Volunteer",
          year: "First Year",
          Position: "Volunteer",
          Instagram: "Instagram",
          LinkedIn: "linked in",
          Image: "Something",
        }
    ]
  }
  const { Project, Event, Member } = Data;

  return (
    <div className='bg-gradient-to-b from-mainBg to-iconBg'>
      <Header />

      <Routes>
        
          <Route path='/' element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => navigate('/')}
              >
            <Suspense fallback={<Footer />}>
              <Home />
            </Suspense>
          </ErrorBoundary>} 
          />

          <Route path='/about' element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => navigate('/')}
              >
            <Suspense fallback={<Footer />}>
              <About />
            </Suspense>
          </ErrorBoundary>} 
          />

          <Route path='/projects' element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => navigate('/')}
              >
            <Suspense fallback={<Footer />}>
              <Projects Projects={Project} />
            </Suspense>
          </ErrorBoundary>} 
          />

          <Route path='/events' element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => navigate('/')}
              >
            <Suspense fallback={<Footer />}>
              <Events Events={Event} />
            </Suspense>
          </ErrorBoundary>} 
          />
          <Route path='/projects/1' element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => navigate('/')}
              >
            <Suspense fallback={<Footer />}>
              <Details data={Data} />
            </Suspense>
          </ErrorBoundary>} 
          />

          <Route path='/members' element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => navigate('/')}
              >
            <Suspense fallback={<Footer />}>
              <Members Members={Member} />
            </Suspense>
          </ErrorBoundary>} 
          />

          <Route path='*' element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => navigate('/')}
              >
            <Suspense fallback={<Footer />}>
              <NoPage />
            </Suspense>
          </ErrorBoundary>} 
          />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
