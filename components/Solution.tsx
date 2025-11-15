'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCpu, FiTarget, FiActivity, FiUsers, FiAward } from 'react-icons/fi'

const features = [
  {
    icon: FiCpu,
    title: 'AI 맥락적 피드백',
    description: '실시간으로 진행 상태를 판단하고 목표 달성 가능성을 예측해드려요',
  },
  {
    icon: FiTarget,
    title: '유연한 챌린지 시스템',
    description: '하루 실패해도 괜찮아요. 리커버리 데이와 부분 성취 인정으로 지속 가능해요',
  },
  {
    icon: FiActivity,
    title: '러닝 기록 및 추적',
    description: 'GPS 기반 정확한 트래킹과 상세한 통계로 성장을 확인하세요',
  },
  {
    icon: FiUsers,
    title: '팀 챌린지 & 실시간 매칭',
    description: '혼자 달리지 마세요. 함께 달릴 동료를 찾고 팀으로 목표를 달성하세요',
  },
  {
    icon: FiAward,
    title: '마일스톤 & 레벨 시스템',
    description: '작은 성취도 축하해요. 배지와 레벨업으로 동기부여를 받으세요',
  },
]

export default function Solution() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            RunMate의 해결책
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            우리 제품은 <span className="font-semibold text-primary">작심삼일로 러닝을 포기하는 직장인들</span>이{' '}
            <span className="font-semibold text-primary">퇴근 후 혼자 동기부여를 찾기 어려운 상황</span>에서{' '}
            <span className="font-semibold text-primary">단순히 기록만 보여주는 기존 러닝 앱</span>보다{' '}
            <span className="font-semibold text-primary">실시간으로 "지금 잘하고 있다"는 확신과 함께 달릴 동료를 매칭해주어</span>{' '}
            더 잘 <span className="font-semibold text-primary">꾸준히 러닝 습관을 만들 수 있도록</span> 해결합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-primary mb-4">
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

