import React from 'react'
import './newsletter.css'

const Newsletter = () => {
  return (
    <>
        <div className="newsletter">
            <h1 className="newsletter-titre">Newsletter</h1>
            <div className="newsletter-desc">Get timely updates from your favorite products</div>
            <div className="container-input">
                <input type="text" placeholder='votre email...' className="newsletter-input" />
                <button className="newsletter-btn">Envoyer</button>
            </div>
        </div>
    </>
  )
}

export default Newsletter