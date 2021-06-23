import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import CheckIcon from '@material-ui/icons/Check';
import FavoriteIcon from '@material-ui/icons/Favorite'

import './swipeButton.css'

// Function for the buttons below cards
const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton>
                <ReplayIcon className="swipeButton_repeat" fontSize="large" />
            </IconButton>
            <IconButton>
                <CloseIcon className="swipeButton_left" fontSize="large" />
            </IconButton>
            <IconButton>
                <CheckIcon className="swipeButton_right" fontSize="large" />
            </IconButton>
            <IconButton>
                <FavoriteIcon className="swipeButton_fav" fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
