import React from "react";
import BackHomeButton from "../components/BackHomeButton";
export default function ForumPage() {
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
      <h1 style={{ marginBottom: "20px" }}>一、世界民俗舞蹈國際論壇</h1>

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
          相較以往活動的不同處，本次活動增加以「世界民俗舞蹈在地傳承」為主題的國際論壇。
          有鑑於世界民俗舞蹈具有提升國際視野及促進世界民俗文化融合的重要意義，
          推廣在地民眾認識並且成為生活的一部分，有助於以上重要意義的提升。
        </p>
        <p>
          不過，以目前台灣的環境並不利於世界民俗舞蹈的推廣與傳承；
          因此，本次金門所主辦的活動規劃中特別加入「世界民俗舞蹈國際論壇」，期待透過全球華人及國際友人的寶貴見解及經驗，
          作為台灣改善推廣環境及傳承方式的重要參考，相關議程如表2。
        </p>

        <p style={{ fontWeight: "bold", textAlign: "center", marginTop: "40px" }}>
          表2、2025「世界民俗舞蹈國際論壇」議程表（2025/08/23）
        </p>
      </div>

      {/* 表格 */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>時間</th>
            <th style={thStyle}>議程</th>
            <th style={thStyle}>備註</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>08:30~09:00</td>
            <td style={tdStyle}>報到</td>
            <td style={tdStyle}>主辦單位</td>
          </tr>
          <tr>
            <td style={tdStyle}>09:00~09:20</td>
            <td style={tdStyle}>致詞</td>
            <td style={tdStyle}>主辦與貴賓致詞</td>
          </tr>
          <tr>
            <td style={tdStyle}>09:30~10:00</td>
            <td style={tdStyle}>主題發表（台灣）</td>
            <td style={tdStyle}>黃文宏老師</td>
          </tr>
          <tr>
            <td style={tdStyle}>10:00~10:10</td>
            <td style={tdStyle}>休息</td>
            <td style={tdStyle}>敬備餐點</td>
          </tr>
          <tr>
            <td style={tdStyle}>10:10~10:40</td>
            <td style={tdStyle}>主題發表（新／馬）</td>
            <td style={tdStyle}>吳國基老師（KK老師）</td>
          </tr>
          <tr>
            <td style={tdStyle}>10:50~11:20</td>
            <td style={tdStyle}>主題發表（台灣）</td>
            <td style={tdStyle}>彰化永靖國小 蘇月妙校長</td>
          </tr>
          <tr>
            <td style={tdStyle}>11:30~12:00</td>
            <td style={tdStyle}>主題發表（香港）</td>
            <td style={tdStyle}>預計邀請（劉定國老師）</td>
          </tr>
          <tr>
            <td style={tdStyle}>12:00~13:00</td>
            <td style={tdStyle}>午餐</td>
            <td style={tdStyle}>敬備便當</td>
          </tr>
          <tr>
            <td style={tdStyle}>13:00~14:00</td>
            <td style={tdStyle}>國際友人連線</td>
            <td style={tdStyle}>須文宏老師主持</td>
          </tr>
          <tr>
            <td style={tdStyle}>14:10~14:30</td>
            <td style={tdStyle}>論壇閉幕與宣言</td>
            <td style={tdStyle}>全體與會人士</td>
          </tr>
        </tbody>
      </table>

      {/* 結尾補充說明 */}
      <div
        style={{
          maxWidth: "900px",
          margin: "30px auto 0",
          fontSize: "1.05rem",
          lineHeight: "1.8",
          textAlign: "justify",
        }}
      >
        <p>
          上表為國際論壇規劃議程，與會人士將邀請全球華人相關社團、
          政府相關機構人員、駐華代表處人員及關心世界民俗舞蹈推廣傳承的朋友等。
        </p>
      </div>
      <BackHomeButton />
    </div>
  );
}
