import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const ImpressumPage: React.FC = () => {
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
            Impressum
          </h1>
        </div>
      </div>

      {/* Main Content - Clean White Background */}
      <main className="flex-grow max-w-4xl w-full mx-auto px-6 sm:px-10 py-12 sm:py-16 text-slate-700 leading-relaxed text-[15px] sm:text-base">
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-[#021861] mb-4">
            Herausgeber dieser Seite:
          </h2>
          <div className="space-y-1.5 text-slate-800">
            <p className="font-semibold text-lg text-slate-900">Paveltus GmbH</p>
            <p>Inhaber: Pavel Turcan</p>
            <p>Wollankstr. 126a-b,</p>
            <p>13187 Berlin</p>
          </div>
        </section>

        <section className="mb-10 space-y-2">
          <p>
            <strong className="text-slate-900">Tel.:</strong>{' '}
            <a href="tel:017640520242" className="text-[#255DCE] hover:underline">
              0176 40520242
            </a>
          </p>
          <p>
            <strong className="text-slate-900">E-Mail:</strong>{' '}
            <a href="mailto:info@paveltus.de" className="text-[#255DCE] hover:underline">
              info@paveltus.de
            </a>
          </p>
          <p>
            <strong className="text-slate-900">Sitz:</strong> Berlin
          </p>
          <p>
            <strong className="text-slate-900">Amtsgericht:</strong> Charlottenburg
          </p>
          <p>
            <strong className="text-slate-900">HRB:</strong> 286058B
          </p>
          <p>
            <strong className="text-slate-900">Ust-IdNr.:</strong> DE463463226
          </p>
        </section>

        <section className="mb-10 pt-6 border-t border-slate-200">
          <h2 className="text-xl sm:text-2xl font-bold text-[#021861] mb-4">
            Disclaimer
          </h2>
          <p className="mb-4">
            Das Setzen eines Links von Web-Sites Dritter zur Web-Site von Bravus-Bau ist erlaubt, solange kenntlich gemacht wird, dass es sich um Inhalte der Web-Site von Bravus-Bau handelt und diese Inhalte nicht in Verbindung mit Inhalten Dritter gebracht werden, die den Interessen von Bravus-Bau widersprechen. Dies gilt insbesondere für Web-Sites mit ungesetzlichen Inhalten.
          </p>
          <p>
            Jede anderweitige Verwertung, die nicht ausdrücklich vom Urheberrechtsgesetz zugelassen ist, bedarf der vorherigen schriftlichen Erlaubnis von Bravus-Bau.
          </p>
        </section>

        <section className="mb-12 pt-6 border-t border-slate-200 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#021861] mb-4">
            Haftungsausschluss
          </h2>
          <p>
            Bravus-Bau übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen Bravus-Bau, die sich auf Schäden materieller oder ideeller Art beziehen, welche durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens von Bravus-Bau kein nachweislich vorsätzliches Handeln vorliegt. Die Nennung von Produkten und Marken anderer Hersteller oder Anbieter dient ausschließlich der Information und stellt keine Empfehlung dar. Demzufolge verletzt die Nennung keine Warenzeichen- oder Markenrechte. Alle Angebote sind freibleibend und unverbindlich. Bravus-Bau behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
          </p>
          <p>
            Sofern auf Verweisziele („Links“) direkt oder indirekt verwiesen wird, die außerhalb des Verantwortungsbereiches von Bravus-Bau liegen, haftet diese nur dann, wenn sie von den Inhalten Kenntnis hat und es ihr technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Für darüber hinausgehende Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist. Diese Einschränkung gilt gleichermaßen auch für Fremdeinträge in von Bravus-Bau eingerichteten Gästebüchern, Diskussionsforen und Mailinglisten.
          </p>
          <p>
            Bravus-Bau ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihr selbst erstellte Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte zurückzugreifen. Das Copyright für veröffentlichte, von Bravus-Bau selbst erstellte Objekte bleibt allein bei Bravus-Bau. Eine Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung von Bravus-Bau nicht gestattet.
          </p>
          <p>
            Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

