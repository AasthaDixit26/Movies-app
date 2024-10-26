import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';

const MovieCard = ({ title, released, poster, rating, onAddToMyList }) => {
  return (
    <Card sx={{ maxWidth: 250, position: 'relative', mb: 2 }}>
      <Box 
        sx={{
          position: 'absolute',
          top: 8,
          left: 8,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '4px',
        }}
      >
        <IconButton 
          size="small" 
          onClick={onAddToMyList} 
          color="primary"
          sx={{ color: 'white' }}
        >
          <AddIcon fontSize="small" />
        </IconButton>
      </Box>
      <CardMedia
        component="img"
        height="194"
        image={poster}
        alt={title} 
      />
      <CardContent>
        <Typography variant="body" >
          Rating: {rating ? `${rating}/100` : "N/A"}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Released: {released}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
