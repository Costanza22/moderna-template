import React, { useState, useEffect } from 'react';
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line, Pie, Bar } from 'react-chartjs-2';
import './App.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    experience: 0
  });
  const [activeTab, setActiveTab] = useState('history');

  useEffect(() => {
    // Animação dos contadores
    const targetStats = {
      projects: 150,
      clients: 200,
      experience: 10
    };

    const duration = 2000; // 2 segundos
    const steps = 60;
    const interval = duration / steps;

    const counters = Object.keys(targetStats).map(key => {
      let current = 0;
      const increment = targetStats[key] / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetStats[key]) {
          current = targetStats[key];
          clearInterval(timer);
        }
        setStats(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, interval);

      return timer;
    });

    return () => counters.forEach(timer => clearInterval(timer));
  }, []);

  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <span className="logo-icon">🏗️</span>
            <span>Construtora Moderna</span>
          </div>
          <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className={isMenuOpen ? 'open' : ''}></span>
            <span className={isMenuOpen ? 'open' : ''}></span>
            <span className={isMenuOpen ? 'open' : ''}></span>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home">Início</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#stats">Números</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <h1>Construindo o Futuro</h1>
            <p>Soluções modernas para sua obra</p>
            <button className="cta-button">Solicite um Orçamento</button>
          </div>
          <div className="hero-overlay"></div>
        </section>

        <section id="stats" className="stats-section">
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-number">{stats.projects}+</div>
              <div className="stat-label">Projetos Concluídos</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.clients}+</div>
              <div className="stat-label">Clientes Satisfeitos</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.experience}+</div>
              <div className="stat-label">Anos de Experiência</div>
            </div>
          </div>
        </section>

        <section id="services" className="services-section">
          <h2>Nossos Serviços</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Construção Civil</h3>
              <p>Projetos residenciais e comerciais</p>
            </div>
            <div className="service-card">
              <h3>Reformas</h3>
              <p>Transformação de espaços</p>
            </div>
            <div className="service-card">
              <h3>Projetos Arquitetônicos</h3>
              <p>Design moderno e funcional</p>
            </div>
            <div className="service-card">
              <h3>Consultoria</h3>
              <p>Assessoria técnica especializada</p>
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <h2>Projetos Recentes</h2>
          <div className="projects-grid">
            <div className="project-card">
              <img src="https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg" alt="Casa Moderna" loading="lazy" />
              <div className="project-info">
                <h3>Casa Moderna</h3>
                <p>Projeto residencial contemporâneo</p>
              </div>
            </div>
            <div className="project-card">
              <img src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg" alt="Apartamento" loading="lazy" />
              <div className="project-info">
                <h3>Apartamento</h3>
                <p>Reforma completa</p>
              </div>
            </div>
            <div className="project-card">
              <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" alt="Escritório" loading="lazy" />
              <div className="project-info">
                <h3>Escritório</h3>
                <p>Projeto comercial</p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials-section">
          <h2>Depoimentos</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Excelente trabalho! A equipe foi muito profissional e o resultado superou minhas expectativas."</p>
                <div className="testimonial-author">
                  <h4>João Silva</h4>
                  <p>Cliente Residencial</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Recomendo fortemente! Prazo cumprido e qualidade impecável em todos os detalhes."</p>
                <div className="testimonial-author">
                  <h4>Maria Santos</h4>
                  <p>Cliente Comercial</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Atendimento excepcional e preço justo. Ficamos muito satisfeitos com o resultado final."</p>
                <div className="testimonial-author">
                  <h4>Carlos Oliveira</h4>
                  <p>Cliente Residencial</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <h2>Sobre Nós</h2>
          <div className="about-tabs">
            <button 
              className={activeTab === 'history' ? 'active' : ''}
              onClick={() => setActiveTab('history')}
            >
              Nossa História
            </button>
            <button 
              className={activeTab === 'numbers' ? 'active' : ''}
              onClick={() => setActiveTab('numbers')}
            >
              Nossos Números
            </button>
            <button 
              className={activeTab === 'team' ? 'active' : ''}
              onClick={() => setActiveTab('team')}
            >
              Nossa Equipe
            </button>
          </div>

          <div className="about-content">
            {activeTab === 'history' && (
              <div className="about-history">
                <div className="history-text">
                  <h3>Nossa História</h3>
                  <p>Fundada em 2010, a Construtora Moderna nasceu com o objetivo de transformar o mercado imobiliário através de projetos inovadores e sustentáveis.</p>
                </div>
                <div className="history-image">
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Nossa História" />
                </div>
              </div>
            )}

            {activeTab === 'numbers' && (
              <div className="about-charts">
                <div className="chart-container">
                  <h3>Crescimento de Projetos</h3>
                  <Line
                    data={{
                      labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
                      datasets: [{
                        label: 'Projetos Concluídos',
                        data: [12, 19, 25, 35, 42, 50],
                        borderColor: '#3498db',
                        tension: 0.1
                      }]
                    }}
                  />
                </div>
              </div>
            )}

            {activeTab === 'team' && (
              <div className="about-team">
                <div className="team-member">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Engenheiro" />
                  <h3>João Silva</h3>
                  <p>Engenheiro Civil</p>
                </div>
                <div className="team-member">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Arquiteta" />
                  <h3>Maria Santos</h3>
                  <p>Arquiteta</p>
                </div>
              </div>
            )}
          </div>
        </section>

        <section id="buildings" className="buildings-section">
          <h2>Nossos Prédios</h2>
          <div className="buildings-grid">
            <div className="building-card">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Residencial Moderno" />
              <div className="building-info">
                <h3>Residencial Moderno</h3>
                <p>Apartamentos de 2 e 3 quartos</p>
                <button className="building-button">Saiba Mais</button>
              </div>
            </div>
            <div className="building-card">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Edifício Comercial" />
              <div className="building-info">
                <h3>Edifício Comercial</h3>
                <p>Salas comerciais e coworking</p>
                <button className="building-button">Saiba Mais</button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2>Entre em Contato</h2>
          <div className="contact-container">
            <form className="contact-form">
              <input type="text" placeholder="Nome" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Telefone" />
              <select required>
                <option value="">Selecione o serviço</option>
                <option value="construcao">Construção Civil</option>
                <option value="reforma">Reformas</option>
                <option value="projeto">Projetos Arquitetônicos</option>
                <option value="consultoria">Consultoria</option>
              </select>
              <textarea placeholder="Mensagem" required></textarea>
              <button type="submit" className="submit-button">
                <span>Enviar</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
            <div className="contact-info">
              <h3>Informações de Contato</h3>
              <p><i className="fas fa-map-marker-alt"></i> Rua das Construções, 123</p>
              <p><i className="fas fa-phone"></i> (11) 1234-5678</p>
              <p><i className="fas fa-envelope"></i> contato@construtora.com</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Construtora Moderna</h3>
            <p>Construindo sonhos, realizando projetos.</p>
          </div>
          <div className="footer-section">
            <h3>Links Rápidos</h3>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#projects">Projetos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Horário de Atendimento</h3>
            <p>Segunda a Sexta: 8h às 18h</p>
            <p>Sábado: 9h às 13h</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Construtora Moderna. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
