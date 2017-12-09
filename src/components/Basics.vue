<template>
  <div class="card-content is-narrow">
    <component-header :title="basics.name"></component-header>
    <p><span class="icon"><i class="fa fa-map-marker"></i></span>{{basics.location.address}}<br>
      <span class="icon"><i class="fa"></i></span>{{basics.location.postalCode}}, {{basics.location.city}}</p>
    <div class="field is-grouped is-grouped-multiline">
      <div class="control">
        <div class="tags has-addons">
          <span class="tag icon"><i class="fa fa-envelope"></i></span>
          <a class="tag is-link" :href="'mailto:'+basics.email+'?subject=[Réponse candidature]'">{{basics.email}}</a>
        </div>
      </div>
      <div class="control">
        <div class="tags has-addons">
          <span class="tag icon"><i class="fa fa-phone"></i></span>
          <a class="tag is-link" :href="'tel:'+basics.phone">{{basics.phone}}</a>
        </div>
      </div>
    </div>
    <div class="field is-grouped is-grouped-multiline">
      <div v-for="profil in basics.profiles" class="control">
        <div class="tags has-addons">
          <span class="tag icon"><i class="fa" :class="'fa-'+profil.network"></i></span>
          <a class="tag is-link" :href="profil.url">{{profil.username}}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ComponentHeader from './ComponentHeader.vue'

  export default {
    name: 'AboutMe',

    props: ['basics'],

    components: {ComponentHeader}
  }
</script>
