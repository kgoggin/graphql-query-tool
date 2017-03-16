import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/stories');
  require('../src/components/App/App.story');
}

configure(loadStories, module);
