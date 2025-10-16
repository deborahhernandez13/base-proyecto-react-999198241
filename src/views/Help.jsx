import { Link } from "react-router-dom"

const Help = () => {
  return (
    <main>
      <h1>Centro de Ayuda</h1>
      <p>Guía completa sobre el funcionamiento, tecnologías y mejoras futuras del sistema de mensajería</p>
      <section>
        <h2>🗨️Funcionamiento general del chat</h2>
        <p>
          Este chat fue diseñado como un sistema de mensajería interactivo que permite la comunicación fluida y en tiempo real entre usuarios, con el propósito de ofrecer una experiencia moderna, ágil y accesible.
          Su objetivo principal es simular la dinámica de una conversación cotidiana, similar a la de aplicaciones como WhatsApp o Telegram.
        </p>
        <p>
          La interfaz es <strong>simple, intuitiva y adaptable</strong> a distintos dispositivos, garantizando facilidad de uso sin requerir conocimientos técnicos.
        </p>

        <h3>Funciones disponibles</h3>
        <ul>
          <li>✉️ Enviar mensajes instantáneamente sin recargar la página.</li>
          <li>⚙️ Acceder a un panel de configuración para personalizar la experiencia.</li>
          <li>📖 Consultar esta sección de ayuda para conocer funciones y tecnologías.</li>
        </ul>
        <p>
          El sistema pretende un <strong>flujo lógico de conversación</strong> y actualiza los mensajes automáticamente,
          garantizando una experiencia fluida, limpia y ordenada.
        </p>
      </section >
      <section >
        <h2>💻 Tecnologias utilizadas</h2>
        <p>El desarrollo del chat se realizó utilizando tecnologías web modernas, priorizando la compatibilidad con navegadores actuales y dispositivos móviles.</p>
        <ul>
          <li><strong>HTML5</strong> → estructura base del sitio y jerarquía del contenido.</li>
          <li><strong>CSS3</strong> → estilos visuales, diseño responsivo y modo claro/oscuro.</li>
          <li><strong>JavaScript</strong> → lógica del chat, eventos y actualización dinámica</li>
          <li><strong>Framework</strong> → React</li>
          <li><strong>LocalStorage</strong> → almacenamiento temporal de mensajes y configuraciones</li>
        </ul>
        <p>
          Estas herramientas trabajan de forma conjunta para lograr una <strong>interfaz moderna, veloz, segura y adaptable</strong>,
          optimizada para computadoras, tablets y dispositivos móviles.
        </p>
      </section>
      <section>
        <h2>🚀 Posibles mejoras futuras</h2>
        <p>
          Con el objetivo de seguir ampliando las capacidades del sistema, se proyectan diversas <strong>mejoras y actualizaciones</strong> para futuras versiones del chat:
        </p>
        <ul>
          <li>🌗 Funcionalidad al cambiar el modo de visualización (claro u oscuro).</li>
          <li>🔔 Funcionalidad al cambiar el sonido (activado,silencioso o personalizado).</li>
          <li>🌐 Funcionalidad al cambiar idioma (español,ingles,portugues,japones, etc).</li>
          <li>👤 Autenticación de usuarios con nombre, correo o imagen de perfil.</li>
          <li>📢 Notificaciones en tiempo real para nuevos mensajes o eventos.</li>
          <li>😀 Incorporación de emojis, GIFs, archivos multimedia y notas de voz.</li>
          <li>💬 Chats múltiples o grupales con varios contactos simultáneos.</li>
          <li>🧠 Sistema de inteligencia artificial básica para asistencia o moderación.</li>
        </ul>

        <p>
          Cada mejora busca consolidar el chat como una <strong>plataforma completa de comunicación</strong>,
          versátil y moderna, en constante evolución.
        </p>
      </section>


      <p className="text-info"><Link to="/chat">Volver</Link></p>
    </main>
  )
}

export default Help