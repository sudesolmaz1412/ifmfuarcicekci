import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Esenyurt Emlakçılar İletişim | Emlakçı Telefonu",
  description:
    "Esenyurt emlakçılar iletişim ve emlakçı telefonu arayanlar Şans Yapı Gayrimenkul'e 0532 436 45 73 numarasından ulaşabilir. Satılık, kiralık ve gayrimenkul danışmanlığı.",
  alternates: {
    canonical:
      "https://www.sansyapiemlak.com/blog/esenyurt-emlakcilar-iletisim",
  },
};

const phone = "0532 436 45 73";

const whatsapp =
  "https://wa.me/905324364573?text=Merhaba%2C%20Esenyurt%27ta%20gayrimenkul%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

export default function Page() {
  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <span className="eyebrow">ŞANS YAPI GAYRİMENKUL</span>

          <h1>
            Esenyurt Emlakçılar
            <span> İletişim</span>
          </h1>

          <p className="lead">
            Esenyurt&apos;ta emlakçı telefonu arıyorsanız Şans Yapı
            Gayrimenkul ile doğrudan iletişime geçebilirsiniz. Satılık,
            kiralık ve gayrimenkul danışmanlığı için bizi arayın veya
            WhatsApp&apos;tan yazın.
          </p>

          <div className="buttons">
            <a href="tel:+905324364573" className="call">
              📞 {phone}
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp"
            >
              WhatsApp&apos;tan Yaz
            </a>
          </div>

          <div className="quick">
            <div>
              <small>TELEFON</small>
              <strong>{phone}</strong>
            </div>

            <div>
              <small>BÖLGE</small>
              <strong>Esenyurt / İstanbul</strong>
            </div>

            <div>
              <small>HİZMET</small>
              <strong>Satılık • Kiralık • Danışmanlık</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="contactSection">
        <div className="wrap">
          <span className="sectionTag">ESENYURT EMLAKÇI İLETİŞİM</span>

          <h2>Esenyurt&apos;ta Emlakçı mı Arıyorsunuz?</h2>

          <p className="intro">
            Ev satın almak, kiralık daire bulmak, gayrimenkulünüzü satmak
            veya bölgedeki konut seçenekleri hakkında bilgi almak için Şans
            Yapı Gayrimenkul&apos;e ulaşabilirsiniz.
          </p>

          <div className="contactCards">
            <a href="tel:+905324364573" className="contactCard">
              <div className="icon">📞</div>

              <div>
                <small>ESENYURT EMLAKÇI TELEFONU</small>
                <strong>{phone}</strong>
                <span>Aramak için dokunun →</span>
              </div>
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="contactCard whatsappCard"
            >
              <div className="waIcon">
                <svg viewBox="0 0 32 32" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M19.11 17.37c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.56.57.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.29.23-.63.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32z"
                  />
                  <path
                    fill="currentColor"
                    d="M16.03 3C8.85 3 3 8.78 3 15.89c0 2.27.6 4.49 1.74 6.43L3 28.67l6.55-1.7a13.1 13.1 0 0 0 6.47 1.67h.01C23.2 28.64 29 22.86 29 15.75 29 8.65 23.2 3 16.03 3zm0 23.47h-.01a10.9 10.9 0 0 1-5.55-1.51l-.4-.24-3.89 1.01 1.04-3.77-.26-.39a10.58 10.58 0 0 1-1.68-5.68c0-5.9 4.83-10.7 10.77-10.7 5.93 0 10.76 4.72 10.76 10.57 0 5.9-4.83 10.71-10.78 10.71z"
                  />
                </svg>
              </div>

              <div>
                <small>WHATSAPP</small>
                <strong>Mesaj Gönderin</strong>
                <span>WhatsApp&apos;ı aç →</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="wrap darkGrid">
          <div>
            <span className="goldTag">ŞANS YAPI GAYRİMENKUL</span>

            <h2>Esenyurt Emlakçı Telefon Numarası</h2>

            <p>
              Esenyurt&apos;ta gayrimenkul danışmanlığı için Şans Yapı
              Gayrimenkul&apos;e <strong>{phone}</strong> numaralı
              telefondan ulaşabilirsiniz.
            </p>

            <p>
              Satılık daire, kiralık daire veya gayrimenkulünüzle ilgili
              taleplerinizi telefon ya da WhatsApp üzerinden
              iletebilirsiniz.
            </p>

            <a href="/esenyurt-emlakci" className="goldLink">
              Esenyurt Emlakçı Sayfasını İncele →
            </a>
          </div>

          <div className="phoneBox">
            <small>HEMEN İLETİŞİME GEÇİN</small>

            <strong>{phone}</strong>

            <a href="tel:+905324364573">
              📞 Şimdi Ara
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="green"
            >
              WhatsApp&apos;tan Yaz
            </a>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="wrap">
          <span className="sectionTag">NASIL YARDIMCI OLABİLİRİZ?</span>

          <h2>Esenyurt Gayrimenkul Hizmetleri</h2>

          <div className="serviceGrid">
            <a href="/blog/esenyurt-satilik-daire">
              <span>01</span>
              <h3>Esenyurt Satılık Daire</h3>
              <p>
                Esenyurt&apos;ta satılık daire arayanlar için gayrimenkul
                seçeneklerini değerlendirin.
              </p>
              <b>İncele →</b>
            </a>

            <a href="/esenyurt-kiralik-daire">
              <span>02</span>
              <h3>Esenyurt Kiralık Daire</h3>
              <p>
                Kiralık ev ve daire arayışınız için bölgesel seçenekleri
                inceleyin.
              </p>
              <b>İncele →</b>
            </a>

            <a href="/esenyurt-emlakci" className="featured">
              <span>03</span>
              <h3>Esenyurt Emlakçı</h3>
              <p>
                Gayrimenkul almak, satmak veya kiralamak için doğrudan
                iletişime geçin.
              </p>
              <b>Emlakçıya ulaş →</b>
            </a>
          </div>
        </div>
      </section>

      <section className="areasSection">
        <div className="wrap">
          <span className="sectionTag">ESENYURT BÖLGELERİ</span>

          <h2>Mahalle Bazlı Emlak Hizmeti</h2>

          <div className="areas">
            <a href="/saadetdere-emlakci">
              <small>ESENYURT</small>
              <strong>Saadetdere Emlakçı</strong>
              <span>İletişim →</span>
            </a>

            <a href="/mehtercesme-emlakci">
              <small>ESENYURT</small>
              <strong>Mehterçeşme Emlakçı</strong>
              <span>İletişim →</span>
            </a>

            <a href="/blog/esenyurt-inonu-mahallesi-satilik-daire">
              <small>ESENYURT</small>
              <strong>İnönü Mahallesi</strong>
              <span>Gayrimenkul →</span>
            </a>

            <a href="/blog/esenyurt-namik-kemal-mahallesi-satilik-daire">
              <small>ESENYURT</small>
              <strong>Namık Kemal</strong>
              <span>Gayrimenkul →</span>
            </a>

            <a href="/blog/esenyurt-zafer-mahallesi-satilik-daire">
              <small>ESENYURT</small>
              <strong>Zafer Mahallesi</strong>
              <span>Gayrimenkul →</span>
            </a>

            <a href="/blog/esenyurt-talatpasa-satilik-daire">
              <small>ESENYURT</small>
              <strong>Talatpaşa</strong>
              <span>Gayrimenkul →</span>
            </a>
          </div>
        </div>
      </section>

      <section className="faqSection">
        <div className="wrap narrow">
          <span className="sectionTag">SIK SORULANLAR</span>

          <h2>Esenyurt Emlakçılar İletişim</h2>

          <div className="faq">
            <details open>
              <summary>Esenyurt emlakçı telefon numarası nedir?</summary>
              <p>
                Şans Yapı Gayrimenkul&apos;e {phone} numaralı telefondan
                ulaşabilirsiniz.
              </p>
            </details>

            <details>
              <summary>Esenyurt&apos;ta emlakçıya WhatsApp&apos;tan ulaşabilir miyim?</summary>
              <p>
                Evet. Satılık, kiralık veya diğer gayrimenkul taleplerinizi
                WhatsApp üzerinden doğrudan iletebilirsiniz.
              </p>
            </details>

            <details>
              <summary>Esenyurt&apos;ta satılık daire için kiminle görüşebilirim?</summary>
              <p>
                Şans Yapı Gayrimenkul ile iletişime geçerek aradığınız
                dairenin oda sayısı, bölgesi ve diğer özelliklerini
                paylaşabilirsiniz.
              </p>
            </details>

            <details>
              <summary>Esenyurt&apos;ta kiralık daire için iletişim kurabilir miyim?</summary>
              <p>
                Kiralık gayrimenkul arayışınız için telefon veya WhatsApp
                üzerinden bizimle iletişime geçebilirsiniz.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="wrap">
          <span>ESENYURT EMLAKÇI İLETİŞİM</span>

          <h2>Şans Yapı Gayrimenkul&apos;e Ulaşın</h2>

          <a href="tel:+905324364573" className="bigPhone">
            📞 {phone}
          </a>

          <div className="buttons center">
            <a href="tel:+905324364573" className="call">
              Hemen Ara
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp"
            >
              WhatsApp&apos;tan Yaz
            </a>
          </div>
        </div>
      </section>

      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="floatingWhatsapp"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path
            fill="currentColor"
            d="M19.11 17.37c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.56.57.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.29.23-.63.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32z"
          />
          <path
            fill="currentColor"
            d="M16.03 3C8.85 3 3 8.78 3 15.89c0 2.27.6 4.49 1.74 6.43L3 28.67l6.55-1.7a13.1 13.1 0 0 0 6.47 1.67h.01C23.2 28.64 29 22.86 29 15.75 29 8.65 23.2 3 16.03 3zm0 23.47h-.01a10.9 10.9 0 0 1-5.55-1.51l-.4-.24-3.89 1.01 1.04-3.77-.26-.39a10.58 10.58 0 0 1-1.68-5.68c0-5.9 4.83-10.7 10.77-10.7 5.93 0 10.76 4.72 10.76 10.57 0 5.9-4.83 10.71-10.78 10.71z"
          />
        </svg>
      </a>

      <style>{`
        * { box-sizing: border-box; }

        main {
          font-family: Arial, Helvetica, sans-serif;
          color: #191919;
          background: #fff;
        }

        .wrap {
          width: min(1120px, 92%);
          margin: auto;
        }

        .narrow { max-width: 900px; }

        .hero {
          padding: 105px 0 70px;
          color: #fff;
          background:
            radial-gradient(circle at 82% 15%, rgba(204,164,83,.30), transparent 30%),
            linear-gradient(135deg,#111,#282828);
        }

        .eyebrow,.sectionTag,.goldTag {
          display: inline-block;
          margin-bottom: 18px;
          color: #a47a30;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .hero .eyebrow,.goldTag {
          color: #d4aa5b;
        }

        h1 {
          max-width: 980px;
          margin: 0;
          font-size: clamp(48px,7.5vw,82px);
          line-height: 1;
          letter-spacing: -3px;
        }

        h1 span { color: #d4aa5b; }

        h2 {
          max-width: 900px;
          margin: 0 0 22px;
          font-size: clamp(30px,4.5vw,48px);
          line-height: 1.12;
          letter-spacing: -1px;
        }

        p {
          color: #555;
          font-size: 18px;
          line-height: 1.8;
        }

        .lead {
          max-width: 820px;
          margin: 28px 0;
          color: #ccc;
          font-size: 20px;
        }

        .buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .buttons a {
          padding: 17px 25px;
          border-radius: 9px;
          font-weight: 900;
          text-decoration: none;
        }

        .call {
          background: #d4aa5b;
          color: #151515;
        }

        .whatsapp {
          background: #25D366;
          color: #fff;
        }

        .quick {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          max-width: 950px;
          margin-top: 65px;
          border-top: 1px solid #444;
        }

        .quick div {
          padding: 20px 20px 0 0;
        }

        .quick small,.quick strong {
          display: block;
        }

        .quick small {
          margin-bottom: 7px;
          color: #888;
          font-size: 11px;
          letter-spacing: 1.5px;
        }

        .quick strong { font-size: 17px; }

        .contactSection,.services,.areasSection,.faqSection {
          padding: 85px 0;
        }

        .intro {
          max-width: 850px;
        }

        .contactCards {
          display: grid;
          grid-template-columns: repeat(2,1fr);
          gap: 15px;
          margin-top: 40px;
        }

        .contactCard {
          display: flex;
          gap: 20px;
          align-items: center;
          padding: 28px;
          border: 1px solid #e1e1e1;
          border-radius: 15px;
          color: #222;
          text-decoration: none;
          box-shadow: 0 10px 35px rgba(0,0,0,.05);
        }

        .icon,.waIcon {
          display: flex;
          width: 60px;
          height: 60px;
          flex: 0 0 60px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #eee5d5;
          font-size: 28px;
        }

        .waIcon {
          background: #25D366;
          color: #fff;
        }

        .waIcon svg {
          width: 37px;
          height: 37px;
        }

        .contactCard small,
        .contactCard strong,
        .contactCard span {
          display: block;
        }

        .contactCard small {
          color: #92702f;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .contactCard strong {
          margin: 7px 0;
          font-size: 24px;
        }

        .contactCard span {
          color: #777;
          font-size: 14px;
        }

        .dark {
          padding: 90px 0;
          color: #fff;
          background: #191919;
        }

        .darkGrid {
          display: grid;
          grid-template-columns: 1.2fr .7fr;
          gap: 65px;
          align-items: center;
        }

        .dark p { color: #aaa; }

        .goldLink {
          display: inline-block;
          margin-top: 12px;
          color: #d4aa5b;
          font-weight: 900;
          text-decoration: none;
        }

        .phoneBox {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 30px;
          border: 1px solid #3c3c3c;
          border-radius: 16px;
          background: #222;
        }

        .phoneBox small {
          color: #d4aa5b;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .phoneBox > strong {
          margin: 10px 0;
          font-size: 31px;
        }

        .phoneBox a {
          padding: 15px;
          border-radius: 8px;
          background: #d4aa5b;
          color: #171717;
          text-align: center;
          font-weight: 900;
          text-decoration: none;
        }

        .phoneBox .green {
          background: #25D366;
          color: #fff;
        }

        .services { background: #f6f3ed; }

        .serviceGrid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 15px;
          margin-top: 35px;
        }

        .serviceGrid a {
          padding: 28px;
          border: 1px solid #e0d9cd;
          border-radius: 14px;
          background: #fff;
          color: #222;
          text-decoration: none;
        }

        .serviceGrid a > span {
          color: #9b742e;
          font-size: 12px;
          font-weight: 900;
        }

        .serviceGrid h3 {
          margin: 25px 0 10px;
          font-size: 23px;
        }

        .serviceGrid p {
          font-size: 15px;
        }

        .serviceGrid b {
          color: #8d6826;
          font-size: 14px;
        }

        .serviceGrid .featured {
          background: #191919;
          color: #fff;
        }

        .featured p { color: #aaa; }
        .featured b { color: #d4aa5b; }

        .areas {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 13px;
          margin-top: 35px;
        }

        .areas a {
          display: flex;
          min-height: 135px;
          flex-direction: column;
          justify-content: space-between;
          padding: 22px;
          border: 1px solid #e1e1e1;
          border-radius: 12px;
          color: #222;
          text-decoration: none;
        }

        .areas small {
          color: #9b742e;
          font-weight: 900;
        }

        .areas strong { font-size: 20px; }
        .areas span { color: #777; }

        .faqSection { background: #f5f2ec; }

        .faq {
          display: grid;
          gap: 10px;
          margin-top: 35px;
        }

        .faq details {
          padding: 21px 23px;
          border: 1px solid #ddd6ca;
          border-radius: 11px;
          background: #fff;
        }

        .faq summary {
          cursor: pointer;
          font-size: 18px;
          font-weight: 900;
        }

        .faq p {
          margin-bottom: 0;
          font-size: 16px;
        }

        .finalCta {
          padding: 90px 0;
          text-align: center;
          background: #e9dfcc;
        }

        .finalCta > div > span {
          color: #876321;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .finalCta h2 {
          margin: 18px auto;
        }

        .bigPhone {
          display: block;
          margin: 25px 0;
          color: #191919;
          font-size: clamp(31px,5vw,52px);
          font-weight: 900;
          text-decoration: none;
        }

        .center { justify-content: center; }

        .floatingWhatsapp {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 9999;
          display: flex;
          width: 62px;
          height: 62px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #25D366;
          color: #fff;
          box-shadow: 0 12px 30px rgba(0,0,0,.27);
        }

        .floatingWhatsapp svg {
          width: 38px;
          height: 38px;
        }

        @media(max-width:760px) {
          .hero { padding: 75px 0 55px; }

          h1 {
            font-size: 47px;
            letter-spacing: -2px;
          }

          .contactSection,
          .services,
          .areasSection,
          .faqSection,
          .dark,
          .finalCta {
            padding: 65px 0;
          }

          .quick,
          .contactCards,
          .darkGrid,
          .serviceGrid,
          .areas {
            grid-template-columns: 1fr;
          }

          .quick div {
            padding: 14px 0;
            border-bottom: 1px solid #3d3d3d;
          }

          .buttons a { width: 100%; }

          .contactCard {
            padding: 22px;
          }

          .contactCard strong {
            font-size: 20px;
          }

          p,.lead { font-size: 17px; }
        }
      `}</style>
    </main>
  );
}
