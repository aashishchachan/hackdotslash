import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import styles from '../styles/Display.module.css'
import DisplayNFTs from '../components/DisplayNFTs'
const drawerWidth = 240;

export default function ClippedDrawer() {
    const props = {
        res: {
            nfts: [{
                chain_id:1,
                id:1,
            },{
                chain_id:1,
                id:1,
            },{
                chain_id:1,
                id:1,
            },{
                chain_id:1,
                id:1,
            }]
        }
    }
    function renderNfts() {
        return (
          <div className={styles.masonry}>
            {props.res?.nfts?.map((item) => {
              let img_src;
              if (item.chain_id === 1) {
                img_src = "/icons/eth_logo.png";
              } else if (item.chain_id === 56) {
                img_src = "/icons/bsc_logo.png";
              } else {
                img_src = "/icons/polygon_logo.png";
              }
    
              const {
                token_address,
                token_id,
                chain_id,
                token_uri,
                metadata_storage,
                media_storage,
              } = item;
              const productLink = `/profile/${props.res.profileid}/${token_address}/${token_id}?chainid=${chain_id}`;
    
              const icon_display = function () {
                if (metadata_storage === "ipfs") {
                  return (
                    <div className={styles.tooltip}>
                      <a href={token_uri} target="_blank">
                        <img className={styles.img} src="/icons/ipfs.png" />
                      </a>
                      <span className={styles.tooltiptext}>View on IPFS</span>
                    </div>
                  );
                } else {
                  return (
                    <div className={styles.tooltip}>
                      <a href={token_uri} target="_blank">
                        <img className={styles.img} src="/icons/unknown.png" />
                      </a>
                      <span className={styles.tooltiptext}>View on Central</span>
                    </div>
                  );
                }
              };
              return (
                <>
                  <a key={item.id} className={styles.mItem} href={productLink}>
                    <div className={styles.nft_user}>
                      <div className={styles.nft_title}>
                        <div>Anubhav Singh</div>
                      </div>
                      <div className={styles.nft_platform}>
                        {icon_display()}
    
                        <img src={img_src} />
                      </div>
                    </div>
                    {/*item.uri_meta_data.animation_url && (
                      <iframe
                        src={item.uri_meta_data.animation_url}
                        width="320"
                        height="240"
                        controls
                      />
                    )*/}
                    <div>
                      <img
                        src="/icons/no_image.jpeg"
                        alt="Error displaying image"
                        //  onClick={productRedirect(productLink)}
                      />
                    </div>
                    <div className={styles.nft_social}>
                      {/* <div className={styles.like_comment}>
                                      <img src="icons/Like.svg" />
                                      <div>92</div>
                                    </div>
                                    <div className={styles.like_comment}>
                                      <img src="icons/Comment.svg" />
                                      <div>92</div>
                                    </div> */}
                    </div>
                  </a>
                </>
              );
            })}
          </div>
        );
      }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <DisplayNFTs />
      </Box>
    </Box>
  );
}
