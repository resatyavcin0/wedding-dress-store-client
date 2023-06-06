import React from "react";

//components
import CreditComponent from "./CreditComponent";
import FilterComponent from "../pendingPayments/FilterComponent";

const AllCreditsListComponent = ({
  allCredits,
  openGetPaymentModalHandler,
  openInvoiceModalHandler,
}) => {
  return (
    <>
      <FilterComponent />
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
          <CreditComponent
            openGetPaymentModalHandler={openGetPaymentModalHandler}
            openInvoiceModalHandler={openInvoiceModalHandler}
            key={key}
            credit={credit}
          />
        ))}
      </div>
    </>
  );
};

export default AllCreditsListComponent;
