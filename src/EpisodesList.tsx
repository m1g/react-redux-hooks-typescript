import React from "react";
import { IEpisode } from "./interfaces";

export default function EpisodesList(props: any): Array<JSX.Element> {
  const { episodes, toggleFavAction, favorites, store} = props;
  const { state, dispatch } = store

  return episodes.map((episode: any) => {
    return (
      <section className="episode-box" key={episode.id}>
        <img
          src={episode.image ? episode.image.medium : null}
          alt={`Rick and Morty ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {" "}
            Season: {episode.season} Number: {episode.number}
          </div>
          <button type="button" onClick={() => toggleFavAction(state, dispatch, episode)}>
            {favorites.find((fav: IEpisode) => fav.id === episode.id)
              ? "UnFav"
              : "Fav"}
          </button>
        </section>
      </section>
    );
  });
}
