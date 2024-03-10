import { react } from "react";
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from "./";
function Videos({ videos ,direction}) {
  console.log(videos);
  if(!videos?.length) return 'Loading...';
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}></VideoCard>}
          {item.id.channelId && <ChannelCard channelDetails={item} />}
        </Box>
      ))}
    </Stack>
  );
}
export default Videos;
