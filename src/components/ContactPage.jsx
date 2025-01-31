import React from 'react';

// Import logo
import emailLogo from '/public/mav.png';
import whatsappLogo from '/public/mav.png';
import addressLogo from '/public/mav.png';
import facebookLogo from '/public/mav.png';
import instagramLogo from '/public/mav.png';
import twitterLogo from '/public/mav.png';

const ContactPage = () => {
  const contactItems = [
    {
      logo: emailLogo,
      label: 'Email: example@email.com',
      link: 'mailto:example@email.com',
    },
    {
      logo: whatsappLogo,
      label: 'WhatsApp: +123456789',
      link: 'https://wa.me/123456789',
    },
    {
      logo: addressLogo,
      label: 'Address: 123 Street Name, City',
      link: 'https://www.google.com/maps?q=123+Street+Name,+City',
    },
  ];

  const socialMediaLinks = [
    {
      logo: facebookLogo,
      label: 'Facebook',
      link: 'https://www.facebook.com/yourprofile',
    },
    {
      logo: instagramLogo,
      label: 'Instagram',
      link: 'https://www.instagram.com/yourprofile',
    },
    {
      logo: twitterLogo,
      label: 'Twitter',
      link: 'https://www.twitter.com/yourprofile',
    },
  ];

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      {contactItems.map((item, index) => (
        <div key={index} className="contact-item">
          <img src={item.logo} alt={`${item.label} logo`} className="contact-logo" />
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="contact-link">
            {item.label}
          </a>
        </div>
      ))}

      <div className="social-media">
        {socialMediaLinks.map((social, index) => (
          <div key={index} className="contact-item">
            <img src={social.logo} alt={`${social.label} logo`} className="contact-logo" />
            <a href={social.link} target="_blank" rel="noopener noreferrer" className="contact-link">
              {social.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
