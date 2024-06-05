import { READ_MORE_HOME_LOAN } from "@/constants";
import { theme } from "@/constants/basetheme";
import React from "react";
import { CloseButton, ModalContent, ModalOverlay } from "./Loan.styles";

const HomeLoanModal: React.FC<{ closeModal?: () => void }> = ({
  closeModal,
}) => {
  return (
    <ModalOverlay onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()} width={"767px"}>
        <CloseButton onClick={closeModal}>×</CloseButton>
        <div
          style={{
            padding: "35px 50px 35px 50px",
            borderRadius: "20px",
            border: "1px solid black",
            width: "92%",
            margin: "25px auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <p
            style={{
              fontFamily: theme.fonts.lato,
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            <span style={{ color: "#0173B0" }}>Confused</span> on which bank to
            choose for your Home Loan ?
          </p>
          <p
            style={{
              fontFamily: theme.fonts.lato,
              fontSize: 16,
              fontWeight: 400,
              margin: "15px 0",
            }}
          >
            Get Free Home Loan disbursed in 3 easy steps
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(3, 1fr)`,
              gridTemplateRows: "repeat(1, auto)",
              gap: "30px",
              marginTop: 15,
            }}
          >
            {READ_MORE_HOME_LOAN?.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 0,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <item.icon />
                    <p
                      style={{
                        fontFamily: theme.fonts.lato,
                        fontWeight: 400,
                        fontSize: 16,
                        textAlign: "center",
                        color: "#0173B0",
                        margin: "25px 0px",
                      }}
                    >
                      {item?.heading}
                    </p>
                  </div>
                  <p
                    style={{
                      fontFamily: theme.fonts.lato,
                      fontWeight: 400,
                      fontSize: 14,
                      textAlign: "center",
                      marginTop: "-5px",
                      color: "rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    {item?.subHeading}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default HomeLoanModal;
