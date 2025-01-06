import { useState } from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'; 
import './app.css'; 
import './assets/gulcin.jpeg';

function MainContainer() {
  const [x1, setX1] = useState(0);

  return (
    <>
      <div className="main-wrapper">
        <div className="user-section">
         
          <div className="user-header">
            <img
              src="\src\assets\gulcin.jpeg" 
              alt="Gülçin Aslancı"
              className="user-photo"
            />
            <div>
              <h1 className="user-name">Gülçin Aslancı</h1>
            </div>
          </div>

         
          <section className="info-block">
            <h2>Kişisel Bilgiler</h2>
            <p><strong><em>Telefon:</em></strong> 0537 495 35 58</p>
            <p><strong><em>Email:</em></strong> gulcinaslanci@gmail.com</p>
            <p><strong><em>Adres:</em></strong> İzmit\Koceli</p>
          </section>

          <div className="line-break" />

         
          <section className="education-block">
            <h2>Eğitim Durumu</h2>
            <p><strong><em>Üniversite:</em></strong> Kapadokya Üniversitesi</p>
            <p><strong><em>Bölüm:</em></strong> Bilgisayar Programcılığı/Uzaktan Öğretim</p>
            <p><strong><em>Mezuniyet:</em></strong> Devam Ediyor</p>
          </section>

          <div className="line-break" />

          
          <section className="experience-block">
            <h2>Deneyim</h2>
            <div className="experience-card">
              <h3>Stajyer</h3>
              <p><strong>Firma:</strong> Teknopark</p>
              <p><strong>Görev Süresi:</strong> 1 Ay</p>
              <p><strong>Görevler:</strong> Siber güvenlik eğitimi aldım ve temel projeler üzerine çalıştım.</p>
            </div>
          </section>

          <div className="line-break" />

          
          <section className="skills-list">
            <h2>Yetenekler</h2>
            <ul>
              <li>C#</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>C++</li>
              <li>Php</li>
              <li>Linux</li>
            </ul>
          </section>

          <div className="line-break" />

        
          <section className="skills-list">
            <h2><strong>Hobiler</strong></h2>
            <ul>
              <li>Spor ve Fiziksel Aktivite</li>
              <li>Kitap Okumak</li>
              <li>Araştırma Yapmak</li>
              <li>Yabancı Dil Öğrenmek</li>
              <li>Seyahat Etmek</li>
            </ul>
          </section>

          <div className="line-break" />

          <section className="languages-section">
  <h2>Yabancı Diller</h2>
  <ul>
    <li>
      <span className="language">İngilizce</span>
      <span className="level">
        <span className="star">★</span>
        <span className="star">★</span> 
      </span>
    </li>
  </ul>
</section>

          <div className="line-break" />

         
          <section className="media-links">
            <h2>Medya</h2>
            <div className="media-icons">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
              </a>
            </div>
          </section>

          <div className="line-break" />

          
          <section className="ref-section">
            <h2>Referanslar</h2>

            <div className="ref-card">
              <h3>Ali Dinçer</h3>
              <p><strong>Pozisyon:</strong> Yazılım Mühendisi</p>
              <p><strong>Firma:</strong>Teknopark</p>
              <p><strong>Email:</strong> ali.dinc@gmail.com</p>
            </div>

          </section>
        </div>
      </div>
    </>
  );
}

export default MainContainer;
