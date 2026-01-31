import React from 'react'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import TrailersSection from '../components/TrailersSection'
import Movies from './Movies'

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <TrailersSection />
      <Movies />
    </>
  )
}

export default Home