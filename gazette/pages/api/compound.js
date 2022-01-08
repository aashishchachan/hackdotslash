// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
    const d = await fetch("https://api.compound.finance/api/v2/account");
    // const d =await fetch(
    //   "https://api.compound.finance/api/v2/account?addresses[]=0xcf1443227C640163EDEaAD05f43B1b116863Bf1f"
    // );
    console.log(d);
    //   const config = {
//     method: "get",
//     url: "https://api.compound.finance/api/v2/account?addresses=0xcf1443227C640163EDEaAD05f43B1b116863Bf1f",
//     // data: {
//     //   addresses: ["0xcf1443227C640163EDEaAD05f43B1b116863Bf1f"], // returns all accounts if empty or not included
//     //   network: "rinkbey"
//     //   // "block_number": 0 // returns latest if given 0
//     //   // "max_health": { "value": "10.0" }
//     //   // "min_borrow_value_in_eth": { "value": "0.002" }
//     //   // "page_number": 1
//     //   // "page_size": 10
//     // },
    headers: {
      accept: "application/json",
      "X-API-Key":
        "xmwUXdWkDCSAAPK3RR84RolJ4JPYKLEvvC48ojHZvxoPKFeYeiGl1Q09WZYXVAW8",
    },
//     params: {
//       addresses: ["0xcf1443227C640163EDEaAD05f43B1b116863Bf1f"], // returns all accounts if empty or not included
//       network: "rinkbey",
//     },
//   };
//   const resp = await axios(config);
//   const data = resp.data;
//   console.log(resp);
  res.status(200).json({ d });
}
