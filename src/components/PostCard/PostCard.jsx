import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const PostCard = ({ post, handleLike, handleUnlike, handleSave, handleUnsave }) => {

  return (
    <Card
      sx={{
        maxWidth: "550px",
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
            <Link
              to={`/${post.user}/profile`}
              className="text-white"
              state={{ userid: post.user }}
            >
              <AccountCircleIcon />
            </Link>
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
        src={`http://localhost:8000/${post.image}`}
        alt="image"
      />

      <CardContent
        sx={{ color: "white", paddingBottom: 0, margin: "0 0 0 10px" }}
      >
        <span className="d-flex justify-content-between">
          <span className="d-flex" style={{ marginLeft: "-10px" }}>
            <Avatar
              sx={{ bgcolor: "transparent", cursor: "pointer" }}
              aria-label="like"
            >
              {post.has_liked === "false" ? (
                <FavoriteBorderIcon onClick={(e) => handleLike(post.post_id)} />
              ) : (
                <FavoriteIcon onClick={(e) => handleUnlike(post.post_id)} />
              )}
            </Avatar>
          </span>
          <Avatar
            sx={{ bgcolor: "transparent", cursor: "pointer" }}
            aria-label="save"
          >
            {post.has_saved === "false" ? (
                <BookmarkBorderIcon onClick={(e) => handleSave(post.post_id)} />
              ) : (
                <BookmarkIcon onClick={(e) => handleUnsave(post.post_id)} />
              )}
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

    </Card>
  );
};

export default PostCard;
