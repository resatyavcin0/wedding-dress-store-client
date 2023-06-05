import React from "react";

//components
import CreditComponent from "./CreditComponent";

const AllCreditsListComponent = ({ allCredits }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 340px)",
        justifyContent: "center",
        marginTop: 40,
        gap: 20,
      }}
    >
      {allCredits?.map((credit, key) => (
        <CreditComponent key={key} credit={credit} />
      ))}
    </div>
  );
};

export default AllCreditsListComponent;
