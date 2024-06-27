import newsXml from './news.xml';
import {XMLParser} from "fast-xml-parser";

export async function readNews() {
    const xml = await (await fetch(newsXml)).text();
    const newsData = new XMLParser().parse(xml);
    return newsData.news.item;
}
