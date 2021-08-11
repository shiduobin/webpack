console.log("webpack！");
import "./index.less";
import headImg from "./assets/image/head2.jpg";

let img = new Image();
img.src = headImg;

let root =document.getElementById("app")
root.append(img);

function demo() {
  console.log(2435243);
}

export { demo };
