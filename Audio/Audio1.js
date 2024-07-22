import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Dialog from '@mui/material/Dialog';
import { Typography, DialogContent } from '@mui/material'; // Add DialogContent here

function MusicPlayer() {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const togglePlay = (audioId) => {
    setCurrentAudio(currentAudio === audioId ? null : audioId);
  };

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <Grid item xs={8}>
      <Card sx={{ maxWidth: 305, position: 'relative' }}>
        <CardMedia
          sx={{ height: 200 }}
          image="../Images/wannabeyours.png"
          title="green iguana"
        />
        <CardContent>
          <h2>Music Player</h2>
          <IconButton onClick={() => togglePlay('audio2')} aria-label={currentAudio === 'audio2' ? 'Pause' : 'Play'}>
            {currentAudio === 'audio2' ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          <IconButton onClick={handleOpenDialog} aria-label="Lyric">
            Lyric
          </IconButton>
        </CardContent>
      </Card>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogContent>
          <Typography>
            Insert lyrics here...
          </Typography>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}

export default MusicPlayer;
