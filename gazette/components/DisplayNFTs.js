import * as React from 'react';
import styles from '../styles/Display.module.css'

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
    <div className={styles.nft_container}>{renderNfts()}</div>
  );
}
