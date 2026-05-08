import { Star } from 'lucide-react';

export default function Reviews({ reviews }) {
  return (
    <section className="glass-card reviews-card">
      <div className="section-heading slim">
        <div>
          <p className="eyebrow">Community</p>
          <h2>Recensioni utenti</h2>
        </div>
      </div>
      <div className="review-list">
        {reviews.map((review) => (
          <article className="review" key={review.name}>
            <img src={review.avatar} alt={review.name} />
            <div>
              <div className="review-top">
                <strong>{review.name}</strong>
                <span>{review.date}</span>
              </div>
              <div className="mini-stars">
                {Array.from({ length: review.rating }).map((_, idx) => <Star key={idx} size={13} fill="currentColor" />)}
              </div>
              <p>{review.comment}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
