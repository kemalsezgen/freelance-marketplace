import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Button,
  Box,
} from '@mui/material';
import { USERS_URL, POSTS_URL } from '../constants';

interface Freelancer {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  city: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

const Portfolio: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [freelancer, setFreelancer] = useState<Freelancer | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const freelancerResponse = await axios.get(USERS_URL);
        const user = freelancerResponse.data;

        setFreelancer({
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          website: user.website,
          city: user.address.city,
        });

        const postsResponse = await axios.get(POSTS_URL);
        setPosts(postsResponse.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <CircularProgress />;

  if (!freelancer) return <Typography>No Freelancer Found</Typography>;

  return (
    <Box padding={2}>
      <Card sx={{ marginBottom: 2 }}>
        <CardContent>
          <Typography variant="h4">{freelancer.name}</Typography>
          <Typography>Email: {freelancer.email}</Typography>
          <Typography>Phone: {freelancer.phone}</Typography>
          <Typography>Website: {freelancer.website}</Typography>
          <Typography>City: {freelancer.city}</Typography>
        </CardContent>
      </Card>

      <Typography variant="h5" gutterBottom>
        Past Jobs
      </Typography>
      {posts.map((post) => (
        <Card key={post.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">{post.title}</Typography>
            <Typography>{post.body}</Typography>
            <Button
              variant="outlined"
              sx={{ marginTop: 1 }}
              onClick={() => alert(`Fetching comments for post ${post.id}`)}
            >
              Show Comments
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Portfolio;