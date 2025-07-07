import useEditorStore from "../../utils/editorStore";
import Image from "../image/image";

export const Layers = () => {
  const { selectedLayer, setSelectedLayer, addText, canvasOptions } =
    useEditorStore();

  const handleSelectLayer = (layer) => {
    setSelectedLayer(layer);

    console.log("layer:", layer);
    if (layer === "text") {
      addText();
    }
  };

  return (
    <div className="layers">
      <div className="layersTitle">
        <h3> Layers</h3>
        <p> Select a Layer to edit</p>
      </div>
      <div
        className={`layer ${selectedLayer === "text" ? "selected" : ""}`}
        onClick={() => handleSelectLayer("text")}
      >
        <div className="layerImg">
          <Image path="/general/text.png" alt="" w={48} h={48} />
        </div>
        <span> Add text</span>
      </div>
      <div
        className={`layer ${selectedLayer === "canvas" ? "selected" : ""}`}
        onClick={() => handleSelectLayer("canvas")}
      >
        <div
          className="layerImg"
          style={{ backgroundColor: canvasOptions.backgroundColor }}
        ></div>
        <span>Canvas</span>
      </div>
    </div>
  );
};
