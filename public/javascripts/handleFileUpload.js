const form = document.getElementById("form_data");
console.log(form.name);
console.log(form.video);

const inputForm = form.video;

inputForm.addEventListener("change", async () => {
  console.log(inputForm.files[0]);
  const videoUpload = new FormData();
  videoUpload.append("video", inputForm.files[0]);
  const res = await fetch("http://localhost:3000/cpanel/products/video", {
    method: "post",
    body: JSON.stringify({
      video: videoUpload,
    }),
  });

  let data = await res.json();
  console.log(data);
});
