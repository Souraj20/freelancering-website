import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import ProjectCard from "@/app/(site)/(main)/(projects)/projects/components/ProjectCard";

const ProjectList = () => {
    return (
        <Grid container spacing={ 2 }>
            <Grid xs={ 12 }>
                <ProjectCard/>
            </Grid>

            <Grid xs={ 12 }>
                <ProjectCard/>
            </Grid>

            <Grid xs={ 12 }>
                <ProjectCard/>
            </Grid>

            <Grid xs={ 12 }>
                <ProjectCard/>
            </Grid>

            <Grid xs={ 12 }>
                <ProjectCard/>
            </Grid>
        </Grid>
    );
};

export default ProjectList;