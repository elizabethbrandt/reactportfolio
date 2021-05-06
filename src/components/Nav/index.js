import { AppBar, MenuItem, Toolbar } from "@material-ui/core";

function Nav() {
    return (
        <nav>
            <AppBar position="static">
                <Toolbar>

                    <MenuItem href="/">Home</MenuItem>
                    <MenuItem href="/projects">Projects</MenuItem>
                    <MenuItem href="/resume">Resume</MenuItem>
                    <MenuItem href="/about">About</MenuItem>
                    <MenuItem href="/contact">Contact</MenuItem>

                </Toolbar>
            </AppBar>
        </nav>
    )
}

export default Nav;