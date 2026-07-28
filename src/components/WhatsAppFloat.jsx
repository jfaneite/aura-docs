export default function WhatsAppFloat() {
  return (
    <div className="whatsapp-float" role="complementary" aria-label="WhatsApp chat">
      <span className="whatsapp-tooltip">💬 Chat with us on WhatsApp</span>
      <a
        href="https://wa.me/15550000000?text=Hi!%20I%20want%20to%20learn%20more%20about%20Aura."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        id="whatsapp-float-btn"
        aria-label="Open WhatsApp chat with Aura team"
      >
        💬
      </a>
    </div>
  );
}
