<div align="center">

# 👁️ ABYSS WATCHER
### Sistema Avanzado de Inteligencia de Amenazas (OSINT/Blue Team)

![Estado](https://img.shields.io/badge/Estado-Operativo-success?style=for-the-badge&logo=statuspage)
![Plataforma](https://img.shields.io/badge/Plataforma-Web%20(Client--Side)-blue?style=for-the-badge&logo=google-chrome)
![Licencia](https://img.shields.io/badge/Licencia-MIT-purple?style=for-the-badge)

<br>

**AbyssWatcher** es una suite de análisis forense digital y detección de phishing de última generación.
Diseñada para operaciones de **Blue Team**, funciona completamente en el navegador del analista, garantizando privacidad absoluta y velocidad de ejecución sin depender de servidores backend.

[Ver Demo en Vivo](https://ph0e-nyx.github.io/AbyssWatcher/)

</div>

---

## 🚀 Capacidades de Combate

### 1. 🛡️ Escáner de URLs & Detección de Phishing
El motor de análisis intercepta y evalúa amenazas web en tiempo real utilizando una arquitectura híbrida:

*   **🔍 Motor Heurístico Local**: Algoritmos dedicados que detectan patrones anómalos, ofuscación de URLs y técnicas de ingeniería social.
*   **🏢 Detector de Suplantación de Marca (Brand Impersonation)**: Base de datos integrada con **+500 firmas digitales** de entidades globales (PayPal, Google, Bancos, Crypto). Detecta intentos de spoofing con precisión quirúrgica.
*   **🌐 Inteligencia Colectiva (CTI)**: Integración directa con **VirusTotal API** para correlacionar indicadores con más de 70 motores antivirus globales.

### 2. 📂 Análisis Forense de Archivos (Zero-Trust)
Arquitectura "Privacy-First" que permite el análisis de artefactos sospechosos sin comprometer la seguridad de los datos:

*   **🔒 Privacidad Absoluta**: Los archivos analizados **NUNCA** abandonan su dispositivo. Todo el procesamiento se realiza localmente en memoria.
*   **#️⃣ Hashing en el Navegador**: Cálculo instantáneo de huellas digitales **SHA-256** utilizando la API de Criptografía Web nativa.
*   **☣️ Identificación de Vectores de Ataque**: Detección automática de extensiones de alto riesgo (.EXE, .SCR, .PS1) y consulta de reputación en redes de inteligencia.

### 3. 🎨 Interfaz Cyber-Ops
*   **Diseño Táctico**: Interfaz optimizada para centros de operaciones de seguridad (SOC) con modo oscuro y alto contraste.
*   **Paleta "Pastel Blue"**: Diseñada ergonómicamente para reducir la fatiga visual durante sesiones de análisis prolongadas.
*   **Reportes Técnicos**: Generación de tablas de datos forenses listas para informes de incidentes.

---

## 🛠️ Despliegue e Instalación

Esta herramienta es una **Progressive Web App (PWA)** estática. No requiere servidores, bases de datos ni configuraciones complejas.


### 💻 Opción B: Ejecución Local
Ideal para entornos aislados (Air-Gapped) o desarrollo:

1.  Descarga el código fuente.
2.  Abre el archivo `index.html` en cualquier navegador moderno (Chrome/Firefox/Edge).
3.  Sistema operativo listo.

---

## ⚠️ Aviso Legal & Limitaciones

> [!DATE]
> **Uso Educativo**: Esta herramienta es un proyecto de portafolio para demostración de capacidades en Ciberdefensa.

*   **VirusTotal API**: La versión pública está sujeta a los límites de tasa de la API gratuita de VirusTotal (4 peticiones/minuto).
*   **Privacidad de Red**: Aunque los archivos no se suben, las consultas de reputación de URL requieren conexión a internet y pasan a través de un proxy CORS seguro.

---

<div align="center">
  <sub>Desarrollado para el Blue Team Portfolio</sub>
  <br>
  <sub>Copyright © 2026 - Ph0e-Nyx</sub>
</div>

