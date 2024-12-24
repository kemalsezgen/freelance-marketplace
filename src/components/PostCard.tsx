import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Collapse } from '@mui/material';

interface Comment {
  id: number,
  name: string,
  body: string
}
interface PostCardProps {
  id: number;
  title: string;
  body: string;
  comments: Comment[];
}

const PostCard: React.FC<PostCardProps> = ({ title, body, comments }) => {

  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments((prev) => !prev);
  };

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Box sx={{ margin: 1 }}>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>{title}</Typography>
          <Typography>{body}</Typography>
        </Box>

        <Box sx={{ marginTop: 1, marginBottom: 1 }}>
          <Button
            variant="text"
            onClick={toggleComments}
            sx={{ textTransform: 'none' }}
          >
            {showComments ? `Hide Comments (${comments.length})` : `Show Comments (${comments.length})`}
          </Button>
        </Box>

        <Collapse in={showComments} timeout="auto" unmountOnExit>
          <Box sx={{ marginLeft: 2, marginTop: 1, marginRight: 2 }}>
            {comments.map((comment) => (
              <Typography
                key={comment.id}
                variant="body2"
                sx={{ color: 'gray', marginBottom: 1 }}
              >
                - {comment.body}
              </Typography>
            ))}
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default PostCard;