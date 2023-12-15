import * as React from 'react';
import NextImage from '../image';
import Box from '../box';

interface IVoice {
  playing: boolean;
}

const VoiceIcon = ({ playing, ...props }: IVoice) =>
  playing ? (
    <Box sx={{
      backgroundColor: 'rgb(0, 0, 0)',
      height: '20px',
      width: '20px',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      borderRadius: "5px",
      margin: "2px",
    }}>
      <NextImage
        src="https://images.rentbabe.com/assets/gif/wave2.gif"
        width={15}
        height={15}
        alt=""
        {...props}
      />
    </Box>
  ) : (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM6.75 14.14C6.75 14.55 6.41 14.89 6 14.89C5.59 14.89 5.25 14.55 5.25 14.14V9.86C5.25 9.45 5.59 9.11 6 9.11C6.41 9.11 6.75 9.45 6.75 9.86V14.14ZM9.75 15.57C9.75 15.98 9.41 16.32 9 16.32C8.59 16.32 8.25 15.98 8.25 15.57V8.43C8.25 8.02 8.59 7.68 9 7.68C9.41 7.68 9.75 8.02 9.75 8.43V15.57ZM12.75 17C12.75 17.41 12.41 17.75 12 17.75C11.59 17.75 11.25 17.41 11.25 17V7C11.25 6.59 11.59 6.25 12 6.25C12.41 6.25 12.75 6.59 12.75 7V17ZM15.75 15.57C15.75 15.98 15.41 16.32 15 16.32C14.59 16.32 14.25 15.98 14.25 15.57V8.43C14.25 8.02 14.59 7.68 15 7.68C15.41 7.68 15.75 8.02 15.75 8.43V15.57ZM18.75 14.14C18.75 14.55 18.41 14.89 18 14.89C17.59 14.89 17.25 14.55 17.25 14.14V9.86C17.25 9.45 17.59 9.11 18 9.11C18.41 9.11 18.75 9.45 18.75 9.86V14.14Z"
        fill="#1A1A1A"
      />
    </svg>
  );
export default VoiceIcon;
