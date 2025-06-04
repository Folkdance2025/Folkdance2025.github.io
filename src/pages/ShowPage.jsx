import React from "react";
import BackHomeButton from "../components/BackHomeButton";

export default function ShowPage() {
  const tableStyle = {
    width: "100%",
    maxWidth: "900px",
    margin: "30px auto",
    borderCollapse: "collapse",
    border: "1px solid #ccc",
    fontSize: "1rem",
  };

  const thStyle = {
    border: "1px solid #ccc",
    padding: "12px",
    backgroundColor: "#f2f2f2",
    textAlign: "center",
    fontWeight: "bold",
  };

  const tdStyle = {
    border: "1px solid #ccc",
    padding: "12px",
    textAlign: "center",
  };

  return (
    <div style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1>世界民俗舞蹈匯演</h1>

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          fontSize: "1.05rem",
          lineHeight: "1.8",
          textAlign: "justify",
        }}
      >
        <p>
          每屆活動的重頭戲均為「世界民俗舞蹈匯演」，本活動充分展現各及社團平日例行活動的成果外，
          更有助於多層次的交流成效，相互的理解與協助就成為重要的交流成果。
          本次選定「金門文化局演藝廳」為民俗舞蹈匯演活動場地。
          預計邀請演出團體如表3，預計邀請參與的國家（地區）華人團體包括：
          台灣、金門、香港、新加坡、馬來西亞、印尼、中國大陸等。
        </p>

        <p style={{ fontWeight: "bold", textAlign: "center", marginTop: "40px" }}>
          表3、「世界民俗舞蹈匯演」預計邀請表演團體
        </p>
      </div>

      {/* 表格 */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>團體名稱</th>
            <th style={thStyle}>地區</th>
            <th style={thStyle}>備註</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>台中舞之心民俗舞蹈班</td>
            <td style={tdStyle}>台中</td>
            <td style={tdStyle}>歐光清老師</td>
          </tr>
          <tr>
            <td style={tdStyle}>高雄愉快的舞者</td>
            <td style={tdStyle}>高雄</td>
            <td style={tdStyle}>盧毓宏老師</td>
          </tr>
          <tr>
            <td style={tdStyle}>高雄風笛民俗舞團</td>
            <td style={tdStyle}>高雄</td>
            <td style={tdStyle}>林秋萍老師</td>
          </tr>
          <tr>
            <td style={tdStyle}>金門棠風舞蹈團</td>
            <td style={tdStyle}>金門</td>
            <td style={tdStyle}>邱驛棠老師</td>
          </tr>
          <tr>
            <td style={tdStyle}>紐西蘭毛利傳統火舞</td>
            <td style={tdStyle}>金門</td>
            <td style={tdStyle}>蕭海默老師</td>
          </tr>
          <tr>
            <td style={tdStyle}>香港才藝坊</td>
            <td style={tdStyle}>香港</td>
            <td style={tdStyle}>李光華老師</td>
          </tr>
          <tr>
            <td style={tdStyle}>香港康藝坊</td>
            <td style={tdStyle}>香港</td>
            <td style={tdStyle}>周全輝老師</td>
          </tr>
          <tr>
            <td style={tdStyle}>香港旭穎西方土風舞蹈團</td>
            <td style={tdStyle}>香港</td>
            <td style={tdStyle}>曾金全老師</td>
          </tr>
          <tr>
            <td style={tdStyle}>馬來西亞盈思舞蹈社</td>
            <td style={tdStyle}>馬來西亞</td>
            <td style={tdStyle}>吳國基老師</td>
          </tr>
          <tr>
            <td style={tdStyle}>莆田學院土風舞社</td>
            <td style={tdStyle}>莆田</td>
            <td style={tdStyle}>鄭若宜老師</td>
          </tr>
          <tr>
            <td style={tdStyle}>金門大學印尼生社團</td>
            <td style={tdStyle}>金門</td>
            <td style={tdStyle}>—</td>
          </tr>
        </tbody>
      </table>

      {/* 補充說明 */}
      <div
        style={{
          maxWidth: "900px",
          margin: "30px auto 0",
          fontSize: "1.05rem",
          lineHeight: "1.8",
          textAlign: "justify",
        }}
      >
        <p>＊團體若有增減再行調整。</p>
      </div>

      <BackHomeButton />
    </div>
  );
}
