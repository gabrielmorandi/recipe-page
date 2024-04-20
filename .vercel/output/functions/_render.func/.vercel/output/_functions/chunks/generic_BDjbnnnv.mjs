export { renderers } from '../renderers.mjs';

const page = () => import('./pages/generic_EZ-s_o8w.mjs').then(n => n.g);

export { page };
