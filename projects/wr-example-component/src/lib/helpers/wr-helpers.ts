export function filterDuplicate(array: any[], param: string | number) {
  const filtered = array
    .map((e: { [x: string]: any }) => e[param])
    .map((e: any, i: any, final: string | any[]) => final.indexOf(e) === i && i)
    .filter((e: string | number) => array[e])
    .map((e: string | number) => array[e]);
  return filtered;
}

export function filterDuplicateStringArray(array: any) {
  const filtered = (strings: any[]) =>
    strings.filter((v: any, i: any) => strings.indexOf(v) === i);

  return filtered(array);
}

export function getQueryStrings(name: string, url?: string) {
  if (!url) {
    url = window.location.href;
  }

  name = name.replace(/[\[\]]/g, '\\$&');

  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);

  if (!results) {
    return null;
  }

  if (!results[2]) {
    return '';
  }

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
