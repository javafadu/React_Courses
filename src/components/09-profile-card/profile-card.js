import React from 'react'
import "./profile-card.scss";

const ProfileCard = (props) => {

    const { name, location, shot, followers, following, avatar} = props;

    const img = require (`../../assets/img/${avatar}`);
    const profileBg = {backgroundImage: `url(${img})`}; 

  return (
    <div className='profile-card'>

        <div className='profile-header' style={profileBg}>
            
        </div>

        <div className='profile-content'>

            <div className='profile-avatar' style={profileBg}>
                
            </div>

            <h3>{name}</h3>
            <h5>{location}</h5>

            <div className='profile-stats'>
                <div>
                    <h2>{shot}</h2>
                    <span>Shot</span>
                </div>

                <div>
                    <h2>{followers}</h2>
                    <span>Followers</span>
                </div>

                <div>
                    <h2>{following}</h2>
                    <span>Following</span>
                </div>
            </div>

        </div>

    </div>
  )
}

export default ProfileCard