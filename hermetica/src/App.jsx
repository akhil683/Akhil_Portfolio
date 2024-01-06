import React, { lazy, Suspense } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'

const About = lazy(() => import('./routes/About'))
const Members = lazy(() => import('./routes/About'))
const Activities = lazy(() => import('./routes/Activities'))
const NoPage = lazy(() => import('./routes/NoPage'))
const Home = lazy(() => import('./routes/Home'))

import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  const navigate = useNavigate();

  return (
    <div>
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
              <Home />
            </Suspense>
          </ErrorBoundary>} 
          />

          <Route path='/activities' element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => navigate('/')}
              >
            <Suspense fallback={<Footer />}>
              <Activities />
            </Suspense>
          </ErrorBoundary>} 
          />

          <Route path='/members' element={
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => navigate('/')}
              >
            <Suspense fallback={<Footer />}>
              <Members />
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
