import { Typography, Box, Rating, Grid } from '@mui/material';

function Reviews() {
  // Dummy data for reviews and ratings
  const reviews = [
    {
      name: 'John Doe',
      rating: 4,
      comment: 'Great food and fast delivery!',
    },
    {
      name: 'Jane Smith',
      rating: 5,
      comment: 'Delicious sweets and friendly staff!',
    },
    {
      name: 'Bob Johnson',
      rating: 3,
      comment: 'Good food but took a while to arrive.',
    },
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" sx={{ mb: 2 }}>
        Reviews and Ratings
      </Typography>
      <Grid container spacing={2}>
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 1 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {review.name}
              </Typography>
              <Rating value={review.rating} readOnly sx={{ mb: 1 }} />
              <Typography variant="body1">{review.comment}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Reviews;
