<template lang="pug">
  article.r--work-item(class="mb2")
    .r--title-line(class=" cf")
      //- Dates
      Calendar.mr1(:icon="{prefix: 'far', iconName: 'calendar'}"
        :startDate="startDate" :endDate="endDate")
      .dib.cf
        //- icon separator: chevron
        //- icon.r--chevron(icon="chevron-right" size="xs" class="mh1 v-base")
        .clip ,
        //- .r--type(v-if="type" class="black-60 dib") {{type}} :&nbsp;
        //- Title
        h3.r--title(class="f5 mv0 dib b") {{title}}
      //- Company
      .rw--company(v-if="company" class="dib fr ml1 helvetica")
        //- span.gray |&nbsp;
        organisation.r--company(:organisation="company" class="dib black-60")
    //- Summary
    external-link.r--website(v-if="website" :link="website"
        class="fr bg-white pa1 bl bw1 ml1 b--yellow")
    .r--summary(v-if="summary"
      class="b--yellow bl bw2 mb1 pl2 pv1 bg-washed-yellow"
      v-html="summary")
    //-
      Body
    .r--body(v-if="body" class="")
      template(v-if="typeof body === 'string'" v-html="body")
      ul(v-else class="pl4")
        li(v-for="{key, icon, title, content} in computedBody" :key="key" :class="{ 'r--has-icon': icon }")
          icon(v-if="icon" :icon="icon" class="green fa-li")
          | #[span.r--content-body(v-if="title") {{title}}] {{content}}
    //-
      Keywords
    ul.r--keywords(v-if="keywords" class="list f7 code")
      li.r-keyword(v-for="keyword in keywords" :key="keyword"
        class="dib black-80 bg-washed-blue ph1 ma1") {{keyword}}
</template>
<script lang="ts">
import Calendar from '@/components/resume/Calendar.vue'
import ExternalLink, { ExternalLinkObject } from '@/components/resume/ExternalLink.vue'
import Icon, { IconObject } from '@/components/resume/Icon.vue'
import Organisation, { OrganisationObject } from '@/components/resume/Organisation.vue'
import _ from 'lodash'
import { Component, Prop, Vue } from 'vue-property-decorator'

interface CustomList {
  icon?: string | IconObject
  title?: string
  content: string
}

export interface WorkItemObject {
  type: string
  title: string
  summary?: string
  company?: string | OrganisationObject
  startDate?: Date
  endDate?: Date
  website?: string | ExternalLinkObject
  body?: string | string[] | CustomList[]
  keywords?: string[]
}

@Component({
  components: { ExternalLink, Organisation, Icon, Calendar},
})
export default class WorkItem extends Vue implements WorkItemObject {
  @Prop() public type!: string
  @Prop() public title!: string
  @Prop() public summary?: string
  @Prop() public company?: string | OrganisationObject
  @Prop() public startDate?: Date
  @Prop() public endDate?: Date
  @Prop() public website?: string | ExternalLinkObject
  @Prop() public body?: string | string[] | CustomList[]
  @Prop() public keywords?: string[]

  get computedBody() {
    if (typeof this.body === 'string') { return this.body }

    return _.map(this.body, (line) => {
      if (typeof line === 'string' || typeof line === 'number') {
        return { key: line, content: line }
      }

      const {title, content} = line as any as CustomList
      return { key: title || content, ...line }
    })
  }
}
</script>