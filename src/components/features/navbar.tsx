import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { navItems } from '../data/nav-items';
import Link from 'next/link';
// interface Props {
 
//   window?: () => Window;
// }

const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];

const Navbar = () => {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{  }}>
      <Typography variant="h6" sx={{ my: 2, mx: 2, fontWeight: 'bold' }}>
        Duro
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ }}>
              <Link href={item?.path} 
              style={{ color: '#000', }}>
              <ListItemText primary={item?.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  // const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex', mb: 10}}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#0C0D10'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: '', sm: 'block' } }}
          >
            Duro
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item, index) => (
              // eslint-disable-next-line react/jsx-key
              <Link href={item?.path}>
              <Button key={index} sx={{ 
                color: '#fff', 
                textTransform: 'capitalize',
                '&:hover': {
                  color: 'var(--red)', 
                },
                }}>
                {item?.name} 
              </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      
      <nav>
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}

export default Navbar