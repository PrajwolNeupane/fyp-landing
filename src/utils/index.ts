export function getWorkType(type: string) {
  if (type == "REMOTE") {
    return "Remote";
  } else if (type == "HYBRID") {
    return "Hybrid";
  } else {
    return "On Site";
  }
}
