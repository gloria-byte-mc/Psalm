{/* 

import React from "react";
import '../styles/testimonies.css'

const stories = [
  {
    id: 1,
    tag: "Redemption",
    title: "From the Darkest Valley: How God Restored My Marriage After Years of Brokenness",
    excerpt:
      "I never thought I'd be writing this. Three years ago, I sat on the floor of an empty apartment, certain that everything I had built was gone forever…",
    author: "Grace Njeri",
    initials: "GN",
    readTime: "12 min read",
    featured: true,
  },
  {
    id: 2,
    tag: "Healing",
    title: "The Doctor Said It Was Impossible",
    excerpt: "When the diagnosis came, I chose to believe a different report…",
    author: "Samuel M.",
    initials: "SM",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 3,
    tag: "Salvation",
    title: "I Found Him at Rock Bottom",
    excerpt: "Addiction had taken everything. But grace found me anyway…",
    author: "Amina A.",
    initials: "AA",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 4,
    tag: "Provision",
    title: "He Provided When I Had Nothing Left",
    excerpt:
      "The rent was overdue and the cupboards were empty. Then came the knock on the door…",
    author: "David K.",
    initials: "DK",
    readTime: "5 min read",
    featured: false,
  },
];

function StoryCard({ story }) {
  return (
    <div className={`story-card ${story.featured ? "featured" : ""}`}>
      <span className="story-tag">{story.tag}</span>
      <h3 className="story-title">{story.title}</h3>
      {story.excerpt && <p className="story-excerpt">{story.excerpt}</p>}
      <div className="story-meta">
        <div className="story-avatar">{story.initials}</div>
        <span className="story-author">
          {story.author} · {story.readTime}
        </span>
      </div>
    </div>
  );
}

export default function Testimonies() {
  return (
    <section className="stories">
      <p className="section-label">Latest Testimonies</p>
      <h2 className="section-title">
        Stories that <em>move</em> hearts
      </h2>
      <div className="stories-grid">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
}

*/}

import React from "react";
import '../styles/testimonies.css'

const stories = [
  {
    id: 1,
    tag: "Redemption",
    title: "From the Darkest Valley: How God Restored My Marriage After Years of Brokenness",
    excerpt:
      "I never thought I'd be writing this. Three years ago, I sat on the floor of an empty apartment, certain that everything I had built was gone forever…",
    author: "Grace Njeri",
    initials: "GN",
    readTime: "12 min read",
    featured: true,
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&q=80",
  },
  {
    id: 2,
    tag: "Healing",
    title: "The Doctor Said It Was Impossible",
    excerpt: "When the diagnosis came, I chose to believe a different report…",
    author: "Samuel M.",
    initials: "SM",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 3,
    tag: "Salvation",
    title: "I Found Him at Rock Bottom",
    excerpt: "Addiction had taken everything. But grace found me anyway…",
    author: "Amina A.",
    initials: "AA",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 4,
    tag: "Provision",
    title: "He Provided When I Had Nothing Left",
    excerpt:
      "The rent was overdue and the cupboards were empty. Then came the knock on the door…",
    author: "David K.",
    initials: "DK",
    readTime: "5 min read",
    featured: false,
  },
];

function StoryCard({ story }) {
  return (
    <div className={`story-card ${story.featured ? "featured" : ""}`}>

      {/* Image shown only on the featured card */}
      {story.featured && story.image && (
        <div
          className="story-image"
          style={{ backgroundImage: `url(${story.image})` }}
        />
      )}

      <div className="story-body">
        <span className="story-tag">{story.tag}</span>
        <h3 className="story-title">{story.title}</h3>
        {story.excerpt && <p className="story-excerpt">{story.excerpt}</p>}
        <div className="story-meta">
          <div className="story-avatar">{story.initials}</div>
          <span className="story-author">
            {story.author} · {story.readTime}
          </span>
        </div>
      </div>

    </div>
  );
}

export default function Testimonies() {
  return (
    <section className="stories">
      <p className="section-label">Latest Testimonies</p>
      <h2 className="section-title">
        Stories that <em>move</em> hearts
      </h2>
      <div className="stories-grid">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
}