const redirectTo = (pageSlug) => {
  window.history.pushState({}, "", pageSlug);
};

export { redirectTo };
