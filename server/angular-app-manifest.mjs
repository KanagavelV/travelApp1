
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
    'index.csr.html': {size: 23518, hash: '3ca03d208fbcc4cd135c54ef0395a9d5948dc4893f4fff5f49f6673adf4ee682', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17137, hash: '4c8367f724bc3c5de4004d7b3d1fb8dbbb4ce180f01d77ff5f9fdebf631d2ece', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 61200, hash: '680618d4e2b1cca307c65fefab9fa4dfecd04b6b4102aff738cdbe42398cc283', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-BVFWE4T2.css': {size: 6956, hash: 'f+pNaNrAc+8', text: () => import('./assets-chunks/styles-BVFWE4T2_css.mjs').then(m => m.default)}
  },
};
