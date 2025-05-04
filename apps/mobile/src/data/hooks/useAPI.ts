import { useCallback } from "react";

const urlBase = process.env.API_URL;

export default function useAPI() {
  const httpGET = useCallback(async function (path: string) {
    const uri = path.startsWith("/") ? path : `/${path}`;
    const fullURL = `${urlBase}${uri}`;
    const response = await fetch(fullURL);
    return extractData(response);
  }, []);

  const httpPOST = useCallback(async function (path: string, body: any) {
    const uri = path.startsWith("/") ? path : `/${path}`;
    const fullURL = `${urlBase}${uri}`;

    const response = await fetch(fullURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return extractData(response);
  }, []);

  async function extractData(response: Response) {
    let content = "";
    try {
      content = await response.text();
      return JSON.parse(content);
    } catch (e) {
      return content;
    }
  }

  return { httpGET, httpPOST };
}
