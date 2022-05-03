// INFO: Used to store value of page name and have access everywhere

import { writable } from 'svelte/store';

// !!! defaults to Home
export const page = writable('Home');