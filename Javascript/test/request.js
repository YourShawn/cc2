
fetch("https://reccentre.conestogac.on.ca/booking/reserve", {
  method: "POST",
  headers: {
    Accept: "*/*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "https://reccentre.conestogac.on.ca",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    Cookie:
      "nmstat=5c98007c-a4d5-64b8-b9e2-4a43d5bd0a87; _fbp=fb.2.1660741626281.1530470555; __zlcmid=1BVl9pNm6Fky0gf; _ga_45TCZ3HV8F=GS1.1.1662493780.1.0.1662493780.0.0.0; cookieControl=true; cookieControlPrefs=[]; _gcl_au=1.1.523491578.1670549917; _ga=GA1.3.1915126780.1659966465; _ga_RN8C0HR85Y=GS1.1.1671899657.13.0.1671899657.0.0.0; ASP.NET_SessionId=5g4xfjpzd1bs3bkvfey1mcrt; __RequestVerificationToken=XiI1l2O_QWdR7oPCWku7d-MgT--k_8XALPuSjJ5hYEqOfBFr3MCbOxrEGpy_2Ssij2QjrAdrBzqHQ_YzQKJFmPofG7XIwP-Ai_Req_V1DBY1; _gid=GA1.3.1956595344.1674511261; _shibsession_64656661756c7468747470733a2f2f72656363656e7472652e636f6e6573746f6761632e6f6e2e63612f73686962626f6c657468=_693d5404b4a25878b256aeedd441fcdf; .AspNet.ApplicationCookie=Pymyya3XtXOj28AKPW_dzOcERrx895w_LaxDfqdQ7WAja-GIEzZ4ADbOxuoEhIKsi9jay2LD7iV1Zc4KSZ5ODbxQCUeb9COTKnLqcEvzfX_VKh_UHZhtA31oazWEr5iEe63nRnRyDBq5ntcXjSVZWQPFQg9eNRijhY77DFuFJ1vRX5SAGGSvyomVzMKGiKe2ldim7VB9BGuPFHRYixP_RrUfrLMPaVsqU51b0cVbcE2puScGqUiZuy5PpJW40Ekrf4bj4lI_dM2Axa2ObfauD2CVDsUmUjlXmQ_4tvEovUM-m8Wok75pml40xAT7GfSFJgXI98_D95VqzOkuWSUYiS5kX71OrBqpDZyZKLRjjy87GoK15iro32UBaI0vYpCVVoKG1tjq9F0aynrtEaIZRw",
    Origin: "https://reccentre.conestogac.on.ca",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
  },
  body: JSON.stringify({ id: 78912 }),
})
  .then((response) => response.json())
  .then((response) => console.log(JSON.stringify(response)));
