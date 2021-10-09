import { useQuery } from "@apollo/client";
import React from "react";
import Loading from "../components/Loading";
import ResidentsCard from "../components/ResidentsCard";
import { GET_RESIDENTS } from "../graphql/queries";

const Residents = ({ match }) => {
  const { data, loading } = useQuery(GET_RESIDENTS, {
    variables: { id: match.params.id },
  });

  return (
    <div>
      <h3 className="text-center mt-3">
        Here are all the residents for Location{" "}
        <span className="text-warning">{data?.location?.name}</span>
      </h3>

      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="container my-5">
            <div className="row g-4">
              {data?.location?.residents?.map((resident, i) => (
                <div className="col-sm-12 col-lg-3" key={i}>
                  <ResidentsCard resident={resident} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Residents;
