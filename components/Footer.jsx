import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-dark-charcoal">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
              ScriptLens
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Visualize the logic. Master the language of the web with our
              visual guides and interactive analogies.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-minion-yellow hover:underline">
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-minion-yellow hover:underline">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-minion-yellow hover:underline">
                  Cheat Sheets
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Community
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-minion-yellow hover:underline">
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-minion-yellow hover:underline">
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-minion-yellow hover:underline">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-minion-yellow hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-minion-yellow hover:underline">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center bg-transparent">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} ScriptLens. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-gray-500 hover:text-minion-yellow transition-colors">
              <Github size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-minion-yellow transition-colors">
              <Twitter size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-minion-yellow transition-colors">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
