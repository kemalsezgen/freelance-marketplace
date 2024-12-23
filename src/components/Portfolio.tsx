import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Typography,
  CircularProgress,
  Box,
  Grid,
} from '@mui/material';
import { USERS_URL, POSTS_URL } from '../constants';
import PostCard from './PostCard';
import UserInfo from './UserInfo';

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
        console.log("freelancerResponse:", freelancerResponse);
        const users = freelancerResponse.data;

        const user = users.find((u: any) => u.id === parseInt(id!));

        if (user) {
          setFreelancer({
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            website: user.website,
            city: user.address?.city,
          });
        } else {
          setFreelancer(null);
        }

        const postsResponse = await axios.get(POSTS_URL);
        setPosts(postsResponse.data.filter((post: any) => post.userId === parseInt(id!))); // Freelancer'ın postlarını filtrele
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleShowComments = (postId: number) => {
    alert(`Fetching comments for post ${postId}`);
  };

  if (loading) return <CircularProgress />;

  if (!freelancer) return <Typography>No Freelancer Found</Typography>;

  return (
    <Box padding={5}>
      <UserInfo
        name={freelancer.name}
        email={freelancer.email}
        phone={freelancer.phone}
        website={freelancer.website}
        photo={`https://i.pravatar.cc/150?img=${freelancer.id}`}
      />

      <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', margin: "36px"}} gutterBottom>
        Past Jobs
      </Typography>

      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={freelancer.id}>
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              onShowComments={handleShowComments}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;