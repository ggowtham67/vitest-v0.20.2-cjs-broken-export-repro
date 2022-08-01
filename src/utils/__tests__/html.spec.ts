import { describe, test, expect } from 'vitest';
import * as cheerio from 'cheerio';
import { addLoadingAttrToImages } from '../html';

describe("addLoadingAttrToImages", () => {
  test("should add loading=lazy attribute to images", () => {
    const html =
			"<img src='demo.png' class='test' alt='demo'/><img src='demo2.png' alt='demo'/><img src='demo3.png' alt='demo'/>";
		const $ = cheerio.load(html);
		const imageElements = $('img').toArray();
		addLoadingAttrToImages(imageElements);
    const expectedOutput =
    "<img src='demo.png' class='test' alt='demo' loading='lazy'/><img src='demo2.png' alt='demo' loading='lazy'/><img src='demo3.png' alt='demo' loading='lazy'/>";
		expect($('body').html()).toBe(expectedOutput);
  })
})
