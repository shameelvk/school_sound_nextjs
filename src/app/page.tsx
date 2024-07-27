import React from 'react'
import Home from './components/Home/Home'
import Packages from './components/Packages/Packages'
import Newsletter from './components/NewsLetter/NewsLetter'
import Footer from './components/Footer/Footer'
import VideoLive from './components/VideoLive/videoLive'
import ApprodablePackage from './components/ApprodablePackage/ApprodablePackage'
import Team from './components/Team/Team'

function Page() {
  return (
    <div>
      <Home/>
      <Packages/>
      <VideoLive/>
      <ApprodablePackage/>
      <Team/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Page