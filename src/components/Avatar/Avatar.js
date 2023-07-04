import React from 'react';
import PropTypes from 'prop-types';

import generateAvatar from 'utils/helper/generateAvatarFromHesh';
import './Avatar.scss';

const Avatar = ({ user }) => {
  // console.log(user);
  if (user.avatar) {
    return (
      <img
        className="avatar"
        src={user.avatar}
        alt={`Avatar ${user.fullname}`}
      />
    );
  } else {
    const { color, colorLighten } = generateAvatar(user._id);
    const firstChar = user.fullname
    console.log(firstChar);
    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`
        }}
        className="avatar avatar--symbol"
      >
        {firstChar}
      </div>
    );
  }
};

Avatar.propTypes = {
  className: PropTypes.string
};

export default Avatar;
