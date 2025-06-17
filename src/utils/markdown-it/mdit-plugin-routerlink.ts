import type MarkdownIt from 'markdown-it';

function markdownItRouterLink(md: MarkdownIt) {
  const defaultRender =
    md.renderer.rules.link_open ||
    function (tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };

  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    const token = tokens[idx];
    const hrefIndex = token.attrIndex('href');

    if (hrefIndex >= 0 && token.attrs) {
      const href = token.attrs[hrefIndex][1];
      const isInternal = isInternalLink(href);

      if (isInternal) {
        token.tag = 'router-link';
        token.attrSet('to', href);
      } else {
        token.attrSet('target', '_blank');
      }
    }

    return defaultRender(tokens, idx, options, env, self);
  };
}

function isInternalLink(url: string) {
  // Treat anchor links and absolute paths on the same domain as internal
  if (url.startsWith('#') || url.startsWith('/')) {
    return true;
  }

  // Treat relative paths as internal
  if (url.startsWith('./') || url.startsWith('../')) {
    return true;
  }

  return false;
}

export default markdownItRouterLink;
