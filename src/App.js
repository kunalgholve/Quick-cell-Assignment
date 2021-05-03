import "./styles.css";
import data from "./data.json";
import Image from "./components/Image";
import Error from "./components/Error";
import BigIcon from "./components/BigError";
export default function App() {
  let noOfempty;
 
  return (
    <div>
      {data.map((item) => (
        <div>
          {item.images.map((img) => (
            <>
              {img.ready ? <Image path={img.url} /> : <Error />}
              {!img.ready ? <BigIcon /> : ""}
            </>
          ))}
          <h1>{item.name}</h1>
          <p>{item.count} products</p>
        </div>
      ))}
    </div>
  );
}
