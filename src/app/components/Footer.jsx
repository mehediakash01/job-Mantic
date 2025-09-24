import React from 'react';

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base text-base-content p-10">
      <aside className="flex flex-col gap-2 items-start">
        <img src="/images/Jobmantic.png" alt="Jobmantic Logo" className="w-32 mb-4" />
        <h1 className="font-bold text-lg">Features</h1>
        <a className="link link-hover">AI Resume</a>
        <a className="link link-hover">AI Coverletter</a>
        <a className="link link-hover">Pricing</a>
        <a className="link link-hover">Career</a>
        <a className="link link-hover">Organization</a>
        <a className="link link-hover">Outplacement</a>
      </aside>

      <nav className="flex flex-col gap-2 items-start mt-12">
        <h6 className="font-bold text-lg">Blog</h6>
        <a className="link link-hover">Is Jobright Legit?</a>
        <a className="link link-hover">Success Stories from Jobright Users</a>
        <a className="link link-hover">What Top AI Companies Are Looking For</a>
        <a className="link link-hover">Jobright AI Agent Launch</a>
      </nav>

      <nav className="flex flex-col gap-2 items-start mt-12">
        <h6 className="font-bold text-lg">Related Tools</h6>
        <a className="link link-hover">AI Job Assistant</a>
        <a className="link link-hover">AI Cover Letter Generator</a>
        <a className="link link-hover">AI Resume Helper</a>
        <a className="link link-hover">AI Job Tracker</a>
      </nav>

      <nav className="flex flex-col gap-2 items-start">
        <div className="flex gap-3 mb-4">
          <img src="/images/linkedin.svg.png" alt="LinkedIn" className="w-6 h-6" />
          <img src="/images/insta.png" alt="Instagram" className="w-6 h-6" />
          <img src="/images/tiktok.png" alt="TikTok" className="w-6 h-6" />
          <img src="/images/x.png" alt="Twitter/X" className="w-6 h-6" />
        </div>
        <h6 className="font-bold text-lg">Information</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Terms of Service</a>
      </nav>
    </footer>
  );
};

export default Footer;
