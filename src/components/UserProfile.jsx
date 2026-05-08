import { Star } from 'lucide-react';

export default function UserProfile({ author }) {
  return (
    <div className="user-profile">
      <img src={author.avatar} alt={`Foto profilo di ${author.name}`} />
      <div>
        <div className="profile-line">
          <h2>{author.name}</h2>
          <span className="badge">{author.badge}</span>
        </div>
        <p>{author.routes} percorsi pubblicati · {author.followers.toLocaleString('it-IT')} follower</p>
        <div className="rating-row" aria-label={`Rating ${author.rating} su 5`}>
          {[1,2,3,4,5].map((i) => <Star key={i} size={17} fill="currentColor" />)}
          <strong>{author.rating}</strong>
          <span>({author.reviews} recensioni)</span>
        </div>
      </div>
    </div>
  );
}
