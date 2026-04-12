import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/stories-page.css'
import Footer from '../components/Footer'
import StoriesCta from '../components/StoriesCta'
const allStories = [
  {
    id: 1,
    category: 'Redemption',
    title: 'From the Far Country',
    excerpt: 'I spent twelve years chasing everything the world promised — money, status, pleasure. None of it filled the hollow inside my chest. Then one broken night, I came home.',
    author: 'David M.',
    initials: 'DM',
    readTime: '6 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80',
  },
  {
    id: 2,
    category: 'Healing',
    title: 'The Diagnosis That Changed Everything',
    excerpt: 'When the doctor said "stage three", the room went silent. My faith was all I had left — and it turned out to be everything.',
    author: 'Grace A.',
    initials: 'GA',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 3,
    category: 'Salvation',
    title: 'I Heard His Voice at 3 AM',
    excerpt: 'I was not religious. I was not searching. Then one sleepless night, something shifted that I still cannot fully explain — only testify.',
    author: 'James K.',
    initials: 'JK',
    readTime: '4 min read',
    featured: false,
  },
  {
    id: 4,
    category: 'Provision',
    title: 'When the Account Hit Zero',
    excerpt: 'Rent due, fridge empty, job gone. I prayed over an empty table and watched God turn impossibility into abundance.',
    author: 'Ruth N.',
    initials: 'RN',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 5,
    category: 'Redemption',
    title: 'The Prison Cell That Set Me Free',
    excerpt: 'Sentenced at 24, I walked into a cell carrying rage and walked out carrying peace. Grace reached me where no one else could.',
    author: 'Samuel O.',
    initials: 'SO',
    readTime: '8 min read',
    featured: false,
  },
  {
    id: 6,
    category: 'Healing',
    title: 'Learning to Walk Again',
    excerpt: 'The accident left me with no feeling below my knees. The doctors gave me statistics. God gave me a different story.',
    author: 'Miriam W.',
    initials: 'MW',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 7,
    category: 'Salvation',
    title: 'The Atheist Who Ran Out of Arguments',
    excerpt: 'I had a philosophy degree and a sharp tongue for every Christian I met. Then something happened in a small church in Nakuru that silenced all my objections.',
    author: 'Thomas L.',
    initials: 'TL',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 8,
    category: 'Provision',
    title: 'School Fees and a Sunday Morning',
    excerpt: 'I had prayed for months. The fees deadline was Monday. On Sunday evening, a stranger knocked on my door — and that was the start of the miracle.',
    author: 'Esther C.',
    initials: 'EC',
    readTime: '4 min read',
    featured: false,
  },
]

const categories = ['All', 'Redemption', 'Healing', 'Salvation', 'Provision']

const Stories = () => {
  const [activeTab, setActiveTab] = useState('All')

  const filtered = activeTab === 'All'
    ? allStories
    : allStories.filter(s => s.category === activeTab)

  const featured = filtered.find(s => s.featured) || filtered[0]
  const rest = filtered.filter(s => s.id !== featured?.id)

  return (
    <>
      {/* ── HERO ── */}
      <div className="stories-hero">
        <Navbar />
        <div className="stories-hero-content">
          <p className="stories-label">Testimonies &amp; Faith Journeys</p>
          <h1 className="stories-hero-title">
            Stories that <span>move</span>
          </h1>
          <p className="stories-hero-sub">
            Real voices. Real faith. Testimonies from believers across the world who have seen God work in their lives.
          </p>
        </div>

       
      </div>

      {/* ── FILTER TABS ── */}
      <div className="stories-tabs-bar">
        <div className="stories-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── STORY GRID ── */}
      <section className="stories-section">

        {filtered.length === 0 && (
          <p className="no-stories">No stories in this category yet. Be the first to share yours.</p>
        )}

        {featured && (
          <div className="stories-grid">
            {/* Featured Card */}
            <div className="story-card featured">
              {featured.image && (
                <div
                  className="story-image"
                  style={{ backgroundImage: `url('${featured.image}')` }}
                />
              )}
              <div className="story-body">
                <span className="story-tag">{featured.category}</span>
                <h2 className="story-title">{featured.title}</h2>
                <p className="story-excerpt">{featured.excerpt}</p>
                <div className="story-meta">
                  <div className="story-avatar">{featured.initials}</div>
                  <span className="story-author">{featured.author} · {featured.readTime}</span>
                </div>
              </div>
            </div>

            {/* Side Cards */}
            <div className="stories-side">
              {rest.slice(0, 4).map(story => (
                <div className="story-card" key={story.id}>
                  <div className="story-body">
                    <span className="story-tag">{story.category}</span>
                    <h2 className="story-title">{story.title}</h2>
                    <p className="story-excerpt">{story.excerpt}</p>
                    <div className="story-meta">
                      <div className="story-avatar">{story.initials}</div>
                      <span className="story-author">{story.author} · {story.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Extra cards row */}
        {rest.length > 4 && (
          <div className="stories-extra-grid">
            {rest.slice(4).map(story => (
              <div className="story-card" key={story.id}>
                <div className="story-body">
                  <span className="story-tag">{story.category}</span>
                  <h2 className="story-title">{story.title}</h2>
                  <p className="story-excerpt">{story.excerpt}</p>
                  <div className="story-meta">
                    <div className="story-avatar">{story.initials}</div>
                    <span className="story-author">{story.author} · {story.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

       

      </section>
      <StoriesCta/>

      <Footer />
    </>
  )
}

export default Stories