const getComments = (resource) => {


  return new Promise((resolve, reject) => {

     const request = new XMLHttpRequest();

     request.addEventListener("readystatechange", () => {
       // console.log(request, request.readyState);

       if (request.readyState === 4 && request.status === 200) {
         const data = JSON.parse(request.responseText);
         resolve(data);
       } else if (request.readyState === 4) {
         reject("Cannot fetch data");
       }
     });

     request.open("GET", resource);

     request.send();

  })

 
};


getComments('demo.json').then((data) => {
  console.log('Promise Resolved',data)
}).catch((err) => {
  console.log(err)
})