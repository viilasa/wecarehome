import React from 'react';

export default function WhyUs() {
  return (
    <section id="why" className="py-20 bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[var(--text-primary)] mb-12">WHY DO WE DO THIS</h2>
        <div className="space-y-8 text-[var(--text-primary)] opacity-90">
          <p className="text-base md:text-lg leading-relaxed">
            Buying a home is one of the biggest moments of one's life, and we believe it should be exciting, not overwhelming.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Our goal is to listen to you, understand your vision, and gather every detail to curate and find the perfect home—without you lifting a finger. We step into your shoes, ensuring every aspect of your dream home is met with precision and care.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            From expert guidance to handpicked listings and seamless closings, we take care of everything so you can simply enjoy the journey. And the best part? We charge zero commission—just a small, fixed fee—offering complete transparency with no hidden costs.
          </p>
          <p className="text-base md:text-lg leading-relaxed font-medium text-[var(--text-primary)]">
            Because finding your dream home should be a joyful experience, not a stressful one.
          </p>
        </div>
      </div>
    </section>
  );
}