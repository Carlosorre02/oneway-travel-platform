export default function AuthorTips({ author }) {
  return (
    <section className="glass-card author-tip">
      <div className="section-heading slim">
        <div>
          <p className="eyebrow">Travel insight</p>
          <h2>Consigli dell’autore</h2>
        </div>
      </div>
      <div className="tip-body">
        <img src={author.avatar} alt={`Avatar ${author.name}`} />
        <blockquote>“{author.quote}”</blockquote>
      </div>
    </section>
  );
}
