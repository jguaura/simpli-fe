export function removeCloudinaryTransformations(url: string) {
  const pattern = /\/c_fill,h_300,g_auto,f_auto/g;
  const modifiedUrl = url.replace(pattern, '');
  return modifiedUrl;
}
