'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCpu, FiTarget, FiActivity, FiUsers, FiAward } from 'react-icons/fi'

const features = [
  {
    icon: FiCpu,
    title: 'AI 맥락적 피드백 시스템',
    problem: '"내가 지금 잘하고 있는지" 알 수 없음',
    points: [
      '실시간 진행 상태 판단',
      '목표 달성 가능성 예측',
      '페이스 적정성 판단',
      '개인화된 조언',
    ],
    example: '민준님, 지금 페이스면 10km 목표 달성 가능성 85%예요! 이번 주 3회 뛰신 건 계획보다 1회 많아서 훌륭해요.',
    tech: 'OpenAI GPT-4o-mini',
  },
  {
    icon: FiTarget,
    title: '유연한 챌린지 시스템',
    problem: '하루 실패하면 챌린지 전체 실패',
    points: [
      '주간/월간 목표 설정',
      '리커버리 데이 (월 2회)',
      '부분 성취 인정',
      '단계별 보상 시스템',
    ],
    example: '목표 100km → 실제 40km 달성 시 "목표의 40% 달성!" 배지와 부분 포인트 지급',
    tech: 'Supabase PostgreSQL',
  },
  {
    icon: FiActivity,
    title: '러닝 기록 및 추적',
    problem: '정확한 데이터 추적 필요',
    points: [
      'GPS 기반 트래킹',
      '거리, 시간, 페이스 측정',
      '러닝 히스토리 및 통계',
      '칼로리 소모 계산',
    ],
    example: '모든 러닝 데이터를 자동으로 기록하고 시각화하여 성장을 확인하세요',
    tech: 'Next.js API Routes',
  },
  {
    icon: FiUsers,
    title: '팀 챌린지 & 실시간 매칭',
    problem: '혼자 달리면 3일 만에 포기',
    points: [
      '실시간 크루 매칭 (야간 9시~1시)',
      '팀 챌린지 생성 및 참여',
      '실시간 팀 진행률',
      '팀 응원 메시지',
    ],
    example: '지금 성수동에서 3명이 5km 달리고 있어요! → 크루 참여하기',
    tech: 'Supabase Realtime',
  },
  {
    icon: FiAward,
    title: '마일스톤 & 레벨 시스템',
    problem: '동기부여 부족',
    points: [
      '거리/빈도 마일스톤',
      '레벨 & 경험치 시스템',
      '배지 수집',
      '타이틀 획득',
    ],
    example: '10km → "첫 10km" 배지, 연속 21일 → "습관 형성" 🏆',
    tech: 'Supabase PostgreSQL',
  },
]

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            핵심 기능
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            각 기능이 해결하는 문제와 사용 방법을 자세히 알아보세요
          </p>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isEven = index % 2 === 0
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="text-primary mb-4">
                    <Icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-4">
                    해결하는 문제: {feature.problem}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                        <span className="text-accent mt-1">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-4 mb-4 border-l-4 border-primary">
                    <p className="text-gray-700 dark:text-gray-200 italic">
                      "{feature.example}"
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    기술: <span className="font-mono">{feature.tech}</span>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500 dark:text-gray-400">
                        {feature.title} 데모 영역
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

