// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'NomaPhone Blog';
export const SITE_DESCRIPTION = 'International calling guides for travelers, expats and digital nomads: how to call banks, family and offices from abroad, straight from your browser.';

// Launch switch. While false the app runs as a demo (free coins, simulated calls):
// CTAs say "Try the demo" and an email form collects launch sign-ups.
// On launch day set it to true and turn off demo mode in the app.
export const LAUNCHED = false;

// The calling app. Every "Try NomaPhone" / "Make a call" CTA points here.
export const APP_URL = 'https://app.nomaphone.com';
export const APP_CTA_LABEL = LAUNCHED ? 'Make a call' : 'Try the demo';

// Launch sign-ups go to the same list as the old waitlist.
export const WAITLIST_URL = 'https://nr.nomaphone.com/nomaphone/waitlist';
