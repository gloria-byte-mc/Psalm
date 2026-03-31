import React from 'react'
import '../styles/why-psalm.css'

const WhyPsalm = () => {
  return (
   <>

   <div className='why-div'>

    <p className='why-p'>Why Psalm</p>
    <h2>A platform built for faith</h2>

    <div className='why-boxes'>

      <div className='box1'>

      <span class="feature-icon">✍🏽</span>
      <h3 class="feature-title">Write & Share</h3>
      <p class="feature-desc">Create a free account and publish your testimony, devotional, or faith story in minutes. Reach believers around the world.</p>

      </div>

      <div className='box1'>

      <span class="feature-icon">🕊️</span>
      <h3 class="feature-title">Curated & Safe</h3>
      <p class="feature-desc">Stories are reviewed and curated in a spirit of edification. A community grounded in grace, truth, and love.</p>

      </div>

      <div className='box1'>

        <span class="feature-icon">🙏🏽</span>
      <h3 class="feature-title">Pray & Connect</h3>
      <p class="feature-desc">Leave prayer notes, follow writers whose journeys inspire you, and build meaningful connections in faith.</p>

      </div>

    </div>

   </div>
   
   </>
  )
}

export default WhyPsalm