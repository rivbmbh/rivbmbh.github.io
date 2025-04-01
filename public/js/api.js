function getAPI(url) {
  const ajax = new XMLHttpRequest();
  let ytThumbnaisPic = document.getElementById("yt-thumbnails-pict");
  let channelName = document.getElementById("channel-name");
  let subsCount = document.getElementById("subs-count");
  let videoCount = document.getElementById("video-count");

  //cek apakah semua state sudah berhasil dilakukan
  ajax.onreadystatechange = function () {
    console.info(`ready state change ${ajax.readyState}`);

    //cek jika sudah berada di state ke 4
    if (ajax.readyState === 4) {
      ajax.addEventListener("load", function () {
        if (ajax.status === 200) {
          const json = JSON.parse(ajax.responseText);
          console.info("Successfully called API", json.items);
          let data = json.items[0];
          ytThumbnaisPic.src = data.snippet.thumbnails.default.url;
          channelName.textContent = data.snippet.title;
          subsCount.textContent =
            data.statistics.subscriberCount + " Subscribers.";
          videoCount.textContent = data.statistics.videoCount + " Videos.";
        }
      });
    }
  };
  ajax.open("GET", url, true);
  ajax.send();
}

getAPI(
  "https://www.googleapis.com/youtube/v3/channels/?part=snippet,contentDetails,statistics&id=UC5EHrVPfCJBCC69Lu2GQf7Q&key=AIzaSyAsC4x71DWsNkGvW-Gn6vemdbh8K3dWPAs"
);
