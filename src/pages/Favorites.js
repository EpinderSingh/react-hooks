import { useContext } from 'react';

import FavoriteContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
  const favoriteCtx = useContext(FavoriteContext);

  let content;

  if (favoriteCtx.totalFavorites === 0) {
    content = <p>You got no favorite meetup yet, Please add some...</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorite</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
