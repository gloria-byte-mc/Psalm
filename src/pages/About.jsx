import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/about.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

import { FaCross } from 'react-icons/fa'
import { IoPeopleOutline } from 'react-icons/io5'
import { RiHeartLine } from 'react-icons/ri'
import { TbWorld } from 'react-icons/tb'

const stats = [
  { value: '12,000+', label: 'Testimonies Shared' },
  { value: '180+', label: 'Countries Reached' },
  { value: '54,000+', label: 'Community Members' },
  { value: '3.2M+', label: 'Lives Touched' },
]

const values = [
  {
    icon: <FaCross />,
    title: 'Christ at the Centre',
    desc: 'Every story on Psalm points back to one source. We are not a self-help platform — we are a testimony to the living God who moves in human lives.',
  },
  {
    icon: <RiHeartLine />,
    title: 'Truth in Love',
    desc: 'We believe in sharing stories honestly — the struggle, the doubt, the breakthrough. Sanitised faith helps no one. Raw, redeemed truth changes everything.',
  },
  {
    icon: <TbWorld />,
    title: 'One Body, Many Voices',
    desc: 'From Nairobi to New York, from villages to cities — the Church is global. Psalm exists to amplify every voice, in every language, from every background.',
  },
  {
    icon: <IoPeopleOutline />,
    title: 'Community Over Platform',
    desc: 'We are not building an audience. We are building a family. Every reader, every writer, every prayer left on a story is a thread in the same fabric.',
  },
]


const About = () => {


  const navigate = useNavigate()

const handleNavigation = (path) => {
  navigate(path)
}

  return (
    <>
      {/* ── HERO ── */}
      <div className="about-hero">
        <Navbar />
        <div className="about-hero-content">
          <p className="about-label">Who We Are</p>
          <h1 className="about-hero-title">
            Built on <span>testimony.</span>
            <br />Fuelled by <span>faith.</span>
          </h1>
          <p className="about-hero-sub">
            Psalm was born from a simple conviction — that every believer carries a story powerful enough to shift someone else's eternity.
          </p>
        </div>
        <div className="about-cross">✝</div>
      </div>

      {/* ── MISSION ── */}
      <section className="about-mission">
        <div className="about-mission-inner">
          <div className="about-mission-left">
            <p className="section-label">Our Mission</p>
            <h2>To make testimony <em>the most powerful thing</em> on the internet.</h2>
          </div>
          <div className="about-mission-right">
            <p>
              In a world drowning in noise, Psalm carves out sacred space — a place where the scroll stops, where a stranger's breakthrough becomes your anchor, where God's faithfulness is documented and shared without shame.
            </p>
            <p>
              We exist so that no testimony goes unheard. So that the person at the edge of giving up finds the story that pulls them back. So that faith is not just proclaimed from pulpits but lived, written, and passed on by ordinary people.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="about-stats">
        <p className="section-label">The Movement So Far</p>
        <div className="about-stats-grid">
          {stats.map((s, i) => (
            <div className="stat-card" key={i}>
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="about-story">
        <div className="about-story-inner">
          <div className="about-story-strip" />
          <div className="about-story-content">
            <p className="section-label">How Psalm Started</p>
            <h2>It started with one story nobody thought was worth telling.</h2>
            <p>
              In 2023, a university student in Nairobi typed out her testimony on her phone — how God had pulled her back from the edge of ending her life. She had nowhere to post it that felt right. Social media felt performative. Church felt too formal. She just wanted someone to read it.
            </p>
            <p>
              A developer friend read it and wept. He built her a page. Then ten more people wanted one. Then a hundred. Psalm was never planned — it was answered prayer.
            </p>
            <p>
              Today Psalm is home to thousands of stories from believers across the world. The student still writes here. So does her developer friend. And so can you.
            </p>
            <button className="about-story-btn">Start Writing</button>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="about-values">
        <p className="section-label">What We Believe</p>
        <h2 className="about-values-title">Our Values</h2>
        <div className="about-values-grid">
          {values.map((v, i) => (
            <div className="value-card" key={i}>
              <span className="value-icon">{v.icon}</span>
              <h3 className="value-title">{v.title}</h3>
              <p className="value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="about-cta">
        <p className="section-label">Join the Movement</p>
        <h2>Your testimony is <em>someone's miracle.</em></h2>
        <p>Don't let it stay inside you.</p>
        <div className="about-cta-actions">
          <button className="about-btn-primary">Start Writing</button>
          <button className="about-btn-ghost"  onClick={()=> handleNavigation('/stories')}>Read Stories →</button>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About