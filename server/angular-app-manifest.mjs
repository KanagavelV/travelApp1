
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23518, hash: 'c6bb37912877560545a92b93373845f94002769189b6d51ba4177f4d62b09a91', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17137, hash: '34150f291d6146b66e91114848d17082aa8d4059c198ab569ba026ead372fdec', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 61200, hash: '680618d4e2b1cca307c65fefab9fa4dfecd04b6b4102aff738cdbe42398cc283', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-BVFWE4T2.css': {size: 6956, hash: 'f+pNaNrAc+8', text: () => import('./assets-chunks/styles-BVFWE4T2_css.mjs').then(m => m.default)}
  },
};
