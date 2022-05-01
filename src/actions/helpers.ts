export async function handleErrors(response: any) {
  if (!response.ok) {
    throw Error("Something went wrong!");
  }
  return response;
}
