import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../graphql/queries";
import Pagination from "../components/Pagination";
import EpisodeCard from "../components/EpisodeCard";
import Loading from "../components/Loading";
import Search from "../components/Search";

const Home = () => {
  const [pages, setPages] = useState([]);
  const [search, setSearch] = useState("");
  const [newPage, setNewPage] = useState(1);
  const [pagintedData, setPagintedData] = useState([]);
  const { data, loading } = useQuery(GET_EPISODES, {
    variables: { page: newPage, name: search },
  });

  const preload = () => {
    let page = [];
    if (data) {
      let totalpages = data.episodes.info.count / 20;
      for (let i = 1; i <= Math.ceil(totalpages); i++) {
        page = [...page, i];
      }
      setPages(page);
    }
    setPagintedData(data?.episodes?.results);
  };

  useEffect(() => {
    preload();
  }, [data]);

  return (
    <div>
      <h3 className="text-center mt-3">Episodes</h3>

      <Search setSearch={setSearch} />
      <div className="container my-5">
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <div className="row">
              {pagintedData?.map((episode, i) => (
                <div className="col-lg-3 col-sm-12 " key={i}>
                  <EpisodeCard episode={episode} />
                </div>
              ))}
            </div>
            <Pagination pages={pages} setNewPage={setNewPage} />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
