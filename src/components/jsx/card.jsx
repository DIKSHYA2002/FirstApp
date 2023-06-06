import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaRegComment} from 'react-icons/fa'
import {IoIosShareAlt} from 'react-icons/io'
import {GiSaveArrow} from 'react-icons/gi'
import {BsFillBookmarkFill} from 'react-icons/bs'
import '../css/card.css';

const Card = ({profileImage,location,time,username,postimage,caption}) => {
    return (
        <>
        <div className="feeds">
            <div className="stories">
                <div className="story"><img src={profileImage
                } alt="" /></div>
                <div className="story"><img src={profileImage} alt="" /></div>
                <div className="story"><img src={profileImage} alt="" /></div>
                <div className="story"> <img src={profileImage} alt="" /></div>
                <div className="story"><img src={profileImage} alt="" /></div>
            </div>
        <div className="cards">
                <div className="profile-head">
                    <div className="profile-image"><img src={profileImage} alt="" /></div>
                    <div className="name-location">
                    <div className="username">{username}
                    <div className="post-time">.{time}</div></div>
                    <div className="location">{location}</div>
                    </div>
                  
                </div>
                <div className="profile-middle">
                    <div className="post-image">
                        <img src={postimage} alt="" />
                    </div>
                    <div className="dots">
                        <div className="dot1"></div>
                        <div className="dot1"></div>
                        <div className="dot1"></div>
                    </div>
                    <div className="activity">
                        <div className="left">
                            <div className="like i">
                            <AiOutlineHeart/>
                            </div>
                            <div className="comments i">
                            <FaRegComment/>
                            </div>
                            <div className="share i">
                            <IoIosShareAlt/>
                            </div>
                        </div>
                        <div className="right">
                            <div className="save i">
                             <BsFillBookmarkFill/>
                            </div>
                        </div>
                    </div>
                    <div className="profile-foot">
                        <span className="username">{username}</span>
                        <span className="caption">{caption}</span>
                    </div>
                    
                </div>
            </div>
        </div>
           
        </>
    )
}

export default Card