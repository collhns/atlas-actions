import { Client } from "@notionhq/client";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { version, date, author, summary, linked, status } = req.body;
  if (!version || !date || !author || !summary || !linked || !status) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  return res.json({
    ok: true,
    echo: { version, date, author, summary, linked, status }
  });
}
