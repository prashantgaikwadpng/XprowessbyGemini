/* ============================================
   XPROWESS - MAIN JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // ---- Preloader ----
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            setTimeout(() => preloader.classList.add('loaded'), 600);
        }
    });

    // ---- Header Scroll Effect ----
    const header = document.querySelector('.header');
    const scrollTop = document.querySelector('.scroll-top');

    window.addEventListener('scroll', () => {
        const y = window.scrollY;
        if (header) header.classList.toggle('scrolled', y > 50);
        if (scrollTop) scrollTop.classList.toggle('visible', y > 500);
    });

    // ---- Scroll to Top ----
    if (scrollTop) {
        scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // ---- Mobile Menu ----
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.nav-mobile');
    const navOverlay = document.querySelector('.nav-overlay');

    function closeMobileMenu() {
        mobileToggle?.classList.remove('active');
        mobileNav?.classList.remove('active');
        navOverlay?.classList.remove('active');
        document.body.style.overflow = '';
    }

    mobileToggle?.addEventListener('click', () => {
        const isOpen = mobileNav.classList.contains('active');
        if (isOpen) {
            closeMobileMenu();
        } else {
            mobileToggle.classList.add('active');
            mobileNav.classList.add('active');
            navOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
    navOverlay?.addEventListener('click', closeMobileMenu);

    // ---- Scroll Animations ----
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    animatedElements.forEach(el => observer.observe(el));

    // ---- Counter Animation ----
    const counters = document.querySelectorAll('[data-counter]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.counter);
                const suffix = el.dataset.suffix || '';
                let current = 0;
                const increment = Math.max(1, Math.floor(target / 60));
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = current + suffix;
                }, 30);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));

    // ---- Smooth Scroll for Anchor Links ----
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                closeMobileMenu();
            }
        });
    });

    // ---- FAQ Accordion ----
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const answer = item.querySelector('.faq-answer');
            const isOpen = item.classList.contains('active');

            // Close all
            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });

            if (!isOpen) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // ---- Particle Canvas ----
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        const count = 60;

        function resize() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        class Particle {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.r = Math.random() * 2 + 0.5;
                this.opacity = Math.random() * 0.3 + 0.1;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 212, 170, ${this.opacity})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < count; i++) particles.push(new Particle());

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(0, 212, 170, ${0.08 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animate);
        }
        animate();
    }

    // ---- Active Nav Link ----
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link, .dropdown-item').forEach(link => {
        const href = link.getAttribute('href');
        if (href && (currentPath.endsWith(href) || (currentPath === '/' && href === 'index.html'))) {
            link.classList.add('active');
        }
    });

    // ---- Hero Video Cycling: plays v2→v3→v4→v5→v6 one by one ----
    const cycleVideos = document.querySelectorAll('.bg-video-cycle');
    if (cycleVideos.length > 1) {
        let currentIdx = 0;

        // Start the first video
        cycleVideos[0].play().catch(() => {});

        function nextVideo() {
            const current = cycleVideos[currentIdx];
            currentIdx = (currentIdx + 1) % cycleVideos.length;
            const next = cycleVideos[currentIdx];

            // Preload and start next, crossfade
            next.currentTime = 0;
            next.play().catch(() => {});
            next.classList.add('active');
            current.classList.remove('active');

            // Pause old video after fade out
            setTimeout(() => { current.pause(); }, 1200);
        }

        // When current video ends, switch to next
        cycleVideos.forEach(video => {
            video.addEventListener('ended', nextVideo);
        });

        // Fallback: if a video is too long, auto-switch every 15 seconds
        setInterval(() => {
            const current = cycleVideos[currentIdx];
            if (!current.ended) nextVideo();
        }, 15000);
    }
});
