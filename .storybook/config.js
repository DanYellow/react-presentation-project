import { configure } from '@kadira/storybook';

function loadStories() {
  require('../dev/stories/index.js');
}

configure(loadStories, module);