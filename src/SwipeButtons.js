import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseButton from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import Favoriteicon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipe-repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-left">
        <CloseButton fontSize="large" />
      </IconButton>
      <IconButton className="swipe-star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-right">
        <Favoriteicon fontSize="large" />
      </IconButton>
      <IconButton className="swipe-lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
