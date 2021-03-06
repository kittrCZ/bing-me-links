"use strict";

const expect = require("chai").expect;
const vo = require("vo");

const bingMeLinks = require("../index.js");

describe("bing me links", () => {
  it("should return found links for keyword from bing", (done) => {
    const engine = "bing";
    const keyword = "javascript";

    const search = vo(bingMeLinks.search(engine, keyword));
    vo(search)
      .then((response) => {
        expect(response).to.exist;
        expect(response.length).to.be.above(60);
        expect(response).to.include("https://www.javascript.com/");
        expect(response).to.include("http://www.javascriptkit.com/");
        expect(response).to.include("http://www.aliada.net/mqulbow/");

        done();
      });
  });

  it("should return found links for keyword with url from bing", (done) => {
    const engine = "bing";
    const keyword = "http://www.thefreedictionary.com/question+mark";

    const search = vo(bingMeLinks.search(engine, keyword));
    vo(search)
      .then((response) => {
        expect(response).to.exist;
        expect(response.length).to.be.above(20);
        expect(response).to.include("http://legal-dictionary.thefreedictionary.com/question+mark");
        expect(response).to.include("https://www.rockbox.org/irc/log-20060913");

        done();
      });
  });

  it("should return found links for keyword from yahoo", (done) => {
    const engine = "yahoo";
    const keyword = "javascript";

    const search = vo(bingMeLinks.search(engine, keyword));
    vo(search)
      .then((response) => {
        expect(response).to.exist;
        expect(response.length).to.be.above(60);
        expect(response).to.include("https://www.javascript.com/try");
        expect(response).to.include("https://www.npmjs.com/");
        expect(response).to.include("http://javascript.info/");

        done();
      });
  });

});
