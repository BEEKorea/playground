// Scroll Animation with Intersection Observer
// 가볍고 성능 좋은 스크롤 애니메이션

export function initScrollAnimations() {
  // Intersection Observer 설정
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // 요소의 10%가 보이면 트리거
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 요소가 화면에 나타나면 'visible' 클래스 추가
        entry.target.classList.add('visible');

        // 한 번만 애니메이션 실행 (재사용 안 함)
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 모든 애니메이션 대상 요소 관찰
  const animatedElements = document.querySelectorAll(
    '.fade-in-up, .fade-in-left, .fade-in-right, .fade-in, .scale-in'
  );

  animatedElements.forEach(el => observer.observe(el));
}

// Astro View Transitions 지원
document.addEventListener('astro:page-load', () => {
  initScrollAnimations();
});

// 일반 페이지 로드
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
  initScrollAnimations();
}
