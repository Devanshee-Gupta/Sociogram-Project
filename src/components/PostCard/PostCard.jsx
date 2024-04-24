import React from "react";
import {Link} from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const PostCard = ({ post }) => {
  return (
    <Card
      sx={{
        maxWidth: "700px",
        bgcolor: "transparent",
        color: "white",
        border: "0.5px solid #666363",
        borderRadius: "10px",
        marginBottom: "30px",
        boxShadow: "-1px 2px 5px #666363, 1px -2px 5px #666363",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "transparent", cursor: "pointer" }}
            aria-label="profile"
          >
            <Link to={'/1/profile'} className="text-white">
            <AccountCircleIcon />
            </Link>
          </Avatar>
        }
        action={
          <Avatar
            sx={{ bgcolor: "transparent", cursor: "pointer" }}
            aria-label="settings"
          >
            <MoreHorizIcon />
          </Avatar>
        }
        title={post.post_username}
        subheader={<span className="text-white-50">{post.create_time}</span>}
      />
      <hr className="mt-0" />
      <CardMedia
        component="img"
        height="auto"
        width="100%"
        style={{ maxHeight: "400px" }}
        src={post.image}
        alt="image"
      />

      <CardContent sx={{ color: "white", paddingBottom: 0 }}>
        <span className="d-flex justify-content-between">
          <span className="d-flex">
            <Avatar
              sx={{ bgcolor: "transparent", cursor: "pointer" }}
              aria-label="like"
            >
              <FavoriteBorderIcon />
            </Avatar>
            <Avatar
              sx={{ bgcolor: "transparent", cursor: "pointer" }}
              aria-label="comment"
            >
              <ChatBubbleOutlineIcon />
            </Avatar>
            <Avatar
              sx={{ bgcolor: "transparent", cursor: "pointer" }}
              aria-label="share"
            >
              <ShareIcon />
            </Avatar>
          </span>
          <Avatar
            sx={{ bgcolor: "transparent", cursor: "pointer" }}
            aria-label="save"
          >
            <BookmarkBorderIcon />
          </Avatar>
        </span>
        <Typography variant="body2" color="white">
          {post.no_of_likes} likes
        </Typography>

        <div className="mt-2 d-flex text-white">
          <span className="me-2">{post.post_username}</span>
          <span className="text-white-50">{post.caption}</span>
        </div>
      </CardContent>

      <CardContent sx={{ padding: "10px 0 0 16px" }}>
        <Typography
          variant="body2"
          color="white"
          sx={{
            bgcolor: "transparent",
            display: "block",
            fontSize: "1rem",
            margin: "0 10px 0 0",
            width: "100%",
          }}
        >
          Comments
        </Typography>
        <Typography variant="div">
          {post.comments &&
            post.comments.map((comment) => {
              return (
                <div key={comment.comment_id}>
                  <span className="text-white-50 me-2">
                    {comment.comment_username}
                  </span>
                  <span
                    className="text-white-75"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {comment.commented_text}
                  </span>
                </div>
              );
            })}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
