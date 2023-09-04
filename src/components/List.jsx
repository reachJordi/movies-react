import PropTypes from 'prop-types';
const List = ({ data }) => {
    return (
        <div>
          {data.map((anime) => (
            <div key={anime._id} className="anime-card">
              <h2>{anime.title}</h2>
              <p>Alternative Titles: {anime.alternativeTitles.join(', ')}</p>
              <p>Ranking: {anime.ranking}</p>
              <p>Genres: {anime.genres.join(', ')}</p>
              <p>Episodes: {anime.episodes}</p>
              <p>Status: {anime.status}</p>
              <p>Synopsis: {anime.synopsis}</p>
              <a href={anime.link}>More Info</a>
              <img src={anime.image} alt={anime.title} />
            </div>
          ))}
        </div>
      );
  }

  List.propTypes = {
    data: PropTypes.array.isRequired,
  };

  export default List
  