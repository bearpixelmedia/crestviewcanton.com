// Metro resolves static image imports to an asset id (a number), which is what
// Image's `source` accepts. Declared here so components can use `import`
// instead of `require()` for bundled images.
declare module '*.png' {
  const source: number;
  export default source;
}
