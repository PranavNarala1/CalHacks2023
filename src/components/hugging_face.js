import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function HuggingFace() {
    return (
        <>
        <Box sx={{ bgcolor: '#68A3CB', height: '20', width: '300' }}>
        <Typography variant="h3" align="center" font="poppins" color="black" gutterBottom>
        LLM Agent:
      </Typography>
      </Box>
      <Typography variant="h5" align="center" font="poppins" color="black" gutterBottom>
      To use StoryAI, please fill out our questionaire to give us background information about yourself. Then paste this information into our interactive agent below.
      </Typography>
        <iframe
	src="https://pn23-calhacks.hf.space"
	frameborder="0"
	width="1280"
	height="800"
    align="center"
></iframe>
</>
    );
}

export default HuggingFace;