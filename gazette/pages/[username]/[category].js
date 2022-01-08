import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import styles from "../styles/Display.module.css";
import DisplayNFTs from "../components/DisplayNFTs";
import SwitchNav from "../components/SwitchNav";
import Dashboard from "../components/Dashboard";
import Mint from "../components/MintNFTs";
import Loans from "../components/Loans";
import axios from "axios";
import Web3 from "web3";
const drawerWidth = 240;

export default function ClippedDrawer({ data }) {
  // const options = ['Dashboard', 'NFT\'s', 'Mint NFt\'s', 'Loans'];
  const [option, setOption] = useState(<Dashboard coin={data} />);

  // var n=0;
  // console.log(data);

  const handleDisplayNFTClick = (e) => {
    e.preventDefault();
    setOption(<DisplayNFTs />);
  };

  const handleDashboardClick = (e) => {
    e.preventDefault();
    setOption(<Dashboard coin={data} />);
  };

  const handleMintNFTs = (e) => {
    e.preventDefault();
    setOption(<Mint />);
  };

  const handleLoans = (e) => {
    e.preventDefault();
    setOption(<Loans />);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h5" noWrap component="div">
            Gazette
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "none" }}>
          <List onClick={handleDashboardClick}>
            <ListItem button>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </List>

          <List onClick={handleDisplayNFTClick}>
            <ListItem button>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="NFTs" />
            </ListItem>
          </List>

          <List onClick={handleMintNFTs}>
            <ListItem button>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="MINT NFts" onClick={() => {}} />
            </ListItem>
          </List>

          <List onClick={handleLoans}>
            <ListItem button>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="LOANS(...pending)" onClick={() => {}} />
            </ListItem>
          </List>

          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {option}

        <SwitchNav />
      </Box>
    </Box>
  );
}

export async function getStaticProps(context) {

    // call database for category specific nfts


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

  //--------------------------------------------------
  const res = await axios(config);
  var data = res.data.balance;

  // if (!data) {
  //   return {
  //     notFound: true,
  //   }
  // }
  data = Web3.utils.fromWei(data, "ether");
  // console.log(data);
  return {
    props: { data }, // will be passed to the page component as props
  };
}
