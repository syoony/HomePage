
import { Expert, Schedule, ServiceItem } from './types';

export const EXPERTS: Expert[] = [
  { field: '행정', name: '송치영', affiliation: '前 대전시 과학경제국장' },
  { field: '법률', name: '송승섭 변호사', affiliation: '법무법인 유앤아이' },
  { field: '노무', name: '문중원 대표노무사', affiliation: '중원노무법인' },
  { field: '변리/IP', name: '정성태 변리사', affiliation: '남양특허법률사무소' },
  { field: '세무', name: '김영찬 대표세무사', affiliation: '세무법인 텍스토리' },
  { field: '회계', name: '박원규 대표회계사', affiliation: '예교회계법인' },
  { field: '법무', name: '이택진 법무사', affiliation: '법무사 이택진사무소' },
  { field: '심리상담', name: '김은희 대표', affiliation: 'Happiness Revolution, 심리학박사' },
  { field: '사회복지', name: '곽영수 원장', affiliation: '성애노인요양원' },
  { field: '컨설팅', name: '윤성영 교수', affiliation: '목원대학교' },
  { field: '컨설팅', name: '강회일 교수', affiliation: '목원대학교' },
];

export const WEEKLY_SCHEDULE: Schedule[] = [
  { day: '월', amField: '행정', amExpert: '송치영 행정사', pmField: '세무', pmExpert: '김영찬 세무사' },
  { day: '화', amField: '법률', amExpert: '송승섭 변호사', pmField: '사회복지', pmExpert: '곽영수 사회복지사' },
  { day: '수', amField: '법무', amExpert: '이택진 법무사', pmField: '변리', pmExpert: '정성태 변리사' },
  { day: '목', amField: '컨설팅', amExpert: '윤성영 교수', pmField: '노무', pmExpert: '문중원 노무사' },
  { day: '금', amField: '심리상담', amExpert: '김은희 박사', pmField: '컨설팅', pmExpert: '강회일 교수' },
];

export const CORE_SERVICES: ServiceItem[] = [
  { title: 'One-Stop Service', description: '모든 분야 전문가를 한 자리에서', icon: 'fa-cube' },
  { title: 'Expert Mentoring', description: '현업 최고의 전문가 11인', icon: 'fa-user-tie' },
  { title: 'Free Consultation', description: '비용 부담 없는 무료 상담 원칙', icon: 'fa-won-sign' },
  { title: 'Volunteer Spirit', description: '오직 지역 기업의 성장을 위한 헌신', icon: 'fa-handshake-angle' },
];
