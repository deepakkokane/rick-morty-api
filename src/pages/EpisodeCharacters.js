import { useQuery } from "@apollo/client";
import React from "react";
import CharacterCard from "../components/CharacterCard";
import Loading from "../components/Loading";
import { GET_EPISODES_CHARACTERS } from "../graphql/queries";

const EpisodeCharacters = ({ match }) => {
  const { data, loading } = useQuery(GET_EPISODES_CHARACTERS, {
    variables: { id: match.params.id },
  });

  return (
    <div>
      <h3 className="text-center mt-3">
        Here are all the characters from episode{" "}
        <span className="text-warning">{data?.episode?.name}</span>
      </h3>

      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="container my-5">
            <div className="row g-4">
              {data?.episode?.characters?.map((character, i) => (
                <div className="col-sm-12 col-lg-3" key={i}>
                  <CharacterCard character={character} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EpisodeCharacters;
