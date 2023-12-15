import Box from '@/components/atoms/box'
import Typography from '@/components/atoms/typography'
import Image from '@/components/atoms/image'
import Link from 'next/link'
import React from 'react'
import { Divider } from '@mui/material'

const Footer = () => {
  return (
    <Box
      sx={{
        // border: '1px solid red',
        width: "100%",
        bgcolor: "#dde9ff",
        color: "#2D2D2Dck",
        clipPath: "ellipse(99% 100% at center bottom)",
      }}
    >
      <Box
        className={'flex justify-center'}
        sx={{
          width: "100%",
        }}
      >
        <Link href={"/"} >
          <Image src="/physicslogo01.png" alt="Brand Logo" width={150} height={60} />
        </Link>
      </Box>
      <Divider className={'m-auto'} sx={{ color: 'gray', width: '90%', }} />
      <Box
        sx={{
          border:'1px solid blue',
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          height: "70%",
          // gap: "15px",
          alignItems: "center",
          margin: "auto",
          width: { xs: "95%", md: "97%" },
          // p: { xs: "10px 0px", sm: "30px 0px" },
        }}
      >
        <Box
          sx={{
            border:'1px solid red',
            width: { xs: "100%", md: "22%" },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "13px", md: "17px" },
                textAlign: "left",
                mt: "30px",
              }}
            >
              A consulting company specialized in IT, Financial services and
              Telco industries across the region.{" "}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "13px", md: "17px" },
                textAlign: "left",
                mt: "10px",
              }}
            >
              Covering both strategy and operations we are providing our
              clients supportv end to end consulting solutions up to the
              point.{" "}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            border:'1px solid blue',
            width: { md: "10%" },
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
            // textAlign: "center",
            // justifyContent: "center",
            height:'90%',
            // boxSizing: "border-box",
            m: "auto",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: "20px", sm: "25px" },
              // textAlign: { xs: "center", md: "start" },
              fontWeight: 500,
              // color: "#fff",
              // border:"solid red",
              ml: { xs: "", md: "-30px" },
            }}
          >
            Quick links
          </Typography>
          {/* ------- */}
          <Box
            sx={{
              maxHeight: { xs: "10vh", md: "16vh" },
              display: "flex",
              flexDirection: "column",
              gap: "3px",
              // border:"solid red"
            }}
          >
            {/* <Link to={"/about"} style={{textDecoration:"none",}}> */}

            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "15px", sm: "18px" },
                textAlign: { xs: "center", md: "left" },
                mt: { xs: "5px", md: "25px" },
                // color:"#ffff"
              }}
            >
              About us
            </Typography>
            {/* </Link> */}
            {/* <Link to={"/contactus"} style={{textDecoration:"none",}}> */}

            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "15px", sm: "18px" },
                textAlign: { xs: "center", md: "left" },
                // color:"#fff"
              }}
            >
              Contact us
            </Typography>
            {/* </Link> */}

            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "15px", md: "18px" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Privacy Policy
            </Typography>


            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "15px", md: "18px" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Terms & Condition
            </Typography>
          </Box>
        </Box>
        {/* ----------- */}
        <Box
          sx={{
            width: { xs: "100%", md: "22%" },
            // p: { xs: 0, md: 4 },
            boxSizing: "border-box",
            m: "auto",
            ml: { xs: "0px", md: "10px" },
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            mt: { xs: "20px", md: "42px" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: { xs: "20px", sm: "25px" },
              textAlign: { xs: "center", md: "start" },
              fontWeight: 500,
              // color: "#fff",
              // mb:"3px"
            }}
          >
            Contact us
          </Typography>
          <Box sx={{ maxHeight: { xs: "10vh", md: "15vh" } }}>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "15px", sm: "18px" },
                textAlign: { xs: "center", md: "start" },
                mt: { xs: "0px", md: "20px" },
                lineHeight: "120%",
                // color: "#fff",
              }}
            >
              Bulevar Zorana Dindic 125 Belgrade Serbia
            </Typography>

            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "16px", md: "18px" },
                textAlign: { xs: "center", md: "start" },
                mt: { xs: "0px", sm: "8px" },
              }}
            >
              +908 89097 890
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "16px", md: "18px" },
                textAlign: { xs: "center", md: "start" },
                mt: { xs: "0px", md: "7px" },
                // color: "#fff",
              }}
            >
              physicsprivatetuotrials.com
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: {
              xs: "70%",
              md: "20%",
              margin: "auto",

              display: "flex",
              justifyContent: "end",
            },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "80%" },
              // height: "48px",
              // m: "auto",
              mt: { xs: "10px", md: "70%" },
              display: "flex",
              // gap: "20px",
              // border:"solid red ",
              // mb:"30px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                padding: "10px 8px 10px 8px",
                background: "#FFF",
                borderRadius: "50%",
                boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)",
                display: "flex",
                justifyContent: "center", // Center the content horizontally
                alignItems: "center", // Center the content vertically
                width: "50px", // Set the width of the box
                height: "50px", // Set the height of the box
              }}
            >
              <Image
                src={'/facebooklogo.png'}
                alt="Brand Logo"
                width={150}
                height={90}
                layout="responsive" // Make the image responsive
                objectFit="contain" // Choose the object-fit property to control how the image fits into the box
              />
            </Box>
            <Box
              sx={{
                padding: "10px 8px 10px 8px",
                background: "#FFF",
                borderRadius: "50%",
                boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.15)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50px",
                height: "50px",
              }}
            >
              <Image
                src={'/whatsapplogo.png'}
                alt="Brand Logo"
                width={150}
                height={90}
                layout="responsive" // Make the image responsive
                objectFit="contain" // Choose the object-fit property to control how the image fits into the box
              />
            </Box>
            <Box
              sx={{
                padding: "12px 13px 16px 13px",
                background: "#FFF",
                borderRadius: "50%",
                boxShadow: " 0px 4px 14px rgba(0, 0, 0, 0.15)",
              }}
            >
              <Box sx={{ width: "15px", height: "15px" }}>
                {/* <img style={{ ...imgsize }} src={linkdin} alt="preview" /> */}
              </Box>
            </Box>
            <Box
              sx={{
                padding: "12px 13px 16px 13px",
                background: "#FFF",
                borderRadius: "50%",
                boxShadow: " 0px 4px 14px rgba(0, 0, 0, 0.15)",
              }}
            >
              <Box sx={{ width: "15px", height: "15px" }}>
                {/* <img style={{ ...imgsize }} src={twitter} alt="preview" /> */}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignItems: 'center',
          background: '#dd5c7a',
          width: '100%'
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            fontfamily: "Poppins",
            color: "#fff",
          }}
        >
          Copyright © 2023  Physics Private Tutorials All rights Rcerved
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer