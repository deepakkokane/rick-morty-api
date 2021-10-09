import { useQuery } from "@apollo/client";
import React from "react";
import Loading from "../components/Loading";
import { GET_CHARACTER } from "../graphql/queries";

const CharacterInfo = ({ match }) => {
  const { data, loading } = useQuery(GET_CHARACTER, {
    variables: { id: match.params.id },
  });

  return (
    <div>
      <div className="container my-5">
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <div className="row gy-2">
              <div className="col-lg-4 col-sm-12">
                <div className="card">
                  <img
                    src={data?.character?.image}
                    alt=""
                    className=" rounded img-fluid mx-auto d-block w-100"
                  />
                  <div className="card-body">
                    <h2 className=" card-title mt-3">
                      {data?.character?.name}
                    </h2>
                    <h4 className="card-subtitle text-muted">
                      {data?.character?.status}
                    </h4>
                    <br />
                    <span className="card-text">
                      Gender : {data?.character?.gender}
                    </span>
                    <br />
                    <span className="card-text">
                      Species : {data?.character?.species}
                    </span>
                    <br />
                    <span className="card-text">
                      Type : {data?.character?.type}
                    </span>

                    <div className="ms-auto mt-3">
                      <span>
                        Location : {data?.character?.origin?.type}{" "}
                        {data?.character?.origin?.name}
                      </span>
                      <br />
                      <span>
                        Dimension : {data?.character?.origin?.dimension}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-sm-12 offset-lg-1">
                <ul className="list-group">
                  <li className="list-group-item disabled">
                    <h3>Episodes of {data?.character?.name}</h3>
                  </li>
                  {data?.character?.episode?.map((e, i) => (
                    <li className="list-group-item" key={i}>
                      {e.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CharacterInfo;
