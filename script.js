// script.js - Viejo Papa Parrilla & Cava
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. Sticky Header Shadow on Scroll
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('shadow-md');
      } else {
        header.classList.remove('shadow-md');
      }
    });
  }

  // 3. Menu Tabs Filtering
  const tabButtons = document.querySelectorAll('.menu-tab-btn');
  const menuCategories = document.querySelectorAll('.menu-category-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle button styles
      tabButtons.forEach(b => {
        b.classList.remove('active', 'bg-flame-wine', 'text-white');
        b.classList.add('bg-white', 'text-charcoal-muted');
      });
      btn.classList.add('active', 'bg-flame-wine', 'text-white');
      btn.classList.remove('bg-white', 'text-charcoal-muted');

      const target = btn.getAttribute('data-target') || btn.getAttribute('data-tab');
      menuCategories.forEach(panel => {
        const cat = panel.getAttribute('data-category');
        if (target === 'all' || cat === target) {
          panel.style.display = 'block';
        } else {
          panel.style.display = 'none';
        }
      });
    });
  });

  // 4. Image Lightbox
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const clickableImages = document.querySelectorAll('.gallery-zoom');

  clickableImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      const fullSrc = img.getAttribute('data-full') || img.src;
      if (lightboxModal && lightboxImg) {
        lightboxImg.src = fullSrc;
        lightboxModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (lightboxClose && lightboxModal) {
    lightboxClose.addEventListener('click', () => {
      lightboxModal.classList.add('hidden');
      document.body.style.overflow = '';
    });

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }

  // 5. Reservation Form via WhatsApp Direct VIP Concierge
  const reservationForm = document.getElementById('reservation-form');
  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = document.getElementById('res-name')?.value || '';
      const telefone = document.getElementById('res-phone')?.value || '';
      const convidados = document.getElementById('res-guests')?.value || '2';
      const data = document.getElementById('res-date')?.value || '';
      const horario = document.getElementById('res-time')?.value || '';
      const obs = document.getElementById('res-notes')?.value || 'Sem observações adicionais.';

      const msg = encodeURIComponent(
        `*SOLICITAÇÃO DE RESERVA VIP - VIEJO PAPA PARRILLA & CAVA*\n\n` +
        `👤 *Titular:* ${nome}\n` +
        `📱 *WhatsApp:* ${telefone}\n` +
        `👥 *Pessoas:* ${convidados}\n` +
        `📅 *Data:* ${data}\n` +
        `⏰ *Horário:* ${horario}\n` +
        `🍷 *Observações / Preferências:* ${obs}\n\n` +
        `_Enviado através do site oficial do Viejo Papa._`
      );

      const whatsappUrl = `https://wa.me/5511999998888?text=${msg}`;
      window.open(whatsappUrl, '_blank');
    });
  }
});
