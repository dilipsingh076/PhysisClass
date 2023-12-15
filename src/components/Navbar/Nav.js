import Link from 'next/link'
import React, { useState } from 'react'
import { Toolbar, Button, Menu, MenuItem,Paper  } from '@mui/material';

const Nav = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <nav>
            <div>
                <ul className='flex justify-around' >
                    <li>
                        <Link href="/" >Home</Link>
                    </li>
                    <li>
                        <Link href="/about" >About</Link>
                    </li>
                    <li>
                        <Link href="/contact" >Contact</Link>
                    </li>
                    <li>
                        <Link href="/courses" >Courses</Link>
                        {/* <Button aria-controls="courses-menu" aria-haspopup="true" onClick={handleClick}  sx={{ color: 'black', fontSize:'1.6rem', fontWeight:'400', lineHeight:"1.65", textDecoration:'none', margin: "-0.4rem -4rem 0rem 0rem" }} >Courses</Button>
                        <Menu
                            id="courses-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            PaperComponent={Paper}
                            sx={{
                              '& .MuiPaper-root': {
                                // maxWidth: '100px',
                                border:'1px solid red',
                                width: '100px',
                              },
                              '& .MuiMenuItem-root': {
                                padding: '8px', // Adjust padding for menu items
                              },
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Link href="/courses/12th">12th</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link href="/courses/iit-jee">IIT JEE</Link>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <Link href="/courses/neet">NEET</Link>
                            </MenuItem>
                        </Menu> */}
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Nav