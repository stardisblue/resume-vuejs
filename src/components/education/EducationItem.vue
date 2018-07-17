<template>
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Item from '@/classes/Item';

export interface EducationItemObject {
    type: string
    institution: string
    area: string
    studyType: string
    summary: string
    startDate?: string
    endDate?: string
    gpa ?: string
    keywords?: string[]
}

@Component
export default class EducationItem extends Item<EducationItemObject> {
}
</script>

<style>

</style>
