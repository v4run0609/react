import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';
import './Aud.css'
import { FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { useState, useRef, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Slider from '@mui/material/Slider';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import {  useTheme } from '@mui/material/styles';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import { BiSolidVolumeFull } from "react-icons/bi";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Stack from '@mui/material/Stack';
import Replay10Icon from '@mui/icons-material/Replay10';
import Forward10Icon from '@mui/icons-material/Forward10';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



  
  
  
  export default function MusicCard() {
    const [currentAudio, setCurrentAudio] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(10);
    const [showVolumeButton, setShowVolumeButton] = useState(false);
    const [showVolumeSlider, setShowVolumeSlider] = useState(false);
    const theme = useTheme();
    const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
    const audioRef = useRef(null);
    const [currentAudioIndex, setCurrentAudioIndex] = useState(0);


    
    const[searchKey,setSearchKey]=useState(false)
    const disp=()=>{
        setSearchKey(true)
    }
    
    const audioRefs = [
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null)
    ];
  
    useEffect(() => {
      const handleTimeUpdate = (audioRef) => {
        return () => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
            setDuration(audioRef.current.duration);
          }
        };
      };
    
      audioRefs.forEach((audioRef) => {
        if (audioRef.current) {
          audioRef.current.addEventListener('timeupdate', handleTimeUpdate(audioRef));
        }
      });
    
      return () => {
        audioRefs.forEach((audioRef) => {
          if (audioRef.current) {
            audioRef.current.removeEventListener('timeupdate', handleTimeUpdate(audioRef));
          }
        });
      };
    }, []);
    
  
    const togglePlay = (index) => {
      const audioElement = audioRefs[index].current;
      if (audioElement) {
        if (audioElement.paused) {
          audioElement.play();
          setCurrentAudioIndex(index); 
        } else {
          audioElement.pause();
        }
      }
    };
  
    const handleSeek = (event, newValue) => {
      setCurrentTime(newValue);
      const audioElement = audioRefs[currentAudioIndex].current;
      if (audioElement) {
        audioElement.currentTime = newValue;
      }
    };
  
    const handleVolumeChange = (event, newValue) => {
      setVolume(newValue);
      const newVolume = newValue / 100; 
      audioRefs[currentAudioIndex].current.volume = newVolume;
    };
  
    const handleSkipForward = () => {
      const audioElement = audioRefs[currentAudioIndex].current;
      if (audioElement) {
        audioElement.currentTime += 10;
      }
    };
  
    const handleSkipBackward = () => {
      const audioElement = audioRefs[currentAudioIndex].current;
      if (audioElement) {
        audioElement.currentTime -= 10;
      }
    };
  
    const handleNext = () => {
      setCurrentAudioIndex((prevIndex) => (prevIndex + 1) % audioRefs.length);
    };
  
    const handleBack = () => {
      setCurrentAudioIndex((prevIndex) => (prevIndex - 1 + audioRefs.length) % audioRefs.length);
    };
  
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
  
    const [isDialogOpen, setIsDialogOpen] = useState(false);
  
    const handleOpenDialog = () => {
      setIsDialogOpen(true);
    };
  
    const handleCloseDialog = () => {
      setIsDialogOpen(false);
    };


    const next=useNavigate();
    const Home1 =()=>{
        next("/Home");
    }
    const Home2 =()=>{
        next("/sett");
    }

  return (
<div>

<div className='let'>
        <Grid className='lett' item xs={5} style={{color:'white'}}>
        <Item sx={{height:'100vh',width:'80%'}}>
            <h1 style={{ fontFamily: 'curFantasy	Copperplatee', fontSize: '35px', fontWeight: 'normal', color: 'black', textShadow: '1px 1px #ccc' }}>Santrack</h1>
            <Button onClick={Home1} color="primary"  ><FaHome size="40px" /></Button>
            <br></br>
            <Button  onClick={disp} color="secondary"><IoSearch size="40px" /></Button>
            <br></br>
            <Button onClick={Home2} color="secondary"><IoMdSettings size="40px" /></Button>
            {/* <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> */}
         </Item>
      </Grid>
        </div>


<div className='rit'>

<main   id="primary-section" >

                <h3 id="billboard">PLAYLIST</h3>
                <div    id="topchart-cards">
                    <div    class="cards">
                        <img src="../Images/gym.jpg" alt="coloring book"></img>    
                    </div>

                    <div    class="cards">
                        <h1>Gym
                          playList</h1>
                    </div>
                </div>

                <div  id="music-playlist-titles">
                    <div    id="most-popular">
                        <h2>Most Popular</h2>
                        <p>10 songs</p>
                    </div>
                    

                </div>

                <div id="primary-second-section">
                    <div  id="most-popular-section">
                        <div  class="most-popular-items">
                            <div class="music-icon-section">      
                                <p># Title</p>
                            </div>
                            <div  class="music-artist">
                                <p>Popz tunee</p>
                            </div>
                            <div    class="music-time">
                                <p>3:22</p>
                            </div>
                            
                        </div>

                        <div   class="most-popular-items">
                            <div class="music-icon-section">
                            <p>01</p>
                                <img src="https://cdn.promodj.com/afs/8c215ae05ba76229291604cbf4f0e5ca12:resize:2000x2000:same:f02888" alt="Blinding lights"></img>
                                <p>Blinding lights&nbsp;&nbsp;</p>
                            </div>
                            <div  class="music-artist">
                            <IconButton className='play' onClick={() => togglePlay(0)} aria-label={audioRefs[0].current?.paused ? 'Play' : 'Pause'}>
                              {audioRefs[0].current?.paused ? <PlayArrowIcon /> : <PauseIcon />}
                            </IconButton>
                            </div>
                            <div  class="music-artistt">
                            <Button onClick={handleOpenDialog} aria-label="Lyric" color="secondary">&nbsp;&nbsp;Lyric</Button>
                            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                              <DialogContent>
                                <Typography>
                                    Yeah<br></br>
                                    I've been tryna call<br></br>
                                    I've been on my own for long enough<br></br>
                                    Maybe you can show me how to love, maybe<br></br>
                                    I'm going through withdrawals<br></br>
                                    You don't even have to do too much<br></br>
                                    You can turn me on with just a touch, baby<br></br>
                                    I look around and<br></br>
                                    Sin City's cold and empty (oh)<br></br>
                                    No one's around to judge me (oh)<br></br>
                                    I can't see clearly when you're gone<br></br>
                                    I said, ooh, I'm blinded by the lights<br></br>
                                    No, I can't sleep until I feel your touch<br></br>
                                    I said, ooh, I'm drowning in the night<br></br>
                                    Oh, when I'm like this, you're the one I trust<br></br>
                                    (Hey, hey, hey)<br></br>
                                    I'm running out of time<br></br>
                                    'Cause I can see the sun light up the sky<br></br>
                                    So I hit the road in overdrive, baby, oh<br></br>
                                    The city's cold and empty (oh)<br></br>
                                    No one's around to judge me (oh)<br></br>
                                    I can't see clearly when you're gone<br></br>
                                    I said, ooh, I'm blinded by the lights<br></br>
                                    No, I can't sleep until I feel your touch<br></br>
                                    I said, ooh, I'm drowning in the night<br></br>
                                    Oh, when I'm like this, you're the one I trust<br></br>
                                    I'm just walking by to let you know (by to let you know)<br></br>
                                    I can never say it on the phone (say it on the phone)<br></br>
                                    Will never let you go this time (ooh)<br></br>
                                    I said, ooh, I'm blinded by the lights<br></br>
                                    No, I can't sleep until I feel your touch<br></br>
                                    (Hey, hey, hey)<br></br>
                                    (Hey, hey, hey)<br></br>
                                    I said, ooh, I'm blinded by the lights<br></br>
                                    No, I can't sleep until I feel your touch<br></br>
                                </Typography>
                              </DialogContent>
                            </Dialog>
                            </div>
                            <div  class="music-artisttt">
                                <p>The Weeknd</p>
                            </div>
                            <div    class="music-time">
                                <p>3:22</p>
                            </div>
                            
                        </div>
                        <div   class="most-popular-items">
                            <div class="music-icon-section">
                            <p>02</p>
                                <img src="https://th.bing.com/th/id/R.3fdb8dd4ae6f96802352ca2eba3e8135?rik=a9guVkBIYe1H2A&riu=http%3a%2f%2fi.maniadb.com%2fimages%2falbum%2f833%2f833052_1_f.jpg&ehk=RdZDC607KkzgybYnQcohFecsUEaN8r1Un7bsHUuJqig%3d&risl=&pid=ImgRaw&r=0" alt="24kGoldn Mood"></img>
                                
                                <p>24kGoldnMood</p>
                            </div>
                            <div className="music-artist">
                              <IconButton onClick={() => togglePlay(1)} aria-label={audioRefs[1].current?.paused ? 'Play' : 'Pause'}>
                                {audioRefs[1].current?.paused ? <PlayArrowIcon /> : <PauseIcon />}
                              </IconButton>
                            </div>
                            <div    class="music-artistt">
                            <Button onClick={handleOpenDialog} aria-label="Lyric" color="secondary">Lyric</Button>
                            </div>
                            <div    class="music-time">
                                <p>Iann Dior</p>
                            </div>
                            <div    class="music-timee">
                                <p>5:02</p>
                            </div>
                            
                            
                        </div>
                        <div    class="most-popular-items">
                            <div class="music-icon-section">
                            <p>03</p>
                                <img src="https://th.bing.com/th/id/OIP.uZw0Mja1XO4yyOHiBgdZ0wHaKu?rs=1&pid=ImgDetMain" alt="starboy"></img>
                                <p>Industry Baby&nbsp;</p>
                            </div>
                            <div    class="music-artist">
                            <IconButton onClick={() => togglePlay(2)} aria-label={audioRefs[2].current?.paused ? 'Play' : 'Pause'}>
                              {audioRefs[2].current?.paused ? <PlayArrowIcon /> : <PauseIcon />}
                            </IconButton>
                            </div>
                            <div    class="music-artistt">
                            <Button onClick={handleOpenDialog} aria-label="Lyric" color="secondary">Lyric</Button>
                            </div>
                            <div    class="music-time">
                                <p>Lil Nas X</p>
                            </div>
                            <div    class="music-timee">
                                <p>1:22</p>
                            </div>
                            
                        </div>
                        <div    class="most-popular-items">
                            <div class="music-icon-section">
                            <p>04</p>
                                <img src="https://www0.aonode.com/static/213f2990d149cc75b0ceefb058e106a6.jpeg" alt="Stay"></img>
                                <p>Stay&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                            <div    class="music-artist">
                            <IconButton onClick={() => togglePlay(3)} aria-label={audioRefs[3].current?.paused ? 'Play' : 'Pause'}>
                              {audioRefs[3].current?.paused ? <PlayArrowIcon /> : <PauseIcon />}
                            </IconButton>
                            </div>
                            <div    class="music-artist">
                            <Button onClick={handleOpenDialog} aria-label="Lyric" color="secondary">Lyric</Button>
                            </div>
                            <div    class="music-time">
                                <p>Justin Bieber</p>
                            </div>
                            <div    class="music-time">
                                <p>3:36</p>
                            </div> 
                        </div>
                        <div    class="most-popular-items">
                            <div class="music-icon-section">
                            <p>05</p>
                                <img src="https://images.genius.com/e524761aa1d93841d311ba961e0cb278.1000x1000x1.jpg" alt="Satisfya"></img>
                                
                                <p>Satisfya&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                            <div    class="music-artist">
                            <IconButton onClick={() => togglePlay(4)} aria-label={audioRefs[4].current?.paused ? 'Play' : 'Pause'}>
                              {audioRefs[4].current?.paused ? <PlayArrowIcon /> : <PauseIcon />}
                            </IconButton>
                            </div>
                            <div    class="music-artist">
                            <Button onClick={handleOpenDialog} aria-label="Lyric" color="secondary">Lyric</Button>
                            </div>
                            <div    class="music-time">
                                <p>Imran Khan</p>
                            </div>
                            <div    class="music-time">
                                <p>3:22</p>
                            </div> 
                        </div>
                        <div    class="most-popular-items">
                            <div class="music-icon-section">
                            <p>06</p>
                                <img src="https://external-preview.redd.it/o-PPWHP_VwcqcfJaV7JjOg87s2NPX5FR_2fD8Zlqw0U.jpg?auto=webp&s=9b65019decc6d954f7af72610bb5bb7b79bbbed3" alt="Satisfya"></img>
                                
                                <p>Senorita;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                            <div    class="music-artist">
                            <IconButton onClick={() => togglePlay(5)} aria-label={audioRefs[5].current?.paused ? 'Play' : 'Pause'}>
                              {audioRefs[5].current?.paused ? <PlayArrowIcon /> : <PauseIcon />}
                            </IconButton>
                            </div>
                            <div    class="music-artist">
                            <Button onClick={handleOpenDialog} aria-label="Lyric" color="secondary">Lyric</Button>
                            </div>
                            <div    class="music-time">
                                <p>Camila Cabello</p>
                            </div>
                            <div    class="music-time">
                                <p>1:52</p>
                            </div> 
                        </div>
                        <div    class="most-popular-items">
                            <div class="music-icon-section">
                            <p>07</p>
                                <img src="https://i.ytimg.com/vi/PcnakhYljRY/maxresdefault.jpg" alt="Heat Waves"></img>
                                
                                <p>Heat Waves&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                            <div    class="music-artist">
                            <IconButton onClick={() => togglePlay(6)} aria-label={audioRefs[6].current?.paused ? 'Play' : 'Pause'}>
                              {audioRefs[6].current?.paused ? <PlayArrowIcon /> : <PauseIcon />}
                            </IconButton>
                            </div>
                            <div    class="music-artist">
                            <Button onClick={handleOpenDialog} aria-label="Lyric" color="secondary">Lyric</Button>
                            </div>
                            <div    class="music-time">
                                <p>Glass Animals</p>
                            </div>
                            <div    class="music-time">
                                <p>3:34</p>
                            </div> 
                        </div>
                        <div    class="most-popular-items">
                            <div class="music-icon-section">
                            <p>08</p>
                                <img src="https://i.ytimg.com/vi/Yy-FS7yb4IE/maxresdefault.jpg" alt="playdate"></img>
                                
                                <p>Play Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                            <div    class="music-artist">
                            <IconButton onClick={() => togglePlay(7)} aria-label={audioRefs[7].current?.paused ? 'Play' : 'Pause'}>
                              {audioRefs[7].current?.paused ? <PlayArrowIcon /> : <PauseIcon />}
                            </IconButton>
                            </div>
                            <div    class="music-time">
                            <Button onClick={handleOpenDialog} aria-label="Lyric" color="secondary">Lyric</Button>
                            </div>
                            <div    class="music-time">
                                <p>Melanie Martinez</p>
                            </div>
                            <div    class="music-time">
                                <p>2.14</p>
                            </div>
                            
                        </div>

                        <div    class="most-popular-items">
                            <div class="music-icon-section">
                            <p>09</p>
                                <img src="https://i1.sndcdn.com/artworks-2pwyMG4NKKp3tXTw-3D921Q-t500x500.jpg" alt="Enemy"></img>
                                
                                <p>Enemy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                            <div    class="music-artist">
                            <IconButton onClick={() => togglePlay(8)} aria-label={audioRefs[8].current?.paused ? 'Play' : 'Pause'}>
                              {audioRefs[8].current?.paused ? <PlayArrowIcon /> : <PauseIcon />}
                            </IconButton>
                            </div>
                            <div    class="music-artist">
                            <Button onClick={handleOpenDialog} aria-label="Lyric" color="secondary">Lyric</Button>
                            </div>
                            <div    class="music-time">
                                <p>Imagine Dragons</p>
                            </div>
                            <div    class="music-time">
                                <p>1:11</p>
                            </div> 
                        </div>
                        <div    class="most-popular-items">
                            <div class="music-icon-section">
                            <p>10</p>
                                <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/11/25/13/42uf16m.jpg?width=990&auto=webp&quality=75" alt="Star Boy"></img>
                                
                                <p>Star Boy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                            <div    class="music-artist">
                            <IconButton onClick={() => togglePlay(9)} aria-label={audioRefs[9].current?.paused ? 'Play' : 'Pause'}>
                              {audioRefs[9].current?.paused ? <PlayArrowIcon /> : <PauseIcon />}
                            </IconButton>
                            </div>
                            <div    class="music-artist">
                            <Button onClick={handleOpenDialog} aria-label="Lyric" color="secondary">Lyric</Button>
                            </div>
                            <div    class="music-time">
                                <p>The Weeknd</p>
                            </div>
                            <div    class="music-time">
                                <p>4.00</p>
                            </div> 
                        </div>




                    </div>
                    </div>
            </main>


<Box className='line' sx={{ flexGrow: 1 }}>
      <Grid  container columns={0.7}>
        <Grid item xs={8}>
          <Item>
            <div>
          <Slider
              min={0}
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              aria-label="Duration"
              sx={{
                color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                height: 4,width:1200,
                '& .MuiSlider-thumb': {
                  width: 8,
                  height: 8,
                  transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                  '&::before': {
                    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                  },
                  '&:hover, &.Mui-focusVisible': {
                    boxShadow: `0px 0px 0px 8px ${
                      theme.palette.mode === 'dark'
                        ? 'rgb(255 255 255 / 16%)'
                        : 'rgb(0 0 0 / 16%)'
                    }`,
                  },
                  '&.Mui-active': {
                    width: 20,
                    height: 20,
                  },
                },
                '& .MuiSlider-rail': {
                  opacity: 0.28,
                },
              }}
            />

            <div className='timex'>
              {formatTime(currentTime)}
            </div>
            <div className='timexr'>
              {formatTime(duration - currentTime)}
            </div>
</div>
          <Replay10Icon  onClick={handleSkipBackward} aria-label="Skip Backward" fontSize="large" htmlColor={mainIconColor} ></Replay10Icon >
          <IconButton onClick={handleBack} aria-label="Back">
            <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
          </IconButton>

           
            <IconButton onClick={() => togglePlay(currentAudioIndex)} aria-label={audioRefs[currentAudioIndex].current?.paused ? 'Play' : 'Pause'}>
            {audioRefs[currentAudioIndex].current?.paused ? <PlayArrowRounded sx={{ fontSize: '3rem' }}  htmlColor={mainIconColor}/> :<PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />}
          </IconButton>

          <audio ref={audioRefs[0]} id="audio1" src="../Audio/BlindingLights.mp3" />
          <audio ref={audioRefs[1]} id="audio2" src="../Audio/24kGoldn Mood.mp3" />
          <audio ref={audioRefs[2]} id="audio3" src="../Audio/Industry baby.mp3" />
          <audio ref={audioRefs[3]} id="audio4" src="../Audio/Stay.mp3" />
          <audio ref={audioRefs[4]} id="audio5" src="../Audio/Satisfya.mp3" />
          <audio ref={audioRefs[5]} id="audio6" src="../Audio/Senorita.mp3" />
          <audio ref={audioRefs[6]} id="audio7" src="../Audio/Heat Waves.mp3" />
          <audio ref={audioRefs[7]} id="audio8" src="../Audio/Playdate.mp3" />
          <audio ref={audioRefs[8]} id="audio9" src="../Audio/Enemy.mp3" />
          <audio ref={audioRefs[9]} id="audio10" src="../Audio/Starboy.mp3" />




          <IconButton onClick={handleNext} aria-label="Next">
            <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
          </IconButton>
          <Forward10Icon onClick={handleSkipForward} aria-label="Skip Forward" fontSize="large" htmlColor={mainIconColor}></Forward10Icon>

              <BiSolidVolumeFull onClick={() => setShowVolumeSlider(!showVolumeSlider)}/>

          {showVolumeButton && (
            <IconButton onClick={() => setShowVolumeSlider(!showVolumeSlider)}>
              <VolumeUpIcon />
            </IconButton>
          )}
            {showVolumeSlider && (
            <Slider
            sx={{
              width: 100,
              height: 4,
              '& .MuiSlider-rail': {
                backgroundColor: '#ccc',
              },
              '& .MuiSlider-track': {
                backgroundColor: '#3f51b5',
              },
              '& .MuiSlider-thumb': {
                backgroundColor: '#3f51b5',
              },
            }}
              min={0}
              max={100}
              value={volume}
              onChange={handleVolumeChange}
              aria-label="Volume"
            />
          )}

          </Item>
        </Grid>
      </Grid>
    </Box>
</div> 

</div>

  );
}
