const slugify = (text: string) => {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/_/g, "-")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export default slugify;
