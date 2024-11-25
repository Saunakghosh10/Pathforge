'use client';

import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary mt-16 border-t border-gray-medium">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/roadmaps" className="text-accent hover:text-primary transition-colors">
                  All Roadmaps
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-accent hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-accent hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-accent hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-accent hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-accent hover:text-primary transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-accent hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-accent mb-4">Subscribe to our newsletter for the latest updates</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-background border border-gray-medium focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors"
              >
                <FiTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primary transition-colors"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:contact@pathforge.dev"
                className="text-accent hover:text-primary transition-colors"
              >
                <FiMail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-medium text-center text-accent">
          <p>© {new Date().getFullYear()} PathForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
