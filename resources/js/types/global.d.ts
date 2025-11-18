import type { route as routeFn } from 'ziggy-js';
import React from 'react';

declare global {
    const route: typeof routeFn;
}
