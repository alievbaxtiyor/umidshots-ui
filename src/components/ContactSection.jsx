import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './ContactSection.css';

export function ContactSection() {
  const { t } = useLanguage();
  const titleRef = useScrollAnimation();
  const linksRef = useScrollAnimation({ threshold: 0.2 });
  const formRef = useScrollAnimation({ threshold: 0.2 });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const botToken = '8645421610:AAENLs6jkKXTfv1Muh9sSVRI4d7Y1HWnq0s';
    const userIds = ['8561864112', '5704543722'];

    const message = `
🔔 *New Contact Form Message*

👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}

💬 *Message:*
${formData.message}
    `;

    try {
      // Send message to both users
      const sendPromises = userIds.map(chatId =>
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'Markdown',
          }),
        })
      );

      await Promise.all(sendPromises);

      setFormStatus('success');
      setTimeout(() => {
        setFormStatus('');
        setFormData({ name: '', phone: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('');
      }, 3000);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div ref={titleRef} className="section-title-with-arrow animate-fade-up">
          <span className="arrow-icon">↗</span>
          <h2>{t('contact.title')}</h2>
        </div>

        <div ref={linksRef} className="contact-content animate-fade-up">
          {/* Phone Number */}
          <a href={`tel:${t('contact.phone')}`} className="contact-item">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="contact-info">
              <span className="contact-label">{t('contact.phoneLabel')}</span>
              <span className="contact-value">{t('contact.phone')}</span>
            </div>
          </a>

          {/* Instagram */}
          <a href={t('contact.instagram')} target="_blank" rel="noopener noreferrer" className="contact-item">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <div className="contact-info">
              <span className="contact-label">Instagram</span>
              <span className="contact-value">@{t('contact.instagramHandle')}</span>
            </div>
          </a>

          {/* Telegram */}
          <a href={t('contact.telegram')} target="_blank" rel="noopener noreferrer" className="contact-item">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </div>
            <div className="contact-info">
              <span className="contact-label">Telegram</span>
              <span className="contact-value">@{t('contact.telegramHandle')}</span>
            </div>
          </a>

          {/* YouTube */}
          <a href={t('contact.youtube')} target="_blank" rel="noopener noreferrer" className="contact-item">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </div>
            <div className="contact-info">
              <span className="contact-label">YouTube</span>
              <span className="contact-value">@{t('contact.youtubeHandle')}</span>
            </div>
          </a>
        </div>

        {/* Contact Form */}
        <div ref={formRef} className="contact-form-wrapper animate-fade-up">
          <h3 className="form-title">{t('contact.formTitle')}</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.namePlaceholder')}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('contact.phonePlaceholder')}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.messagePlaceholder')}
                required
                rows="5"
                className="form-textarea"
              ></textarea>
            </div>
            <button type="submit" className="form-submit" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? t('contact.sendingMessage') : t('contact.submitButton')}
            </button>
            {formStatus === 'success' && (
              <p className="form-success">{t('contact.successMessage')}</p>
            )}
            {formStatus === 'error' && (
              <p className="form-error">{t('contact.errorMessage')}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
