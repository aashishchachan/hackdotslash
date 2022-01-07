// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async function handler(req, res) {
  
  const config = {
    method: "get",
    url: "https://deep-index.moralis.io/api/v2/0x057Ec652A4F150f7FF94f089A38008f49a0DF88e/balance?chain=rinkeby",
    headers: {
      accept: "application/json",
      "X-API-Key":
        "xmwUXdWkDCSAAPK3RR84RolJ4JPYKLEvvC48ojHZvxoPKFeYeiGl1Q09WZYXVAW8",
    },
    params: {
      address: "0xcf1443227C640163EDEaAD05f43B1b116863Bf1f",
    },
  };
  const resp = await axios(config);
  const data = resp.data;
  console.log(resp.data);
  res.status(200).json({data})
}
