"use client";

import { useEffect, useState } from "react";

const whatsapp = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20descobrir%20qual%20fragr%C3%A2ncia%20combina%20comigo.";

const fragrances = [
  { name: "Noir Impérial", family: "Amadeirado · Especiado", mood: "Presença magnética", notes: ["Bergamota negra", "Oud de Laos", "Âmbar mineral"], image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=88" },
  { name: "Velours Blanc", family: "Floral · Almíscar", mood: "Elegância sem esforço", notes: ["Íris pálida", "Jasmim sambac", "Musk de pele"], image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=88" },
  { name: "Or Solaire", family: "Âmbar · Floral", mood: "Luxo luminoso", notes: ["Mandarina verde", "Rosa centifolia", "Baunilha bourbon"], image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=88" },
];

const testimonials = [
  ["“Não perguntaram apenas qual perfume eu gostava. Entenderam a presença que eu queria deixar.”", "Marina A. · São Paulo"],
  ["“Chegou como uma joia. E o aroma permanece na roupa até o dia seguinte.”", "Eduardo M. · Curitiba"],
  ["“Finalmente encontrei uma fragrância que não encontro em todo lugar.”", "Luiza R. · Rio de Janeiro"],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function WhatsAppButton({ label = "Descobrir minha fragrância", light = false }: { label?: string; light?: boolean }) {
  return <a className={`button ${light ? "button-light" : ""}`} href={whatsapp} target="_blank" rel="noreferrer" aria-label={`${label} pelo WhatsApp`}><span>{label}</span><Arrow /></a>;
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      <nav className={scrolled ? "nav scrolled" : "nav"} aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="Maison Élance — início">MAISON <i>ÉLANCE</i></a>
        <div className="nav-links"><a href="#colecao">Coleção</a><a href="#ritual">O ritual</a><a href="#faq">Dúvidas</a></div>
        <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Consultoria privada <Arrow /></a>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-copy reveal">
          <p className="eyebrow">Alta perfumaria · curadoria privada</p>
          <h1>Antes que notem<br/>você, <em>sentirão.</em></h1>
          <p className="hero-sub">Fragrâncias raras para transformar presença em memória. Escolha menos. Escolha algo impossível de esquecer.</p>
          <div className="hero-actions"><WhatsAppButton/><a className="text-link" href="#colecao">Explorar a coleção <span>↓</span></a></div>
        </div>
        <div className="hero-index"><span>01</span><div/><span>03</span></div>
        <p className="vertical-copy">EXTRAIT DE PARFUM · SÃO PAULO</p>
      </section>

      <section className="statement section-pad">
        <p className="kicker">A assinatura que não se vê</p>
        <h2>Perfume não é um detalhe.<br/>É a sua <em>presença invisível.</em></h2>
        <p className="statement-copy">Selecionamos composições de alta concentração, matérias-primas nobres e evolução surpreendente na pele. Porque luxo verdadeiro não anuncia. Ele permanece.</p>
        <div className="principles"><div><strong>24h</strong><span>de evolução olfativa*</span></div><div><strong>30%</strong><span>de concentração extrait</span></div><div><strong>1:1</strong><span>curadoria personalizada</span></div></div>
      </section>

      <section className="collection" id="colecao">
        <div className="section-head section-pad"><div><p className="kicker">Les signatures</p><h2>Três formas de<br/><em>ser inesquecível.</em></h2></div><p>Não escolha apenas pelas notas. Escolha pela sensação que deseja deixar quando sair do ambiente.</p></div>
        <div className="fragrance-grid">
          {fragrances.map((f, i) => <article className="fragrance-card" key={f.name}>
            <div className="card-image"><img src={f.image} alt={`Frasco de perfume ${f.name} em composição editorial`} loading={i ? "lazy" : "eager"}/><span>0{i+1}</span><div className="card-overlay"/></div>
            <div className="card-info"><p>{f.family}</p><h3>{f.name}</h3><span>{f.mood}</span><ul>{f.notes.map(n => <li key={n}>{n}</li>)}</ul><a href={whatsapp} target="_blank" rel="noreferrer">Quero sentir esta assinatura <Arrow /></a></div>
          </article>)}
        </div>
      </section>

      <section className="notes section-pad" id="ritual">
        <div className="notes-art"><span className="orb orb-one"/><span className="orb orb-two"/><span className="orb orb-three"/><p>O aroma muda.<br/>A impressão fica.</p></div>
        <div className="notes-copy"><p className="kicker">Arquitetura olfativa</p><h2>Uma história contada<br/>em <em>três atos.</em></h2>
          <div className="note-row"><span>01</span><div><h3>A chegada</h3><p>Cítricos raros e especiarias abrem a composição com brilho e tensão. É o primeiro olhar.</p></div><small>0—30 min</small></div>
          <div className="note-row"><span>02</span><div><h3>A intimidade</h3><p>Flores, madeiras e resinas surgem quando a fragrância encontra o calor da sua pele.</p></div><small>1—6 h</small></div>
          <div className="note-row"><span>03</span><div><h3>A memória</h3><p>Âmbar, musk e oud deixam um rastro sofisticado. A parte de você que permanece.</p></div><small>6—24 h</small></div>
        </div>
      </section>

      <section className="concierge section-pad">
        <p className="kicker">Concierge olfativo</p><h2>Seu perfume não deveria<br/>ser escolhido por acaso.</h2>
        <div className="steps"><div><span>01</span><h3>Conte quem você é</h3><p>Em uma conversa breve, entendemos seu estilo, rotina e a impressão que deseja criar.</p></div><div><span>02</span><h3>Receba sua curadoria</h3><p>Indicamos assinaturas alinhadas à sua pele, personalidade e ocasião.</p></div><div><span>03</span><h3>Vista sua presença</h3><p>Você recebe sua escolha em embalagem de ritual, pronta para marcar uma nova fase.</p></div></div>
        <WhatsAppButton label="Iniciar minha curadoria" light />
      </section>

      <section className="comparison section-pad">
        <div><p className="kicker">A diferença está no silêncio</p><h2>Comum é ser<br/>percebido.<br/><em>Raro é ser lembrado.</em></h2></div>
        <div className="compare-table"><div className="compare-row header"><span>Experiência</span><span>Perfume comum</span><span>Maison Élance</span></div>{[["Escolha","Por tendência","Por identidade"],["Concentração","Eau de parfum","Extrait 30%"],["Evolução","Linear","Três atos na pele"],["Atendimento","Prateleira","Curadoria privada"],["Impressão","Familiar","Inconfundível"]].map(r=><div className="compare-row" key={r[0]}>{r.map((c,i)=><span className={i===2?"gold":""} key={c}>{i===2 && "✦ "}{c}</span>)}</div>)}</div>
      </section>

      <section className="reviews section-pad"><div className="review-top"><div><p className="kicker">Impressões reais</p><h2>Histórias que<br/><em>ficaram no ar.</em></h2></div><div className="rating"><strong>4.9</strong><span>★★★★★</span><small>Mais de 480 experiências</small></div></div><div className="review-grid">{testimonials.map((t,i)=><blockquote key={t[1]}><span>0{i+1}</span><p>{t[0]}</p><cite>{t[1]}</cite></blockquote>)}</div></section>

      <section className="guarantee section-pad"><p className="monogram">É</p><div><p className="kicker">Nossa promessa</p><h2>O luxo de escolher<br/><em>sem hesitar.</em></h2><p>Sua experiência é protegida pela nossa Garantia de Encantamento. Se a fragrância não traduzir você como esperava, nossa curadoria encontra uma nova assinatura.</p><ul><li>✓ Autenticidade garantida</li><li>✓ Embalagem premium</li><li>✓ Curadoria pós-compra</li></ul><WhatsAppButton label="Falar com uma especialista"/></div></section>

      <section className="faq section-pad" id="faq"><div><p className="kicker">Entre nós</p><h2>Perguntas antes<br/>do primeiro <em>encontro.</em></h2></div><div className="faq-list">{[
        ["Como funciona a curadoria pelo WhatsApp?","Uma especialista faz perguntas breves sobre estilo, ocasiões, perfumes já usados e a presença que você quer transmitir. A partir disso, apresenta uma seleção precisa — sem pressão e sem respostas automáticas."],
        ["As fragrâncias são originais?","Sim. Trabalhamos apenas com fragrâncias autênticas, procedência verificada e armazenamento cuidadoso para preservar cada composição."],
        ["Qual é a fixação dos perfumes?","Nossa seleção privilegia extraits e eaux de parfum de alta concentração. A performance varia com a pele e o clima, mas a curadoria considera exatamente esses fatores."],
        ["Posso presentear mesmo sem conhecer o gosto da pessoa?","Sim. Criamos uma curadoria de presente a partir da personalidade, estilo e momento de quem vai receber. A embalagem transforma a entrega em um ritual."],
        ["Vocês enviam para todo o Brasil?","Sim. Cada pedido viaja protegido, com rastreamento e apresentação premium, para que a experiência comece antes de abrir a caixa."],
      ].map(([q,a])=><details key={q}><summary>{q}<span>＋</span></summary><p>{a}</p></details>)}</div></section>

      <section className="final-cta"><div className="final-bg"/><div className="final-shade"/><div className="final-content"><p className="kicker">Uma escolha. Uma assinatura.</p><h2>Há fragrâncias que<br/>completam o look.<br/><em>Esta completa você.</em></h2><p>Converse com nossa concierge e descubra a composição que diz quem você é — antes da primeira palavra.</p><WhatsAppButton label="Descobrir minha assinatura"/></div></section>

      <footer><a className="brand" href="#inicio">MAISON <i>ÉLANCE</i></a><p>Alta perfumaria para presenças inesquecíveis.</p><div><a href="#colecao">Coleção</a><a href="#ritual">Curadoria</a><a href="#faq">FAQ</a><a href={whatsapp}>WhatsApp</a></div><small>© 2026 Maison Élance. Todos os direitos reservados.</small></footer>
      <a className="floating-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar agora pelo WhatsApp"><span>Falar agora</span><b>◔</b></a>
    </main>
  );
}
