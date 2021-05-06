import { Grid, Typography } from "@material-ui/core";

function Projects() {
    return (
        <Grid container>
            <div>
                <Typography>Project Highlights</Typography>
            </div>

            <Grid item container>
                <Grid item xs={1} sm={2} />

                    <Grid item container xs={10} sm={8} spacing={3}>
                        {/* <Projects /> */}
                    </Grid>

                <Grid item xs={1} sm={2} />
            </Grid>
        </Grid>
    )
}

export default Projects;