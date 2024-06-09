'use client'
import React from 'react';
import { Stack } from "@mui/material";
import { SkillContainer } from "@/app/(site)/(main)/(projects)/projects/[id]/styles";
import Text from "@/app/components/text/Text";

const SkillsList = () => {
    return (
        <Stack direction={ 'row' } gap={ '10px' }>
            <SkillContainer>
                <Text label={ 'الگوریتم' } color={ 'rgb(175, 177, 179)' } size={ '12px' }
                      weight={ 300 }/>
            </SkillContainer>

            <SkillContainer>
                <Text label={ 'جاوا (Java)' } color={ 'rgb(175, 177, 179)' } size={ '12px' }
                      weight={ 300 }/>
            </SkillContainer>

            <SkillContainer>
                <Text label={ 'جاوا اسکریپت (JavaScript)' } color={ 'rgb(175, 177, 179)' } size={ '12px' }
                      weight={ 300 }/>
            </SkillContainer>

            <SkillContainer>
                <Text label={ 'پایتون (Python)' } color={ 'rgb(175, 177, 179)' } size={ '12px' }
                      weight={ 300 }/>
            </SkillContainer>
        </Stack>
    );
};

export default SkillsList;