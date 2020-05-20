import React from "react"

export const Abstract = () => {
  return (
    <div className="abst-wrap">
      <div className="abst-col">
        <h1>増上寺</h1>
        <h3>Zojoji</h3>
        <p>
          浄土宗の七大本山の一つ。明徳4年（1393）に、酉誉聖聰（ゆうよしょうそう）上人によって、現在の千代田区平河町付近の地に創建された。徳川家の菩提寺となり、慶長3年（1598）現在の芝の地へ移転、徳川幕府の手厚い保護のもと、隆盛を極めた。境内には、徳川将軍家の墓所や、江戸時代初期の面影を残す三解脱門がある。さらに、徳川家ゆかりの文化財や狩野一信筆の五百羅漢図などを所蔵しており、それらの一部を宝物展示室で公開している。{" "}
        </p>
      </div>
      <div className="abst-col">
        <img src="http://cul-narra.jp/img/card/card4.JPG" alt="aa"></img>
      </div>

      <style jsx>{`
        .abst-wrap {
          display: grid;
          grid-template-columns: auto 676px;
          padding-bottom: 60px;
        }
      `}</style>
    </div>
  )
}
