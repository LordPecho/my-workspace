export function updateObject(target: any, source: any): void {
  Object.entries(source).forEach((property: [string, any]) => {
    target[property[0]] = property[1];
  });
}
