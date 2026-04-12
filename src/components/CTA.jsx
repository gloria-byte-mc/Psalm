import React from "react";
import '../styles/cta.css'
import { useNavigate } from "react-router-dom";

export default function CTA() {

  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }                       

  return (
    <section className="cta-section">
      <p className="section-label">Join the Community</p>
      <h2 className="section-title">
        Your story deserves to be <em>heard</em>
      </h2>
      <p className="cta-subtitle">
        Join thousands of believers sharing what God has done in their lives.
      </p>
      <div className="cta-actions">
        <a href="#" className="btn-primary">Create Free Account</a>
        <a className="btn-ghost" onClick={() => handleNavigation('/stories')}>Explore Stories</a>
      </div>
    </section>
  );

}                        