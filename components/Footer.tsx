'use client'

import { FiGithub, FiMail, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">RunMate</h3>
            <p className="text-gray-400">
              작심삼일로 끝나는 러닝을 평생 습관으로 만드는 AI 동반자
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">링크</h4>
            <ul className="space-y-2">
              <li>
                <a href="#problem" className="hover:text-white transition-colors">
                  문제
                </a>
              </li>
              <li>
                <a href="#solution" className="hover:text-white transition-colors">
                  해결책
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  기능
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-white transition-colors">
                  로드맵
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">연락처</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href="mailto:contact@runmate.app"
                className="hover:text-white transition-colors"
                aria-label="Email"
              >
                <FiMail className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 RunMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

