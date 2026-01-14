
import React, { useState } from 'react';
import { EXPERTS, WEEKLY_SCHEDULE, CORE_SERVICES } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 부드러운 스크롤 이동 함수
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80; // 헤더 높이만큼 오프셋 설정
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false); // 모바일 메뉴 닫기
  };

  // 로고 컴포넌트
  const Logo = ({ className = "" }: { className?: string }) => (
    <div 
      className={`flex items-center cursor-pointer ${className}`} 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <img 
        src="https://r.jina.ai/i/05e0ec9a4891404e9c735f4929a039da" 
        alt="사단법인 대전기업경제진흥원 로고" 
        className="h-10 md:h-14 w-auto object-contain brightness-0 invert"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent && !parent.querySelector('.fallback-logo')) {
            const fallback = document.createElement('div');
            fallback.className = 'fallback-logo flex flex-col font-bold text-[#4facfe]';
            fallback.innerHTML = '<span class="text-xs">사단법인</span><span class="text-lg">대전기업경제진흥원</span>';
            parent.appendChild(fallback);
          }
        }}
      />
    </div>
  );

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
    const baseClass = mobile 
      ? "flex flex-col space-y-4 font-medium text-gray-300 p-6" 
      : "hidden md:flex space-x-8 font-medium text-gray-300 items-center";
    
    return (
      <nav className={baseClass}>
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-[#4facfe] transition-colors flex items-center gap-1">
          <i className="fa-solid fa-house text-sm"></i> 홈
        </a>
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-[#4facfe] transition-colors">진흥원 소개</a>
        <a href="#experts" onClick={(e) => scrollToSection(e, 'experts')} className="hover:text-[#4facfe] transition-colors">전문가 그룹</a>
        <a href="#schedule" onClick={(e) => scrollToSection(e, 'schedule')} className="hover:text-[#4facfe] transition-colors">상담 일정</a>
        <a href="#reservation" onClick={(e) => scrollToSection(e, 'reservation')} className="hover:text-[#4facfe] transition-colors">상담 예약</a>
      </nav>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050a14] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a1128]/80 backdrop-blur-md shadow-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <Logo />
          
          {/* Desktop Nav */}
          <NavLinks />

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white focus:outline-none p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a1128] border-t border-white/10 animate-fadeIn absolute w-full left-0 shadow-2xl">
            <NavLinks mobile />
          </div>
        )}
      </header>

      <main id="home">
        {/* Hero Section */}
        <section className="relative bg-[#050a14] py-24 overflow-hidden border-b border-white/5">
          <div className="absolute top-0 right-0 opacity-20 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
            <svg width="800" height="800" viewBox="0 0 800 800">
              <path d="M0,400 Q200,100 800,400 T1600,400" fill="none" stroke="#4facfe" strokeWidth="2" />
              <path d="M0,500 Q200,200 800,500 T1600,500" fill="none" stroke="#00f2fe" strokeWidth="1" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-block px-4 py-1 rounded-full border border-[#4facfe]/30 text-[#4facfe] text-xs font-bold mb-6 tracking-widest uppercase">
               <i className="fa-solid fa-chart-line mr-2"></i> Business Growth Partner
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.4] md:leading-[1.2] tracking-tight">
              <span className="text-white block">대전 중소기업의 성장을 위한</span>
              <span className="text-[#4facfe] block mt-2">가장 든든한 파트너</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              법률, 세무, 노무, 특허 등 복잡한 기업 경영의 어려움을<br/> 전문가들과 함께 해결하세요.<br/>
              여러분의 성공을 지원하는 <span className="text-white font-medium">대전기업경제진흥원</span>입니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#reservation" 
                onClick={(e) => scrollToSection(e, 'reservation')}
                className="bg-[#4facfe] text-[#050a14] px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(79,172,254,0.4)] hover:bg-[#00f2fe] transition-all flex items-center justify-center gap-2"
              >
                무료 상담 예약하기 <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a 
                href="#schedule" 
                onClick={(e) => scrollToSection(e, 'schedule')}
                className="bg-transparent text-white border-2 border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all text-center"
              >
                상담 일정 확인
              </a>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-20 bg-[#050a14]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">대표님, 이런 고민 혼자 하고 계셨나요?</h2>
              <div className="w-16 h-1 bg-[#4facfe] mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-12">
              {[
                { icon: 'fa-file-signature', text: '까다로운 법률 계약 검토' },
                { icon: 'fa-lightbulb', text: '어려운 특허 및 지식재산권 확보' },
                { icon: 'fa-calculator', text: '복잡한 세무·회계 처리 문제' },
                { icon: 'fa-users-gear', text: '달라지는 노무 규정과 직원 관리' },
                { icon: 'fa-brain', text: '스트레스 관리 및 정서적 안정' },
                { icon: 'fa-circle-question', text: '정부 지원사업, 시작의 막막함' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#0e1629] hover:bg-[#16213e] hover:shadow-[0_0_30px_rgba(79,172,254,0.15)] transition-all border border-white/5 hover:border-[#4facfe]/30 group">
                  <div className="w-16 h-16 rounded-full bg-[#4facfe]/10 flex items-center justify-center mb-4 text-[#4facfe] text-2xl group-hover:scale-110 transition-transform">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <p className="text-sm font-bold text-gray-300 leading-tight">{item.text}</p>
                </div>
              ))}
            </div>
            
            <p className="text-center text-gray-400 text-lg leading-relaxed">
              직원 10명 미만의 중소기업 대부분이 전담팀 없이 <br className="md:hidden" />
              <span className="font-bold text-white">이러한 문제들을 모두 직접 해결하고 있습니다.</span>
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section id="about" className="py-20 bg-[#0a1128] scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="bg-[#0e1629] rounded-3xl p-8 md:p-16 shadow-2xl border border-white/5">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <h3 className="text-xl font-bold text-[#4facfe] mb-2 uppercase tracking-wider">Solution</h3>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    기업의 모든 문제를 한 곳에서 해결하는 
                    <span className="text-[#4facfe] block">원스톱 솔루션 플랫폼</span>
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    대전 지역 기업인과 근로자를 위해 변호사, 변리사, 회계사 등 <br />
                    각 분야 최고 전문가 11명이 자발적으로 모여 기업 운영 전반에 걸친 
                    애로사항을 해결해주는 <strong className="text-white">무료 전문 상담 기구</strong>입니다.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {CORE_SERVICES.map((service, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-[#16213e] border border-white/5">
                        <div className="mt-1 text-[#4facfe] text-xl">
                          <i className={`fa-solid ${service.icon}`}></i>
                        </div>
                        <div>
                          <h4 className="font-bold text-white">{service.title}</h4>
                          <p className="text-sm text-gray-400">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-md w-full h-48 object-cover mt-8 hover:scale-105 transition-transform duration-500" alt="Office" />
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-md w-full h-48 object-cover hover:scale-105 transition-transform duration-500" alt="Meeting" />
                  <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-md w-full h-48 object-cover hover:scale-105 transition-transform duration-500" alt="Support" />
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80" className="rounded-2xl shadow-md w-full h-48 object-cover mt-[-32px] hover:scale-105 transition-transform duration-500" alt="Consulting" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leader Profile */}
        <section className="py-20 bg-[#050a14] overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-[#0e1629] rounded-3xl p-8 md:p-12 relative border border-white/5">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#4facfe]/20 shadow-[0_0_30px_rgba(79,172,254,0.2)] flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80" alt="송치영 단장" className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <div className="mb-4">
                  <h3 className="text-[#4facfe] font-bold mb-1 uppercase tracking-widest text-sm">대전 경제 행정 전문가</h3>
                  <h2 className="text-3xl font-bold text-white">송치영 원장</h2>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start gap-2">
                    <span className="bg-[#4facfe] text-[#050a14] text-[10px] px-2 py-0.5 rounded mt-1 font-bold">現</span>
                    <p className="text-gray-300 font-medium">(사)대전ICT산업협회 기업지원단장</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded mt-1 font-bold">前</span>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• 대전광역시 과학경제국장</li>
                      <li>• 대전광역시 교통건설국장</li>
                      <li>• 대전광역시 신성장산업과장</li>
                      <li>• 목원대학교 산학협력단 특임교수</li>
                    </ul>
                  </div>
                </div>
                <blockquote className="border-l-4 border-[#4facfe] pl-4 py-2 italic text-gray-300 font-medium">
                  "기업이 성장해야 지역경제가 살아납니다. 기업이 한목소리를 낼 수 있도록 돕겠습니다."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Experts Grid */}
        <section id="experts" className="py-20 bg-[#0a1128] scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">당신의 든든한 멘토, 11인의 전문가 그룹</h2>
              <p className="text-gray-400">각 분야 전문가들이 매주 시간을 내어 기업 상담에 직접 참여하고 있습니다.</p>
              <div className="w-20 h-1 bg-[#4facfe] mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {EXPERTS.map((expert, idx) => (
                <div key={idx} className="bg-[#0e1629] p-6 rounded-2xl shadow-sm hover:shadow-[0_0_20px_rgba(79,172,254,0.1)] transition-all border border-white/5 flex flex-col items-center text-center group">
                  <span className="text-xs font-bold text-[#4facfe] bg-[#4facfe]/10 px-3 py-1 rounded-full mb-3 group-hover:bg-[#4facfe] group-hover:text-[#050a14] transition-colors">{expert.field}</span>
                  <h4 className="text-lg font-bold text-white mb-1">{expert.name}</h4>
                  <p className="text-sm text-gray-500">{expert.affiliation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section id="schedule" className="py-20 bg-[#050a14] scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">요일별 전문 상담 분야 안내</h2>
                <p className="text-gray-500 italic">상담 시간: 10:00 ~ 13:00 (오전), 14:00 ~ 17:00 (오후)</p>
              </div>

              <div className="overflow-x-auto bg-[#0e1629] rounded-3xl shadow-2xl border border-white/10">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-[#16213e] text-white">
                      <th className="px-6 py-4 font-bold text-center w-24">요일</th>
                      <th className="px-6 py-4 font-bold">시간 (Time)</th>
                      <th className="px-6 py-4 font-bold">분야 (Field)</th>
                      <th className="px-6 py-4 font-bold">상담 전문가 (Expert)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {WEEKLY_SCHEDULE.map((s, idx) => (
                      <React.Fragment key={idx}>
                        <tr className="hover:bg-white/5 transition-colors">
                          <td rowSpan={2} className="px-6 py-4 text-center font-bold text-[#4facfe] bg-white/5 border-r border-white/10 text-lg">{s.day}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">10:00~13:00</td>
                          <td className="px-6 py-4 font-bold text-[#4facfe]">{s.amField}</td>
                          <td className="px-6 py-4 text-gray-300">{s.amExpert}</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4 text-sm text-gray-500">14:00~17:00</td>
                          <td className="px-6 py-4 font-bold text-[#4facfe]">{s.pmField}</td>
                          <td className="px-6 py-4 text-gray-300">{s.pmExpert}</td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-center text-sm text-gray-500">* 상담 일정은 여건에 따라 변동될 수 있으니 반드시 사전 예약 후 방문해주시기 바랍니다.</p>
            </div>
          </div>
        </section>

        {/* Future Vision Section */}
        <section className="py-20 bg-[#0a1128] text-white overflow-hidden relative border-y border-white/5">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <circle cx="10" cy="10" r="20" fill="#4facfe" />
              <circle cx="90" cy="90" r="30" fill="#00f2fe" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-relaxed">상담을 넘어, '함께 성장하는 미래 공동체'를 향해</h2>
              <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
                대전기업경제진흥원은 단편적 지원을 넘어, 지역 기업 생태계 전반에 실질적인 <br className="hidden md:block" />
                도움을 주는 종합 지원 플랫폼으로 발전해 나가겠습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { title: '찾아가는 현장 상담', desc: '전문가의 기업 현장 방문 상담 시행', icon: 'fa-person-walking' },
                { title: '국비 확보 지원', desc: '정부 공모사업 제안서 작성 및 발표 컨설팅', icon: 'fa-file-invoice-dollar' },
                { title: '판로 확대 지원', desc: '조달청 우수(혁신) 제품 등록 컨설팅', icon: 'fa-cart-shopping' },
                { title: '역량 강화 교육', desc: '노무, 세무, 회계, AI 등 최신 트렌드 특강', icon: 'fa-graduation-cap' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#4facfe]/10 flex items-center justify-center mb-6 text-2xl border border-[#4facfe]/20 text-[#4facfe]">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reservation Info */}
        <section id="reservation" className="py-20 bg-[#050a14] scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-[#0e1629] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/5">
              <div className="md:w-1/3 bg-[#0a1128] text-white p-10 border-r border-white/5">
                <h2 className="text-2xl font-bold mb-8 text-[#4facfe]">상담 예약 안내</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-[#4facfe]/10 rounded-full flex items-center justify-center flex-shrink-0 text-[#4facfe]">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1 tracking-widest">상담 전화</p>
                      <p className="text-xl font-bold">042-864-5680</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-[#4facfe]/10 rounded-full flex items-center justify-center flex-shrink-0 text-[#4facfe]">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1 tracking-widest">상담 장소</p>
                      <p className="text-sm font-medium text-gray-300">대전정보문화산업진흥원 B동 301호</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-[#4facfe]/10 rounded-full flex items-center justify-center flex-shrink-0 text-[#4facfe]">
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1 tracking-widest">운영 시간</p>
                      <p className="text-sm font-medium text-gray-300">매주 월요일 ~ 금요일, 10:00 - 17:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3 p-10 bg-[#0e1629]">
                <h3 className="text-2xl font-bold text-white mb-8">3단계로 간편하게 예약하세요</h3>
                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#4facfe]/10 text-[#4facfe] rounded-full flex items-center justify-center font-black text-xl flex-shrink-0 border border-[#4facfe]/20">1</div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">상담 대상 확인</h4>
                      <p className="text-gray-400">대전지역 소재 기업인 및 근로자 누구나 가능합니다.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#4facfe]/10 text-[#4facfe] rounded-full flex items-center justify-center font-black text-xl flex-shrink-0 border border-[#4facfe]/20">2</div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">예약 신청</h4>
                      <p className="text-gray-400">전화 또는 홈페이지(d-ict.org)를 통해 사전 예약을 진행합니다.</p>
                      <p className="text-sm text-yellow-500 font-bold mt-1">*사전 예약 필수*</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#4facfe]/10 text-[#4facfe] rounded-full flex items-center justify-center font-black text-xl flex-shrink-0 border border-[#4facfe]/20">3</div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">상담 진행</h4>
                      <p className="text-gray-400">전문가와 대면 상담을 진행합니다. (비용: 무료, 실비 발생 시 사전 안내)</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 flex justify-center md:justify-start">
                  <a 
                    href="http://d-ict.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#4facfe] text-[#050a14] px-10 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(79,172,254,0.3)] text-center"
                  >
                    온라인 예약 바로가기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Slogan */}
        <section className="py-24 bg-[#050a14] text-center border-t border-white/5">
          <div className="container mx-auto px-4">
            <p className="text-xl md:text-3xl font-bold text-white mb-8 leading-[3.0] tracking-tight">
              기업을 위해 귀찮을 만큼 찾아주십시오. <br />
              대전기업경제진흥원은 항상 당신 곁에서 <br />
              <span className="text-[#4facfe] border-b-2 border-[#4facfe]/30 pb-2">가장 든든한 파트너</span>가 되겠습니다.
            </p>
            <div className="flex justify-center mt-12 opacity-80 hover:opacity-100 transition-opacity">
               <Logo className="scale-125" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a1128] py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <Logo />
            <div className="flex gap-6 text-2xl text-gray-500">
              <a href="#" className="hover:text-[#4facfe] transition-colors"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" className="hover:text-[#4facfe] transition-colors"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="hover:text-[#4facfe] transition-colors"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>
          <div className="text-center md:text-left text-sm text-gray-500 space-y-1">
            <p className="text-gray-400">대전광역시 유성구 대덕대로 512번길 20, 대전정보문화산업진흥원 B동 301호</p>
            <p className="text-gray-400">전화: 042-864-5680 | 이메일: info@d-ict.org</p>
            <p className="mt-8 opacity-50">© 2024 DAEJEON BUSINESS AGENCY. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden sticky bottom-0 left-0 right-0 p-4 bg-[#0a1128]/90 backdrop-blur-md border-t border-white/10 z-40">
        <a href="tel:042-864-5680" className="w-full bg-[#4facfe] text-[#050a14] flex items-center justify-center gap-2 py-4 rounded-full font-bold shadow-[0_0_30px_rgba(79,172,254,0.4)] active:scale-95 transition-all">
          <i className="fa-solid fa-phone"></i> 지금 바로 상담 예약
        </a>
      </div>
    </div>
  );
};

export default App;
