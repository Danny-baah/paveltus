import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  Tag,
  Edit3,
  Send,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Bitte stimmen Sie der Datenschutzerklärung zu.');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <section
      id="kontakt"
      className="relative w-full bg-[#F5F7FC] text-slate-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden border-t border-slate-200/60"
      aria-labelledby="contact-section-heading"
    >
      <div className="max-w-[1360px] mx-auto">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Small Category Label with Red Bar */}
          <div className="inline-flex items-center space-x-2.5 mb-3">
            <span
              className="w-7 h-[3px] bg-[#DE1110] rounded-full inline-block"
              aria-hidden="true"
            />
            <span className="text-xs sm:text-[13px] font-extrabold tracking-[0.2em] text-[#021861] uppercase">
              KONTAKT
            </span>
          </div>

          {/* Main Section Headline */}
          <h2
            id="contact-section-heading"
            className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#021861] tracking-[-0.03em] leading-tight mb-3"
          >
            So <span className="text-[#DE1110]">erreichen</span> Sie uns.
          </h2>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Kontaktieren Sie uns gerne telefonisch, per E-Mail oder über das Kontaktformular. Wir
            melden uns schnellstmöglich bei Ihnen.
          </p>
        </div>

        {/* ================= 2-COLUMN GRID: INFO CARD & FORM CARD ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-8 sm:mb-10">
          {/* ----- LEFT COLUMN: CONTACT INFO CARD (Navy #021861, 4 cols) ----- */}
          <div className="lg:col-span-4 relative rounded-[24px] bg-[#021861] text-white p-7 sm:p-9 overflow-hidden flex flex-col justify-between shadow-xl shadow-[#021861]/15 min-h-[440px]">
            {/* Background architectural facade graphic */}
            <img
              src="/footer_bg_clean.jpg"
              alt=""
              className="absolute right-0 top-0 w-4/5 h-full object-cover opacity-20 pointer-events-none select-none mix-blend-luminosity"
              aria-hidden="true"
            />

            {/* Bottom-Right Red Corner Slice */}
            <div
              className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none select-none"
              aria-hidden="true"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon points="100,0 100,100 0,100" fill="#DE1110" />
              </svg>
            </div>

            {/* Contact Items List */}
            <div className="space-y-6 sm:space-y-7 relative z-10 my-auto">
              {/* Item 1: Adresse */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#DE1110] stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-[12px] text-slate-300 font-semibold uppercase tracking-wider block">
                    Adresse
                  </span>
                  <span className="text-white font-bold text-[15px] sm:text-[16px]">
                    Berlin, Deutschland
                  </span>
                </div>
              </div>

              {/* Item 2: Telefon */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#DE1110] stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-[12px] text-slate-300 font-semibold uppercase tracking-wider block">
                    Telefon
                  </span>
                  <a
                    href="tel:+493012345678"
                    className="text-white font-bold text-[15px] sm:text-[16px] hover:text-[#DE1110] transition-colors"
                  >
                    +49 30 12345678
                  </a>
                </div>
              </div>

              {/* Item 3: E-Mail */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#DE1110] stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-[12px] text-slate-300 font-semibold uppercase tracking-wider block">
                    E-Mail
                  </span>
                  <a
                    href="mailto:info@paveltus.de"
                    className="text-white font-bold text-[15px] sm:text-[16px] hover:text-[#DE1110] transition-colors"
                  >
                    info@paveltus.de
                  </a>
                </div>
              </div>

              {/* Item 4: Öffnungszeiten */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#DE1110] stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-[12px] text-slate-300 font-semibold uppercase tracking-wider block">
                    Öffnungszeiten
                  </span>
                  <span className="text-white font-bold text-[15px] sm:text-[16px]">
                    Mo – Fr: 08:00 – 17:00 Uhr
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ----- RIGHT COLUMN: CONTACT FORM CARD (8 cols) ----- */}
          <div className="lg:col-span-8 rounded-[24px] bg-white border border-slate-200/90 p-7 sm:p-9 shadow-sm flex flex-col justify-between">
            {/* Form Header with Red Bar */}
            <div className="mb-6">
              <div className="flex items-center space-x-2.5 mb-1.5">
                <span
                  className="w-6 h-[3px] bg-[#DE1110] rounded-full inline-block"
                  aria-hidden="true"
                />
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#021861] tracking-tight">
                  Kontaktformular
                </h3>
              </div>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-extrabold text-[#021861]">
                  Vielen Dank für Ihre Nachricht!
                </h4>
                <p className="text-slate-500 text-sm max-w-md">
                  Wir haben Ihre Anfrage erfolgreich erhalten und werden uns schnellstmöglich bei
                  Ihnen melden.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 bg-[#021861] text-white text-xs font-bold rounded-xl hover:bg-[#021861]/90 transition-all cursor-pointer"
                >
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* 2-Column Grid for Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Field: Ihr Name * */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold text-slate-800 mb-1.5"
                    >
                      Ihr Name <span className="text-[#DE1110]">*</span>
                    </label>
                    <div className="relative">
                      <User
                        className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                        aria-hidden="true"
                      />
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Name eingeben"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#255DCE] focus:ring-1 focus:ring-[#255DCE] text-slate-800 placeholder:text-slate-400 bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Field: Ihre E-Mail * */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold text-slate-800 mb-1.5"
                    >
                      Ihre E-Mail <span className="text-[#DE1110]">*</span>
                    </label>
                    <div className="relative">
                      <Mail
                        className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                        aria-hidden="true"
                      />
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="E-Mail-Adresse eingeben"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#255DCE] focus:ring-1 focus:ring-[#255DCE] text-slate-800 placeholder:text-slate-400 bg-white transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* 2-Column Grid for Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Field: Telefon (optional) */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold text-slate-800 mb-1.5"
                    >
                      Telefon (optional)
                    </label>
                    <div className="relative">
                      <Phone
                        className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                        aria-hidden="true"
                      />
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Telefonnummer eingeben"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#255DCE] focus:ring-1 focus:ring-[#255DCE] text-slate-800 placeholder:text-slate-400 bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Field: Betreff * */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-bold text-slate-800 mb-1.5"
                    >
                      Betreff <span className="text-[#DE1110]">*</span>
                    </label>
                    <div className="relative">
                      <Tag
                        className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                        aria-hidden="true"
                      />
                      <select
                        id="contact-subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#255DCE] focus:ring-1 focus:ring-[#255DCE] bg-white text-slate-700 appearance-none transition-all cursor-pointer"
                      >
                        <option value="" disabled>
                          Bitte wählen
                        </option>
                        <option value="trockenbau">Trockenbau</option>
                        <option value="malerarbeiten">Malerarbeiten</option>
                        <option value="abriss">Abriss & Entrümpelung</option>
                        <option value="zusatz">Zusätzliche Leistungen</option>
                        <option value="allgemein">Allgemeine Anfrage</option>
                      </select>
                      <ChevronDown
                        className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>

                {/* Field: Ihre Nachricht * */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold text-slate-800 mb-1.5"
                  >
                    Ihre Nachricht <span className="text-[#DE1110]">*</span>
                  </label>
                  <div className="relative">
                    <Edit3
                      className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none"
                      aria-hidden="true"
                    />
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ihre Nachricht an uns ..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#255DCE] focus:ring-1 focus:ring-[#255DCE] text-slate-800 placeholder:text-slate-400 bg-white transition-all resize-y min-h-[96px]"
                    />
                  </div>
                </div>

                {/* Bottom Row: Checkbox Consent + Submit Button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  {/* Consent Checkbox */}
                  <label className="flex items-start space-x-2.5 cursor-pointer max-w-lg select-none">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 w-4 h-4 rounded text-[#DE1110] focus:ring-[#DE1110] border-slate-300 cursor-pointer"
                    />
                    <span className="text-xs text-slate-600 leading-snug">
                      Ich habe die{' '}
                      <a
                        href="#datenschutz"
                        className="text-[#DE1110] font-semibold hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Datenschutzerklärung
                      </a>{' '}
                      gelesen und bin mit der Verarbeitung meiner Daten einverstanden.{' '}
                      <span className="text-[#DE1110]">*</span>
                    </span>
                  </label>

                  {/* Red Submit Button */}
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center space-x-2 px-6 sm:px-7 py-3 bg-[#DE1110] hover:bg-[#c00e0d] active:scale-[0.98] text-white font-bold text-sm rounded-xl shadow-md shadow-[#DE1110]/20 transition-all cursor-pointer whitespace-nowrap self-end sm:self-auto"
                  >
                    <Send className="w-4 h-4 stroke-[2.2]" />
                    <span>Nachricht senden</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* ================= BOTTOM MAP CARD ================= */}
        <div className="relative w-full rounded-[24px] overflow-hidden border border-slate-200/90 shadow-sm bg-[#E8ECEF] h-[260px] sm:h-[300px] lg:h-[340px]">
          {/* Crisp Berlin Map Background Image with original location marker */}
          <img
            src="/contact_map_exact_2x.png"
            alt="Paveltus Berlin Standort Karte"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
            loading="lazy"
          />

          {/* Interactive Floating Link matching exact badge location */}
          <a
            href="https://maps.google.com/?q=Berlin,+Deutschland"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="In Google Maps ansehen"
            className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 w-[180px] sm:w-[220px] h-[70px] rounded-2xl cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};
