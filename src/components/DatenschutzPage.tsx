import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const DatenschutzPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-slate-800 flex flex-col justify-between selection:bg-[#DE1110] selection:text-white">
      {/* Top Header with Brand Navy Background */}
      <div className="bg-[#021861] pb-12 pt-6 sm:pb-16 sm:pt-8 text-white relative">
        <Navbar />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 sm:pt-28">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Datenschutzerklärung
          </h1>
        </div>
      </div>

      {/* Main Content - Clean White Background */}
      <main className="flex-grow max-w-4xl w-full mx-auto px-6 sm:px-10 py-12 sm:py-16 text-slate-700 leading-relaxed text-[15px] sm:text-base space-y-12">
        {/* 1. Datenschutz auf einen Blick */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#021861] pb-2 border-b border-slate-200">
            1. Datenschutz auf einen Blick
          </h2>

          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mt-4">
            Allgemeine Hinweise
          </h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mt-6">
            Datenerfassung auf dieser Website
          </h3>

          <h4 className="font-semibold text-slate-900 mt-2">
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </h4>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:
          </p>
          <div className="bg-slate-50 p-4 rounded-md border border-slate-200 text-slate-800 space-y-1">
            <p className="font-bold text-slate-900">Paveltus GmbH</p>
            <p>Inhaber: Pavel Turcan</p>
            <p>Mittelbruchzeile 6</p>
            <p>13409 Berlin</p>
            <p>Telefon: 0176 40520242</p>
            <p>E-Mail: <a href="mailto:pavlick.werk@gmail.com" className="text-[#255DCE] hover:underline">pavlick.werk@gmail.com</a></p>
          </div>

          <h4 className="font-semibold text-slate-900 mt-4">
            Wie erfassen wir Ihre Daten?
          </h4>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
          </p>
          <p>
            Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
          </p>

          <h4 className="font-semibold text-slate-900 mt-4">
            Wofür nutzen wir Ihre Daten?
          </h4>
          <p>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
          </p>

          <h4 className="font-semibold text-slate-900 mt-4">
            Welche Rechte haben Sie bezüglich Ihrer Daten?
          </h4>
          <p>
            Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der oben angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>
          <p>
            Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung“.
          </p>
        </section>

        {/* 2. Hosting und Content Delivery Networks (CDN) */}
        <section className="space-y-4 pt-6 border-t border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#021861] pb-2 border-b border-slate-200">
            2. Hosting und Content Delivery Networks (CDN)
          </h2>
          <p>
            Wir hosten die Inhalte unserer Website bei einem Hosting-Anbieter. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosting-Anbieters gespeichert.
          </p>
          <div className="bg-slate-50 p-4 rounded-md border border-slate-200 text-slate-800 space-y-1">
            <p className="font-bold text-slate-900">Anbieter: ALL-INKL.COM – Neue Medien Münnich</p>
            <p>Adresse: Dornierstraße 4, 76131 Karlsruhe, Deutschland</p>
            <p>Telefon: +49 721 7540890</p>
            <p>E-Mail: <a href="mailto:support@all-inkl.com" className="text-[#255DCE] hover:underline">support@all-inkl.com</a></p>
            <p>Website: <a href="https://all-inkl.com" target="_blank" rel="noopener noreferrer" className="text-[#255DCE] hover:underline">https://all-inkl.com</a></p>
          </div>
          <p>
            Die Datenschutzerklärung von ALL-INKL.COM finden Sie hier:{' '}
            <a
              href="https://all-inkl.com/datenschutz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#255DCE] hover:underline break-all"
            >
              https://all-inkl.com/datenschutz/
            </a>
          </p>
        </section>

        {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
        <section className="space-y-4 pt-6 border-t border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#021861] pb-2 border-b border-slate-200">
            3. Allgemeine Hinweise und Pflichtinformationen
          </h2>

          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mt-4">
            Datenschutz
          </h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p>
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
          <p>
            Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
          </p>
          <p>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </p>
        </section>

        {/* 4. Rechte des Betroffenen */}
        <section className="space-y-4 pt-6 border-t border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#021861] pb-2 border-b border-slate-200">
            4. Rechte des Betroffenen
          </h2>
          <p>Sie haben das Recht:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>
              <strong>gemäß Art. 15 DSGVO</strong> Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen.
            </li>
            <li>
              <strong>gemäß Art. 16 DSGVO</strong> unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.
            </li>
            <li>
              <strong>gemäß Art. 17 DSGVO</strong> die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.
            </li>
            <li>
              <strong>gemäß Art. 18 DSGVO</strong> die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>
            <li>
              <strong>gemäß Art. 20 DSGVO</strong> Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen.
            </li>
            <li>
              <strong>gemäß Art. 7 Abs. 3 DSGVO</strong> Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen.
            </li>
            <li>
              <strong>gemäß Art. 77 DSGVO</strong> sich bei einer Aufsichtsbehörde zu beschweren.
            </li>
          </ul>
        </section>

        {/* 5. Erfassung von allgemeinen Daten und Informationen */}
        <section className="space-y-4 pt-6 border-t border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#021861] pb-2 border-b border-slate-200">
            5. Erfassung von allgemeinen Daten und Informationen
          </h2>
          <p>
            Wenn Sie unsere Website besuchen, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten z. B. die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Providers und ähnliches. Hierbei handelt es sich ausschließlich um Informationen, welche keine Rückschlüsse auf Ihre Person zulassen.
          </p>
          <p>
            Diese Informationen sind technisch notwendig, um von Ihnen angeforderte Inhalte von Webseiten korrekt auszuliefern und fallen bei Nutzung des Internets zwingend an.
          </p>
          <p>
            Wir nutzen diese Daten z. B. dazu, um die Nutzung unserer Website auszuwerten und um unsere Internetpräsenz zu verbessern.
          </p>
        </section>

        {/* 6. Kontaktformular */}
        <section className="space-y-4 pt-6 border-t border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#021861] pb-2 border-b border-slate-200">
            6. Kontaktformular
          </h2>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
          </p>
          <p>
            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
        </section>

        {/* 7. Plugins und Tools */}
        <section className="space-y-4 pt-6 border-t border-slate-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#021861] pb-2 border-b border-slate-200">
            7. Plugins und Tools
          </h2>
          <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mt-2">
            Google Web Fonts
          </h3>
          <p>
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
          </p>
          <p>
            Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Dabei kann Google mitbekommen, dass über Ihre IP-Adresse unsere Website aufgerufen wurde.
          </p>
          <p>
            Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.
          </p>
          <p>
            Weitere Informationen zu Google Web Fonts finden Sie unter{' '}
            <a
              href="https://developers.google.com/fonts/faq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#255DCE] hover:underline"
            >
              https://developers.google.com/fonts/faq
            </a>{' '}
            und in der Datenschutzerklärung von Google:{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#255DCE] hover:underline"
            >
              https://policies.google.com/privacy
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

