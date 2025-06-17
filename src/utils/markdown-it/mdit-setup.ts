import type MarkdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItContainer from 'markdown-it-container';
import markdownItRouterLink from './mdit-plugin-routerlink';
import pinyin from 'pinyin';

export const markdownItSetup = (md: MarkdownIt) => {
  md.use(markdownItRouterLink);
  md.use(markdownItAnchor, {
    // For compatibility with the wiki
    slugify: (s) =>
      encodeURIComponent(
        pinyin
          //@ts-ignore
          // TODO: enable esModuleInterop in tsconfig.json
          .default(s, { style: 'normal' })
          .join(' ')
          .trim()
          .toLowerCase()
          .replace(/\s+/g, '-')
      )
  });
  md.use(markdownItContainer, 'dynamic', {
    validate: function () {
      return true;
    },
    render: function (tokens, idx) {
      // info is used in old wiki md files
      const tip = tokens[idx].info.trim() === 'info' ? 'tip' : tokens[idx].info;
      if (tokens[idx].nesting === 1) {
        return `<div class="v-md-plugin-tip ${tip}">\n`;
      } else {
        return '</div>\n';
      }
    }
  });
};
