"use client";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { styled } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: "#fff",
    color: "#000",
    boxShadow: "none",
    borderBottom: "1px solid #e0e0e0"
}));

export default function NavBar() {
    return (
        <StyledAppBar position="static">
            <Toolbar sx={{
                display: "flex",
                justifyContent: "space-between",
                bgcolor: '#E5E5E5',
                boxShadow: '0px 1px 1px rgba(0,0,0,0.1)',
            }}>
                {/* Left Section */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LocalShippingOutlinedIcon sx={{ color: 'black', mr: 1 }} />
                    <Typography
                        sx={{
                            fontFamily: 'Circular Std, sans-serif',
                            fontWeight: 450,
                            fontSize: '16px',
                            lineHeight: '100%',
                            letterSpacing: '0px',
                        }}
                    >
                        Shipments / Create New
                    </Typography>
                </Box>

                {/* Right Section */}
                <Box>
                    <IconButton
                        sx={{
                            border: '1px solid #ccc',
                            borderRadius: '50%',
                            padding: '8px',
                        }}
                    >
                        <NotificationsNoneOutlinedIcon />
                    </IconButton>

                    <IconButton
                        sx={{
                            border: '1px solid #ccc',
                            borderRadius: '50%',
                            padding: '8px',
                            marginLeft: '8px',
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>

            </Toolbar>
        </StyledAppBar>
    );
}
