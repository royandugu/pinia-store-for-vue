import { createApp } from 'vue';
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import App from './App.vue';
import Grid from './components/Grid.vue';
import Page from './components/Page.vue';
import Teaser from './components/Teaser.vue';
import Feature from './components/Feature.vue';

const app = createApp(App);

app.use(StoryblokVue, {
  accessToken: 'oCZeqLEacdn4Qicmx15NKQtt',
  use: [apiPlugin],
  apiOptions: {
    region: ''
  }
});

app.component('Grid', Grid);
app.component('Page', Page);
app.component('Teaser', Teaser);
app.component('Feature', Feature);

app.mount('#app');

/*
  createApp: createApp function from vue is used to create the vue application instance. In simple words, 
  #createApp is something like turning on a machine..It's just we tell what our app will look like. and where it would appear. For example mount(#app) tells us that our app needs to appear on the location of #app (div ID);

  ###################################

  Importing two things from the Storyblok SDK. Therefore, StoryblokVue is the main plugin to integrate Storyblok into our VUE application. Now we need a plugin to make HTTP calls to Storyblok's API. It must be passed into the storyblok's plugin setup.

  ## So App is taken as the root component so createApp(App) Therefore, App is the entry point in rendering of our Vue App.

  Grid, Page, Teaser, Feature all of these are Vue components imported and these are the ones matching the block components in our storyblok CMS.

  now app.use registers storyblokVue plugin globally in our Vue app. Now to fetch and authenticate our content from StoryBlok we use access token.
*/