import { AppBar, MenuItem, Toolbar } from "@material-ui/core";

function Nav() {
    return (
        <nav>
            <AppBar position="static">
                <Toolbar>

                    <MenuItem component="a" href="/">Home</MenuItem>
                    <MenuItem component="a" href="/projects">Projects</MenuItem>
                    <MenuItem component="a" href="/resume">Resume</MenuItem>
                    <MenuItem component="a" href="/about">About</MenuItem>
                    <MenuItem component="a" href="/contact">Contact</MenuItem>

                </Toolbar>
            </AppBar>
        </nav>
    )
}

export default Nav;