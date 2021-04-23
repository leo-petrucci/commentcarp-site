import 'vite/dynamic-import-polyfill';
import './css/index.css';
import './css/inter.css';
import 'alpinejs';

declare global {
  interface Window {
    newsletter: () => {};
  }
}

const newsletter = () => {
  return {
    formData: {
      email: '',
    },
    api_key: 'L6QdQ3So_xnYratAjGlQjQ',
    loading: false,
    buttonLabel: 'Join the waitlist',
    message: '',
    send() {
      this.buttonLabel = 'Joining...';
      this.loading = true;
      fetch('https://api.convertkit.com/v3/forms/2227802/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...this.formData,
          api_key: this.api_key,
        }),
      })
        .then(() => {
          this.message = 'Thank you for signing up!';
        })
        .catch(() => {
          this.message = "That didn't work :/";
        })
        .finally(() => {
          this.formData = {
            email: '',
          };
          this.loading = false;
          this.buttonLabel = 'Join the waitlist';
        });
    },
  };
};

window.newsletter = newsletter;
