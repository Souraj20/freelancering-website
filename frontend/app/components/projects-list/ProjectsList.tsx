'use client'
import React from 'react';
import Grid from "@mui/material/Unstable_Grid2";
import ProjectCard from "@/app/components/project-card/ProjectCard";

const ProjectsList = () => {
    return (
        <Grid container spacing={ 2 }>
            <Grid xs={ 3 }>
                <ProjectCard/>
            </Grid>

            <Grid xs={ 3 }>
                <ProjectCard/>
            </Grid>

            <Grid xs={ 3 }>
                <ProjectCard/>
            </Grid>

            <Grid xs={ 3 }>
                <ProjectCard/>
            </Grid>
        </Grid>
    );
};

export default ProjectsList;