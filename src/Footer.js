import React from 'react'
import { ImGithub } from 'react-icons/im';
import "./footer.css"

function Footer({ address }) {
  return (
    <footer className="footer">
      <ul>
        {address.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="footerGit">
        <a
          href="https://github.com/hadipournigjeh"
          target="_blank"
          rel="noreferrer"
        >
          <ImGithub className="imgGit" size={28} />
        </a>
        <a
          className="aTag"
          href="https://github.com/bow-rr"
          target="_blank"
          rel="noreferrer"
        >
          : bow-rr
        </a>
      </div>
    </footer>
  );
}

export default Footer;