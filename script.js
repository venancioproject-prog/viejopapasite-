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
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('shadow-md');
    } else {
      header.classList.remove('shadow-md');
    }
  });

  // 3. Menu Tabs Filtering
  const tabButtons = document.querySelectorAll('.menu-tab-btn');
  const menuCategories = document.querySelectorAll('.menu-category-panel');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => {
        b.classList.remove('bg-flame-wine', 'text-white', 'border-flame-wine');
        b.classList.add('bg-surface-pure', 'text-charcoal-main', 'border-gold-border');
      });
      btn.classList.add('bg-flame-wine', 'text-white', 'border-flame-wine');
      btn.classList.remove('bg-surface-pure', 'text-charcoal-main', 'border-gold-border');

      const targetTab = btn.getAttribute('data-tab');
      menuCategories.forEach(panel => {
        if (targetTab === 'all' || panel.getAttribute('data-category') === targetTab) {
          panel.classList.remove('hidden');
          panel.classList.add('animate-fade-in');
        } else {
          panel.classList.add('hidden');
          panel.classList.remove('animate-fade-in');
        }
      });
    });
  });

  // 4. Image Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const clickableImages = document.querySelectorAll('.gallery-zoom');

  clickableImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      const src = img.getAttribute('data-full') || img.src;
      const alt = img.getAttribute('alt') || 'Viejo Papa Parrilla';
      if (lightbox && lightboxImg) {
        lightboxImg.src = src;
        if (lightboxCaption) lightboxCaption.textContent = alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (lightboxClose && lightbox) {
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // 5. Reservation Form via WhatsApp Direct VIP Concierge
  const reservationForm = document.getElementById('reservation-form');
  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = document.getElementById('nome')?.value || '';
      const telefone = document.getElementById('telefone')?.value || '';
      const convidados = document.getElementById('convidados')?.value || '';
      const data = document.getElementById('data')?.value || '';
      const horario = document.getElementById('horario')?.value || '';
      const obs = document.getElementById('obs')?.value || 'Nenhuma';

      const msg = *SOLICITAÇÃO DE RESERVA VIP - VIEJO PAPA PARRILLA & CAVA*%0A%0A +
        👤 *Titular:* %0A +
        📱 *WhatsApp:* %0A +
        👥 *Pessoas:* %0A +
        📅 *Data:* %0A +
        ⏰ *Horário:* %0A +
        🍷 *Observações / Preferências:* %0A%0A +
        _Enviado através do site oficial Viejo Papa._;

      const whatsappUrl = https://wa.me/551130908877?text=;
      
      const formSuccessModal = document.getElementById('form-success-modal');
      if (formSuccessModal) {
        formSuccessModal.classList.remove('hidden');
        document.getElementById('whatsapp-direct-btn')?.setAttribute('href', whatsappUrl);
      } else {
        window.open(whatsappUrl, '_blank');
      }
    });
  }

  // Close modal button
  const closeModalBtn = document.getElementById('close-modal-btn');
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      document.getElementById('form-success-modal')?.classList.add('hidden');
    });
  }
});