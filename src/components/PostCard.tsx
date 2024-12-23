import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

interface PostCardProps {
  id: number;
  title: string;
  body: string;
  onShowComments: (postId: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, body, onShowComments }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography>{body}</Typography>
        <Button
          variant="outlined"
          sx={{ marginTop: 1 }}
          onClick={() => onShowComments(id)}
        >
          Show Comments
        </Button>
      </CardContent>
    </Card>
  );
};

export default PostCard;