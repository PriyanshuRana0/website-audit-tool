const axios = require("axios");
const cheerio = require("cheerio");
const validateUrl = require("../utils/validateUrl");

const auditWebsite = async (req, res) => {
    const { url } = req.body;

    // Check if URL is provided
    if (!url) {
        return res.status(400).json({
            error: "URL is required."
        });
    }

    // Validate URL
    if (!validateUrl(url)) {
        return res.status(400).json({
            error: "Invalid URL."
        });
    }

    try {
        const startTime = Date.now();

        const response = await axios.get(url, {
            timeout: 10000,
            validateStatus: () => true
        });

        const endTime = Date.now();

        const responseTime = endTime - startTime;

        const contentType = response.headers["content-type"] || "";

        if (!contentType.includes("text/html")) {
            return res.status(400).json({
                error: "URL does not point to an HTML page."
            });
        }

        const $ = cheerio.load(response.data);

        const title = $("title").text().trim();

        const metaDescription =
            $('meta[name="description"]').attr("content") || "Not Found";

        const h1Count = $("h1").length;

        const missingAltImages = $("img").filter((i, img) => {
            const alt = $(img).attr("alt");
            return !alt || alt.trim() === "";
        }).length;

        const bodyText = $("body").text().replace(/\s+/g, " ").trim();

        const wordCount = bodyText
            ? bodyText.split(" ").length
            : 0;

        return res.json({
            url,
            status: response.status,
            responseTime: `${responseTime} ms`,
            title,
            metaDescription,
            h1Count,
            missingAltImages,
            wordCount
        });

    } catch (error) {

        if (error.code === "ECONNABORTED") {
            return res.status(408).json({
                error: "Request timed out."
            });
        }

        return res.status(500).json({
            error: "Failed to audit website."
        });
    }
};

module.exports = { auditWebsite };