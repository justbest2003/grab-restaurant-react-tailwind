import React from "react";
import Card from "./Card";

const Restaurant = () => {
  const restos = [
    {
      img: "https://food-cms.grab.com/compressed_webp/merchants/3-C2WBTFNDL7N3ET/hero/bbae508d9c4d4c61b1dba2b7c91fc92c_1633520231357344265.webp",
      title: "ครัวลุงหนวด - รพ.ศิริราช",
      type: "ข้าวหน้า",
    },
    {
      img: "https://food-cms.grab.com/compressed_webp/merchants/3-C2VTJ65JGYK3G2/hero/f27d708fdbb24ba395df8bdac8fcce61_1625058003058679289.webp",
      title: "กระเพาะปลา - ถ.มหรรณพ",
      type: "อาหารเส้น",
    },
    {
      img: "https://food-cms.grab.com/compressed_webp/merchants/3-C3N1AYWZRUMUMA/hero/0fe45325a84041b890def1efc7e6c759_1659705676773566316.webp",
      title: "โจ๊กสามย่าน - เสาชิงช้า",
      type: "โจ๊ก",
    },
    {
      img: "https://food-cms.grab.com/compressed_webp/merchants/3-CZJGJ7NEGT4WHA/hero/c7d1d2e1d92a46088a3f22e2d63b3c67_1590731833809595065.webp",
      title: "ข้าวมันไก่ตี 2 วัดบางยี่ขัน - ถนนอรุณอมรินทร์",
      type: "อาหารตามสั่ง",
    },
    {
      img: "https://food-cms.grab.com/compressed_webp/merchants/3-C36WVBUFSF5GEX/hero/8f457a47-af84-43e6-ac68-f1942276984f__store_cover__2023__03__21__11__06__48.webp",
      title: "ต้มเลือดหมูศาลเจ้าพ่อเสือ - ศาลเจ้าพ่อเสือ",
      type: "ฟาสต์ฟู้ด",
    },
    {
      img: "https://food-cms.grab.com/compressed_webp/merchants/3-C6LJT3J3CBBAC2/hero/54dc7816a17a4673ac5c3348b5dc75cb_1715066804297370214.webp",
      title: "ปิ้งย่าง​24ช.ม. - ศาลปกครอง ชุมแพ",
      type: "ฟาสต์ฟู้ด",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {restos.map((resto, index) => (<Card key={index} img={resto.img} title={resto.title} type={resto.type} />))}
    </div>
  );
};

export default Restaurant;
