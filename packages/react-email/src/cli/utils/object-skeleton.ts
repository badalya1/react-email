type AnyObject = { [key: string]: any };

export function createShadowObject(
  obj: AnyObject,
  parentPath: string = ""
): AnyObject {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const currentPath = parentPath ? `${parentPath}.${key}` : key;

    if (value && typeof value === "object" && !Array.isArray(value)) {
      acc[key] = createShadowObject(value, currentPath);
    } else {
      acc[key] = `{{${currentPath}}}`;
    }

    return acc;
  }, {} as AnyObject);
}
