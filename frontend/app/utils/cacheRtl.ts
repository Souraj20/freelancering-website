'use client'

import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from "@emotion/cache";

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

export default cacheRtl;