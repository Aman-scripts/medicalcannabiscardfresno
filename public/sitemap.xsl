<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="sitemap">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style type="text/css">
          :root {
            color-scheme: light;
          }
          body {
            margin: 0;
            padding: 32px 20px 48px;
            font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
            font-size: 15px;
            line-height: 1.5;
            color: #1f2937;
            background: #ffffff;
          }
          #content {
            max-width: 1100px;
            margin: 0 auto;
          }
          h1 {
            margin: 0 0 16px;
            font-size: 2rem;
            font-weight: 700;
            letter-spacing: -0.02em;
            color: #111827;
          }
          .expl {
            margin: 0 0 28px;
            padding: 14px 16px;
            border: 1px solid #b7e4c7;
            border-radius: 10px;
            background: #ecfdf3;
            color: #14532d;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th {
            padding: 12px 14px;
            text-align: left;
            font-size: 13px;
            font-weight: 700;
            color: #111827;
            border-bottom: 2px solid #e5e7eb;
            white-space: nowrap;
          }
          td {
            padding: 12px 14px;
            font-size: 14px;
            color: #374151;
            border-bottom: 1px solid #f3f4f6;
            vertical-align: top;
          }
          tbody tr:nth-child(odd) td {
            background: #fafafa;
          }
          tbody tr:hover td {
            background: #f0fdf4;
          }
          a {
            color: #1c503c;
            text-decoration: none;
            word-break: break-all;
          }
          a:hover {
            text-decoration: underline;
          }
          .meta {
            white-space: nowrap;
            font-variant-numeric: tabular-nums;
          }
        </style>
      </head>
      <body>
        <div id="content">
          <h1>XML Sitemap</h1>
          <p class="expl">
            This XML sitemap is generated for search engines following the sitemap.org protocol.
            It lists every page on this site along with when it was last updated.
          </p>
          <table id="sitemap">
            <thead>
              <tr>
                <th>URL</th>
                <th>Last Modified</th>
                <th>Change Frequency</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a>
                      <xsl:attribute name="href">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:attribute>
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td class="meta">
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                  <td class="meta">
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td class="meta">
                    <xsl:value-of select="sitemap:priority"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
