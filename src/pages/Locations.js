import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../graphql/queries";
import Pagination from "../components/Pagination";

import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import Search from "../components/Search";

const Locations = () => {
  const [pages, setPages] = useState([]);
  const [newPage, setNewPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data, loading } = useQuery(GET_LOCATIONS, {
    variables: { page: newPage, name: search },
  });

  const prload = () => {
    let page = [];
    if (data) {
      let totalpages = data.locations.info.count / 20;
      for (let i = 1; i <= Math.ceil(totalpages); i++) {
        page = [...page, i];
      }
      setPages(page);
    }
  };

  useEffect(() => {
    prload();
  }, [data]);

  return (
    <div>
      <h3 className="text-center mt-3">Locations</h3>
      <Search setSearch={setSearch} />
      <div className="container my-5">
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <div className="row">
              {data?.locations?.results?.map((location, i) => (
                <div className="col-sm-12 col-lg-3">
                  <div className="card mb-3" key={i}>
                    <div className="card-body">
                      <h5
                        className="card-title d-inline-block text-truncate"
                        style={{ maxWidth: "200px" }}
                      >
                        {location.name}
                      </h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {location?.dimension}
                      </h6>
                      <br />
                      <h6>TotalResidents : {location?.residents?.length}</h6>
                      <br />
                      <Link
                        to={`/residents/${location?.id}`}
                        class="card-link mt-5 text-decoration-none text-info"
                      >
                        See all the residents...
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Pagination
              pages={pages}
              setNewPage={setNewPage}
              currpage={newPage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Locations;
