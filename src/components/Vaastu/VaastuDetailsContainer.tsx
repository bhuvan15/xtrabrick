import React from "react";
import { theme } from "@/constants/basetheme";
const VaastuDetailsContainer: React.FC<{ data: any[], columns?: number }> = ({ data, columns = 2 }) => {
  return (
    <div
      style={{
        padding: columns === 3 ? "30px 45px 0px 45px" : '30px 45px',
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: "repeat(2, auto)",
        gap: "50px",
        borderRadius: "20px",
        border: "1px solid black",
        width: "92%",
        margin: "25px auto",
      }}
    >
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: columns=== 3 ? 0  : 20,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <item.icon />
              <p
                style={{
                  marginLeft: "45px",
                  fontFamily: theme.fonts.lato,
                  fontWeight: 700,
                  fontSize: 20,
                }}
              >

                {item?.title}
              </p>
            </div>
            <p
              style={{
                fontFamily: theme.fonts.lato,
                fontWeight: 400,
                fontSize: 18,
                width: "75%",
                marginTop: 10,
              }}
            >
              {item?.description}
            </p>
            <ul style={{marginTop: 4}}>
              {item?.info?.map((info: string, i: number) => {
                return (
                  <li
                    key={i}
                    style={{
                      fontFamily: theme.fonts.lato,
                      fontWeight: 400,
                      fontSize: 18,
                      marginLeft: 17,
                      marginTop: 2,
                    }}
                  >
                    {info}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default VaastuDetailsContainer;