import { writable } from 'svelte/store';
// !!! defaults to Home
// INFO: Used to store value of page name and have access everywhere
export const page = writable('Home');

//!!! theme colors
export const background = '#1A1A1A';
export const accent = '#df5b53';
export const complementary = '#53D7DF';
export const offWhite = '#e5e4e7';
